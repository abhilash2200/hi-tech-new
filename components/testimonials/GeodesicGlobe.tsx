"use client";

import React, { useEffect, useRef, useState } from "react";

// Generate icosahedron vertices & edges subdivided once (42 vertices, 120 edges)
const generateGeodesicData = () => {
  const phi = (1 + Math.sqrt(5)) / 2;
  const initialVertices = [
    [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
    [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
    [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
  ];

  const vertices: number[][] = initialVertices.map(([x, y, z]) => {
    const len = Math.sqrt(x * x + y * y + z * z);
    return [x / len, y / len, z / len];
  });

  const initialFaces = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
  ];

  const midCache = new Map<string, number>();
  const getMid = (i1: number, i2: number): number => {
    const key = i1 < i2 ? `${i1}_${i2}` : `${i2}_${i1}`;
    if (midCache.has(key)) return midCache.get(key)!;
    const p1 = vertices[i1];
    const p2 = vertices[i2];
    const mid = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, (p1[2] + p2[2]) / 2];
    const len = Math.sqrt(mid[0] ** 2 + mid[1] ** 2 + mid[2] ** 2);
    const normalized = [mid[0] / len, mid[1] / len, mid[2] / len];
    const idx = vertices.length;
    vertices.push(normalized);
    midCache.set(key, idx);
    return idx;
  };

  const subdividedFaces: number[][] = [];
  for (const [a, b, c] of initialFaces) {
    const ab = getMid(a, b);
    const bc = getMid(b, c);
    const ca = getMid(c, a);
    subdividedFaces.push([a, ab, ca]);
    subdividedFaces.push([b, bc, ab]);
    subdividedFaces.push([c, ca, bc]);
    subdividedFaces.push([ab, bc, ca]);
  }

  const edgeSet = new Set<string>();
  const edges: [number, number][] = [];
  for (const [a, b, c] of subdividedFaces) {
    for (const [p1, p2] of [[a, b], [b, c], [c, a]] as [number, number][]) {
      const key = p1 < p2 ? `${p1}_${p2}` : `${p2}_${p1}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push([p1, p2]);
      }
    }
  }

  return { vertices, edges };
};

const GEODESIC_DATA = generateGeodesicData();

export default function GeodesicGlobe({
  className = "",
  size = 360,
  color = "#B84A1A",
  nodeColor = "#C65322",
}: {
  className?: string;
  size?: number;
  color?: string;
  nodeColor?: string;
}) {
  const [rotation, setRotation] = useState({ rx: 0.35, ry: 0 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let lastTime = performance.now();
    const animate = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      // Smooth continuous circular rotation around Y with gentle X-axis tilt
      setRotation((prev) => ({
        rx: 0.35 + Math.sin(now * 0.0003) * 0.05,
        ry: prev.ry + delta * 0.22, // Elegant steady circular spin
      }));
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const { vertices, edges } = GEODESIC_DATA;
  const radius = size * 0.42;
  const center = size / 2;
  const cameraDistance = 3.2;

  // Project 3D vertices to 2D screen space
  const cosY = Math.cos(rotation.ry);
  const sinY = Math.sin(rotation.ry);
  const cosX = Math.cos(rotation.rx);
  const sinX = Math.sin(rotation.rx);

  const projectedVertices = vertices.map(([x, y, z]) => {
    // Rotation around Y
    const x1 = x * cosY - z * sinY;
    const z1 = x * sinY + z * cosY;

    // Rotation around X
    const y1 = y * cosX - z1 * sinX;
    const z2 = y * sinX + z1 * cosX;

    // Perspective projection
    const scale = cameraDistance / (cameraDistance - z2);
    const px = center + x1 * radius * scale;
    const py = center + y1 * radius * scale;

    return { px, py, z: z2 };
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Soft Glowing Copper/Orange Node Filter */}
        <filter id="geodesicGlowExact" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Geodesic Triangular Lattice Edges */}
      <g>
        {edges.map(([i1, i2], idx) => {
          const p1 = projectedVertices[i1];
          const p2 = projectedVertices[i2];
          const avgZ = (p1.z + p2.z) / 2;

          // Depth attenuation matching the screenshot's subtle transparency
          const isFront = avgZ > -0.2;
          const strokeOpacity = isFront
            ? Math.min(0.75, 0.35 + (avgZ + 0.2) * 0.4)
            : Math.max(0.1, 0.18 + avgZ * 0.1);
          const strokeWidth = isFront ? 1.1 : 0.65;

          return (
            <line
              key={idx}
              x1={p1.px}
              y1={p1.py}
              x2={p2.px}
              y2={p2.py}
              stroke={color}
              strokeWidth={strokeWidth}
              strokeOpacity={strokeOpacity}
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* Geodesic Vertices Glowing Nodes */}
      <g>
        {projectedVertices.map((p, idx) => {
          const isFront = p.z > 0;
          const nodeRadius = isFront ? 2.0 + p.z * 1.0 : 1.2;
          const opacity = isFront ? 0.6 + p.z * 0.3 : 0.15;

          return (
            <circle
              key={idx}
              cx={p.px}
              cy={p.py}
              r={nodeRadius}
              fill={nodeColor}
              opacity={opacity}
              filter={isFront ? "url(#geodesicGlowExact)" : undefined}
            />
          );
        })}
      </g>
    </svg>
  );
}
