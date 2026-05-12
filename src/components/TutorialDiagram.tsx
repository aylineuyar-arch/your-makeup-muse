import React from "react";

export type DiagramKind =
  | "undertone"
  | "foundation"
  | "eyes"
  | "brows"
  | "lips"
  | "set";

/**
 * Stylized anatomical diagrams for makeup tutorials.
 * Pure SVG — uses currentColor + accent token so it inherits the theme.
 */
export function TutorialDiagram({ kind }: { kind: DiagramKind }) {
  return (
    <div className="w-full bg-surface border border-border rounded-md p-4 mb-5">
      <svg
        viewBox="0 0 240 200"
        className="w-full h-auto text-ink"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <marker
            id={`arrow-${kind}`}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" stroke="none" className="text-accent" />
          </marker>
        </defs>
        {render(kind)}
      </svg>
    </div>
  );
}

function FaceOutline() {
  return (
    <>
      {/* face */}
      <path d="M120 28 C 78 28 62 64 62 102 C 62 142 88 178 120 178 C 152 178 178 142 178 102 C 178 64 162 28 120 28 Z" />
      {/* hairline hint */}
      <path d="M76 60 Q 120 38 164 60" opacity="0.35" />
      {/* nose */}
      <path d="M120 92 L 116 122 Q 120 128 124 122" opacity="0.55" />
      {/* mouth */}
      <path d="M108 146 Q 120 152 132 146" opacity="0.55" />
      {/* eyes */}
      <ellipse cx="98" cy="96" rx="8" ry="3.5" opacity="0.55" />
      <ellipse cx="142" cy="96" rx="8" ry="3.5" opacity="0.55" />
      {/* brows */}
      <path d="M88 84 Q 98 80 108 84" opacity="0.55" />
      <path d="M132 84 Q 142 80 152 84" opacity="0.55" />
    </>
  );
}

