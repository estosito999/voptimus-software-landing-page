'use client'

import { useMemo } from 'react'
import styles from './HeroVisual.module.css'

/* Neural network node positions */
const NODES = [
  { cx: 200, cy: 80  },
  { cx: 340, cy: 60  },
  { cx: 440, cy: 130 },
  { cx: 520, cy: 95  },
  { cx: 70,  cy: 125 },
  { cx: 120, cy: 180 },
  { cx: 260, cy: 200 },
  { cx: 390, cy: 240 },
  { cx: 515, cy: 245 },
  { cx: 160, cy: 310 },
  { cx: 310, cy: 340 },
  { cx: 460, cy: 300 },
  { cx: 60,  cy: 330 },
  { cx: 80,  cy: 400 },
  { cx: 220, cy: 430 },
  { cx: 380, cy: 420 },
  { cx: 490, cy: 400 },
  { cx: 140, cy: 500 },
  { cx: 300, cy: 510 },
  { cx: 430, cy: 490 },
  { cx: 520, cy: 525 },
  { cx: 245, cy: 110 },
]

const EDGES = [
  [0,1],[1,2],[2,3],[0,21],[1,21],[2,7],[3,8],[4,5],[4,0],[5,6],
  [5,9],[6,7],[6,10],[7,8],[7,11],[8,11],[9,10],[9,12],[10,11],[10,14],
  [11,16],[12,13],[13,14],[14,15],[15,16],[14,17],[15,18],[16,19],[17,18],
  [18,19],[19,20],[16,20],
]

/* Floating particles */
function genParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left:  10 + (i * 73) % 80,
    size:  2 + (i * 31) % 5,
    delay: (i * 0.37) % 5,
    dur:   3.5 + (i * 0.23) % 3,
    color: i % 3 === 0 ? 'var(--cyan)' : i % 3 === 1 ? 'var(--green)' : 'var(--violet)',
  }))
}

/* 3D Cube positions */
const CUBES = [
  { x: 5,  y: 10, size: 70, delay: 0,   dur: 12, color: 'var(--cyan)'   },
  { x: 70, y: 5,  size: 50, delay: 2,   dur: 14, color: 'var(--violet)' },
  { x: 36, y: 2,  size: 34, delay: 1.4, dur: 13, color: 'var(--green)'  },
  { x: 55, y: 60, size: 60, delay: 1,   dur: 10, color: 'var(--green)'  },
  { x: 15, y: 65, size: 40, delay: 3,   dur: 16, color: 'var(--cyan)'   },
  { x: 82, y: 45, size: 45, delay: 0.5, dur: 11, color: 'var(--violet)' },
  { x: 2,  y: 42, size: 44, delay: 2.6, dur: 15, color: 'var(--cyan)'   },
  { x: 76, y: 77, size: 34, delay: 3.4, dur: 12, color: 'var(--green)'  },
  { x: 42, y: 78, size: 38, delay: 1.8, dur: 17, color: 'var(--violet)' },
]

function Cube({ x, y, size, delay, dur, color }: (typeof CUBES)[0]) {
  const s = size
  const h = s * 0.4  // height of top face (perspective)
  const half = s / 2

  return (
    <div
      className={styles.cube}
      style={{
        left: `${x}%`,
        top:  `${y}%`,
        width:  s,
        height: s,
        animationDelay: `${delay}s`,
        animationDuration: `${dur}s`,
      }}
    >
      {/* Front */}
      <div className={styles.cubeFace} style={{
        width: s, height: s,
        border: `1px solid ${color}`,
        background: `${color}08`,
        transform: `translateZ(${half}px)`,
      }} />
      {/* Back */}
      <div className={styles.cubeFace} style={{
        width: s, height: s,
        border: `1px solid ${color}`,
        background: `${color}05`,
        transform: `translateZ(-${half}px) rotateY(180deg)`,
      }} />
      {/* Left */}
      <div className={styles.cubeFace} style={{
        width: s, height: s,
        border: `1px solid ${color}`,
        background: `${color}06`,
        transform: `rotateY(-90deg) translateZ(${half}px)`,
      }} />
      {/* Right */}
      <div className={styles.cubeFace} style={{
        width: s, height: s,
        border: `1px solid ${color}`,
        background: `${color}06`,
        transform: `rotateY(90deg) translateZ(${half}px)`,
      }} />
      {/* Top */}
      <div className={styles.cubeFace} style={{
        width: s, height: s,
        border: `1px solid ${color}`,
        background: `${color}0a`,
        transform: `rotateX(90deg) translateZ(${half}px)`,
      }} />
      {/* Bottom */}
      <div className={styles.cubeFace} style={{
        width: s, height: s,
        border: `1px solid ${color}`,
        transform: `rotateX(-90deg) translateZ(${half}px)`,
      }} />
    </div>
  )
}

export default function HeroVisual() {
  const particles = useMemo(() => genParticles(24), [])

  return (
    <div className={styles.visual} aria-hidden="true">
      {/* Animated gradient orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* Grid lines */}
      <div className={styles.grid} />

      {/* 3D Cubes */}
      {CUBES.map((c, i) => (
        <Cube key={i} {...c} />
      ))}

      {/* Neural network SVG */}
      <svg
        className={styles.network}
        viewBox="0 0 560 580"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Digital tree path */}
          <linearGradient id="treeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--green)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--green)" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Edges */}
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].cx} y1={NODES[a].cy}
            x2={NODES[b].cx} y2={NODES[b].cy}
            stroke="url(#edgeGrad)"
            strokeWidth="1"
            strokeDasharray="400"
            strokeDashoffset="400"
            filter="url(#glow)"
            style={{
              animation: `lineGrow ${3.5 + (i % 4) * 0.4}s ease-in-out infinite`,
              animationDelay: `${(i * 0.18) % 3}s`,
            }}
          />
        ))}

        {/* Nodes */}
        {NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.cx} cy={n.cy}
            r="4.5"
            fill={i % 3 === 0 ? 'var(--cyan)' : i % 3 === 1 ? 'var(--green)' : 'var(--violet)'}
            filter="url(#glow)"
            style={{
              transformOrigin: `${n.cx}px ${n.cy}px`,
              animation: `nodePulse ${2.2 + (i % 4) * 0.4}s ease-in-out infinite`,
              animationDelay: `${(i * 0.2) % 2}s`,
            }}
          />
        ))}

        {/* Digital tree trunk */}
        <line x1="280" y1="575" x2="280" y2="480" stroke="url(#treeGrad)" strokeWidth="3"
          strokeDasharray="300" strokeDashoffset="300"
          style={{ animation: 'branchGrow 5s ease-in-out infinite', animationDelay: '0s' }} />
        {/* Main branches */}
        <line x1="280" y1="480" x2="220" y2="430" stroke="url(#treeGrad)" strokeWidth="2.5"
          strokeDasharray="300" strokeDashoffset="300"
          style={{ animation: 'branchGrow 5s ease-in-out infinite', animationDelay: '0.3s' }} />
        <line x1="280" y1="480" x2="340" y2="430" stroke="url(#treeGrad)" strokeWidth="2.5"
          strokeDasharray="300" strokeDashoffset="300"
          style={{ animation: 'branchGrow 5s ease-in-out infinite', animationDelay: '0.5s' }} />
        <line x1="220" y1="430" x2="185" y2="390" stroke="url(#treeGrad)" strokeWidth="2"
          strokeDasharray="300" strokeDashoffset="300"
          style={{ animation: 'branchGrow 5s ease-in-out infinite', animationDelay: '0.7s' }} />
        <line x1="220" y1="430" x2="250" y2="385" stroke="url(#treeGrad)" strokeWidth="2"
          strokeDasharray="300" strokeDashoffset="300"
          style={{ animation: 'branchGrow 5s ease-in-out infinite', animationDelay: '0.9s' }} />
        <line x1="340" y1="430" x2="310" y2="385" stroke="url(#treeGrad)" strokeWidth="2"
          strokeDasharray="300" strokeDashoffset="300"
          style={{ animation: 'branchGrow 5s ease-in-out infinite', animationDelay: '1.1s' }} />
        <line x1="340" y1="430" x2="370" y2="390" stroke="url(#treeGrad)" strokeWidth="2"
          strokeDasharray="300" strokeDashoffset="300"
          style={{ animation: 'branchGrow 5s ease-in-out infinite', animationDelay: '1.3s' }} />
        {/* Tree tips as circles */}
        {[
          { cx: 185, cy: 390 }, { cx: 250, cy: 385 },
          { cx: 310, cy: 385 }, { cx: 370, cy: 390 },
        ].map((t, i) => (
          <circle key={i} cx={t.cx} cy={t.cy} r="5" fill="var(--green)" filter="url(#glow)"
            style={{
              transformOrigin: `${t.cx}px ${t.cy}px`,
              animation: `nodePulse 2.2s ease-in-out infinite`,
              animationDelay: `${i * 0.25}s`,
            }} />
        ))}
      </svg>

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            left: `${p.left}%`,
            width:  p.size,
            height: p.size,
            background: p.color,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            bottom: '-10px',
          }}
        />
      ))}

      {/* Energy rings */}
      <div className={styles.ring1} />
      <div className={styles.ring2} />
      <div className={styles.ring3} />
    </div>
  )
}