function render(kind: DiagramKind) {
  switch (kind) {
    case "undertone":
      return (
        <>
          {/* wrist + veins */}
          <path d="M40 60 Q 120 40 200 60 L 200 140 Q 120 160 40 140 Z" opacity="0.5" />
          <path d="M70 70 Q 120 100 175 75" className="text-accent" stroke="currentColor" strokeWidth="1.2" />
          <path d="M80 95 Q 130 120 180 100" className="text-accent" stroke="currentColor" strokeWidth="1.2" />
          <path d="M65 115 Q 115 135 170 120" className="text-accent" stroke="currentColor" strokeWidth="1.2" />
          {/* labels */}
          <text x="40" y="40" fontSize="7" fill="currentColor" stroke="none" className="font-mono uppercase tracking-widest" opacity="0.7">
            inner wrist · natural light
          </text>
          <text x="184" y="78" fontSize="6" fill="currentColor" stroke="none" opacity="0.65">blue → cool</text>
          <text x="184" y="103" fontSize="6" fill="currentColor" stroke="none" opacity="0.65">green → warm</text>
          <text x="178" y="128" fontSize="6" fill="currentColor" stroke="none" opacity="0.65">mix → neutral</text>
        </>
      );

    case "foundation":
      return (
        <>
          <FaceOutline />
          {/* application dots — center of face */}
          {[
            [120, 70],
            [104, 92],
            [136, 92],
            [120, 110],
            [108, 124],
            [132, 124],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.4" fill="currentColor" stroke="none" className="text-accent" />
          ))}
          {/* outward arrows */}
          <path d="M104 92 L 78 86" markerEnd={`url(#arrow-foundation)`} className="text-accent" stroke="currentColor" strokeWidth="1.1" />
          <path d="M136 92 L 162 86" markerEnd={`url(#arrow-foundation)`} className="text-accent" stroke="currentColor" strokeWidth="1.1" />
          <path d="M108 124 L 82 134" markerEnd={`url(#arrow-foundation)`} className="text-accent" stroke="currentColor" strokeWidth="1.1" />
          <path d="M132 124 L 158 134" markerEnd={`url(#arrow-foundation)`} className="text-accent" stroke="currentColor" strokeWidth="1.1" />
          <path d="M120 70 L 120 50" markerEnd={`url(#arrow-foundation)`} className="text-accent" stroke="currentColor" strokeWidth="1.1" />
          <text x="6" y="14" fontSize="7" fill="currentColor" stroke="none" opacity="0.7" className="uppercase">
            center → outward · press, don't drag
          </text>
        </>
      );

    case "eyes": {
      // Big eye anatomy
      return (
        <>
          {/* brow */}
          <path d="M40 50 Q 120 30 200 50" opacity="0.45" />
          {/* eye almond */}
          <path d="M40 110 Q 120 60 200 110 Q 120 150 40 110 Z" />
          {/* iris */}
          <circle cx="120" cy="110" r="22" />
          <circle cx="120" cy="110" r="8" fill="currentColor" stroke="none" opacity="0.6" />
          {/* zones */}
          {/* transition (crease) */}
          <path d="M52 96 Q 120 60 188 96" className="text-accent" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" />
          {/* lid (pressed flat) */}
          <ellipse cx="120" cy="100" rx="55" ry="10" className="text-accent" stroke="currentColor" strokeWidth="1.1" opacity="0.7" />
          {/* outer V */}
          <path d="M168 92 Q 188 110 168 124" className="text-accent" stroke="currentColor" strokeWidth="1.6" />
          {/* arrows */}
          <path d="M70 80 Q 120 70 170 80" markerEnd={`url(#arrow-eyes)`} className="text-accent" stroke="currentColor" strokeWidth="1" opacity="0.8" />
          {/* labels */}
          <text x="46" y="76" fontSize="6.5" fill="currentColor" stroke="none" opacity="0.75">1 · transition (crease)</text>
          <text x="92" y="118" fontSize="6.5" fill="currentColor" stroke="none" opacity="0.75">2 · lid · press flat</text>
          <text x="148" y="146" fontSize="6.5" fill="currentColor" stroke="none" opacity="0.75">3 · outer V</text>
          <text x="6" y="14" fontSize="7" fill="currentColor" stroke="none" opacity="0.7" className="uppercase">
            windshield-wiper through crease
          </text>
        </>
      );
    }

    case "brows":
      return (
        <>
          {/* nose reference */}
          <path d="M118 70 L 114 130 Q 120 138 126 130 L 122 70" opacity="0.4" />
          {/* brow */}
          <path d="M40 56 Q 90 36 140 44 Q 168 50 196 60" className="text-accent" stroke="currentColor" strokeWidth="2.2" />
          {/* hair-like flicks */}
          {Array.from({ length: 18 }).map((_, i) => {
            const t = i / 17;
            const x = 44 + t * 150;
            const y = 56 - Math.sin(t * Math.PI) * 16;
            return <path key={i} d={`M${x} ${y + 1} L ${x + 1.5} ${y - 4}`} opacity="0.55" />;
          })}
          {/* alignment guides from nose */}
          <path d="M120 140 L 60 50" strokeDasharray="2 3" opacity="0.55" />
          <path d="M120 140 L 130 42" strokeDasharray="2 3" opacity="0.55" />
          <path d="M120 140 L 184 56" strokeDasharray="2 3" opacity="0.55" />
          {/* points */}
          <circle cx="60" cy="50" r="2.6" fill="currentColor" stroke="none" className="text-accent" />
          <circle cx="130" cy="42" r="2.6" fill="currentColor" stroke="none" className="text-accent" />
          <circle cx="184" cy="56" r="2.6" fill="currentColor" stroke="none" className="text-accent" />
          {/* labels */}
          <text x="34" y="44" fontSize="6.5" fill="currentColor" stroke="none" opacity="0.75">start</text>
          <text x="120" y="34" fontSize="6.5" fill="currentColor" stroke="none" opacity="0.75">arch</text>
          <text x="178" y="50" fontSize="6.5" fill="currentColor" stroke="none" opacity="0.75">tail</text>
          <text x="6" y="14" fontSize="7" fill="currentColor" stroke="none" opacity="0.7" className="uppercase">
            three-point alignment from nostril
          </text>
        </>
      );

    case "lips":
      return (
        <>
          {/* lips */}
          <path d="M60 100 Q 90 78 120 92 Q 150 78 180 100 Q 150 124 120 118 Q 90 124 60 100 Z" />
          {/* cupid's bow detail */}
          <path d="M110 92 L 120 100 L 130 92" opacity="0.6" />
          {/* center */}
          <circle cx="120" cy="105" r="2.6" fill="currentColor" stroke="none" className="text-accent" />
          {/* outward arrows */}
          <path d="M120 105 L 88 100" markerEnd={`url(#arrow-lips)`} className="text-accent" stroke="currentColor" strokeWidth="1.1" />
          <path d="M120 105 L 152 100" markerEnd={`url(#arrow-lips)`} className="text-accent" stroke="currentColor" strokeWidth="1.1" />
          {/* liner — just outside natural line */}
          <path d="M58 100 Q 90 76 120 90 Q 150 76 182 100 Q 150 126 120 120 Q 90 126 58 100 Z"
            strokeDasharray="2 2" className="text-accent" stroke="currentColor" strokeWidth="0.9" opacity="0.85" />
          {/* labels */}
          <text x="54" y="76" fontSize="6.5" fill="currentColor" stroke="none" opacity="0.75">liner · just outside the line</text>
          <text x="102" y="142" fontSize="6.5" fill="currentColor" stroke="none" opacity="0.75">center → outward</text>
          <text x="6" y="14" fontSize="7" fill="currentColor" stroke="none" opacity="0.7" className="uppercase">
            blot · powder · reapply
          </text>
        </>
      );

    case "set":
      return (
        <>
          <FaceOutline />
          {/* X pattern */}
          <path d="M70 50 L 170 154" strokeDasharray="3 3" className="text-accent" stroke="currentColor" strokeWidth="1.1" />
          <path d="M170 50 L 70 154" strokeDasharray="3 3" className="text-accent" stroke="currentColor" strokeWidth="1.1" />
          {/* T pattern */}
          <path d="M70 70 L 170 70" className="text-accent" stroke="currentColor" strokeWidth="1.4" />
          <path d="M120 70 L 120 160" className="text-accent" stroke="currentColor" strokeWidth="1.4" />
          {/* mist particles */}
          {Array.from({ length: 24 }).map((_, i) => {
            const x = 30 + (i * 7) % 180;
            const y = 30 + Math.floor((i * 7) / 180) * 14 + (i % 2) * 4;
            return <circle key={i} cx={x} cy={y} r="0.9" fill="currentColor" stroke="none" opacity="0.4" />;
          })}
          <text x="6" y="14" fontSize="7" fill="currentColor" stroke="none" opacity="0.7" className="uppercase">
            mist · X then T · let air-dry
          </text>
        </>
      );
  }
}
