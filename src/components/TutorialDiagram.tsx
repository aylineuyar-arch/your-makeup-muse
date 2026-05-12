import React from "react";

export type DiagramKind =
  | "undertone"
  | "foundation"
  | "eyes"
  | "brows"
  | "lips"
  | "set";

/**
 * Anatomical diagrams for makeup tutorials.
 * Goal: someone glancing at the picture should immediately see WHERE on
 * their face the product goes, in WHICH ORDER, and in WHICH DIRECTION.
 *
 * Conventions:
 *  - Filled tinted shapes  → the area to apply product on
 *  - Numbered circles ①②③  → sequence
 *  - Solid arrows         → direction of motion
 *  - Dashed lines         → alignment / reference guides
 */
export function TutorialDiagram({ kind }: { kind: DiagramKind }) {
  return (
    <div className="w-full bg-surface border border-border rounded-md p-5 mb-5">
      <svg
        viewBox="0 0 320 260"
        className="w-full h-auto"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
      >
        <defs>
          <marker
            id="tut-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="hsl(20 25% 35%)" />
          </marker>
        </defs>
        {render(kind)}
      </svg>
      <Legend kind={kind} />
    </div>
  );
}

/* ---------------- Shared primitives ---------------- */

const INK = "hsl(25 15% 25%)";       // outline
const FAINT = "hsl(25 15% 25% / 0.35)";
const ZONE = "hsl(20 50% 55% / 0.28)"; // application zone fill
const ZONE_STRONG = "hsl(20 50% 55% / 0.55)";
const ACCENT = "hsl(20 50% 45%)";

function StepBadge({ x, y, n }: { x: number; y: number; n: number | string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="9" fill={ACCENT} />
      <text
        x={x}
        y={y + 3.4}
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="white"
        stroke="none"
        fontFamily="ui-sans-serif, system-ui"
      >
        {n}
      </text>
    </g>
  );
}

function Caption({ x, y, children, anchor = "start" }: {
  x: number; y: number; children: string; anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize="9"
      fill={INK}
      stroke="none"
      textAnchor={anchor}
      fontFamily="ui-sans-serif, system-ui"
    >
      {children}
    </text>
  );
}

/* ---------------- Face base ---------------- */

function FaceBase() {
  return (
    <g stroke={INK} strokeWidth="1.1" fill="none">
      {/* face oval */}
      <path d="M160 32 C 108 32 86 76 86 130 C 86 184 122 232 160 232 C 198 232 234 184 234 130 C 234 76 212 32 160 32 Z" />
      {/* hairline */}
      <path d="M104 70 Q 160 44 216 70" stroke={FAINT} />
      {/* nose */}
      <path d="M160 116 L 154 158 Q 160 166 166 158" stroke={FAINT} />
      {/* mouth */}
      <path d="M144 184 Q 160 192 176 184" stroke={FAINT} />
      {/* eyes */}
      <ellipse cx="132" cy="124" rx="11" ry="4.5" stroke={FAINT} />
      <ellipse cx="188" cy="124" rx="11" ry="4.5" stroke={FAINT} />
      {/* brows */}
      <path d="M120 108 Q 132 102 144 108" stroke={FAINT} />
      <path d="M176 108 Q 188 102 200 108" stroke={FAINT} />
    </g>
  );
}

/* ---------------- Renderers ---------------- */

function render(kind: DiagramKind) {
  switch (kind) {
    case "undertone":
      return <Undertone />;
    case "foundation":
      return <Foundation />;
    case "eyes":
      return <Eyes />;
    case "brows":
      return <Brows />;
    case "lips":
      return <Lips />;
    case "set":
      return <Set />;
  }
}

/* ---- 1. Undertone ---- */
function Undertone() {
  return (
    <g>
      <Caption x={160} y={20} anchor="middle">Look at the inner wrist in natural daylight</Caption>

      {/* arm */}
      <path
        d="M40 110 Q 60 80 100 78 L 220 70 Q 270 70 290 110 L 290 170 Q 270 200 220 196 L 100 188 Q 60 188 40 160 Z"
        fill="hsl(30 30% 88%)"
        stroke={INK}
        strokeWidth="1.1"
      />
      {/* veins — three options */}
      <path d="M70 118 Q 160 96 280 116" stroke="hsl(220 60% 45%)" strokeWidth="2.2" fill="none" />
      <path d="M75 142 Q 160 124 285 144" stroke="hsl(150 45% 35%)" strokeWidth="2.2" fill="none" />
      <path d="M80 166 Q 160 152 280 168" stroke="hsl(280 30% 45%)" strokeWidth="2.2" fill="none" />

      {/* legend dots + labels */}
      <circle cx={36} cy={224} r="5" fill="hsl(220 60% 45%)" />
      <Caption x={46} y={227}>Blue / purple → Cool undertone</Caption>
      <circle cx={36} cy={240} r="5" fill="hsl(150 45% 35%)" />
      <Caption x={46} y={243}>Green → Warm undertone</Caption>
      <circle cx={186} cy={240} r="5" fill="hsl(280 30% 45%)" />
      <Caption x={196} y={243}>Mix of both → Neutral</Caption>
    </g>
  );
}

/* ---- 2. Foundation ---- */
function Foundation() {
  return (
    <g>
      <Caption x={160} y={20} anchor="middle">Start at the center, blend outward</Caption>

      {/* T-zone tinted (where you apply most) */}
      <path
        d="M126 70 L 194 70 L 188 116 L 178 158 Q 160 168 142 158 L 132 116 Z"
        fill={ZONE}
      />
      {/* cheek tinted patches (lighter — leave sheer) */}
      <ellipse cx="118" cy="148" rx="20" ry="14" fill={ZONE} opacity="0.6" />
      <ellipse cx="202" cy="148" rx="20" ry="14" fill={ZONE} opacity="0.6" />

      <FaceBase />

      {/* directional arrows from center → outward */}
      <path d="M160 90  L 200 76"  stroke={INK} strokeWidth="1.3" markerEnd="url(#tut-arrow)" />
      <path d="M160 90  L 120 76"  stroke={INK} strokeWidth="1.3" markerEnd="url(#tut-arrow)" />
      <path d="M150 148 L 110 148" stroke={INK} strokeWidth="1.3" markerEnd="url(#tut-arrow)" />
      <path d="M170 148 L 210 148" stroke={INK} strokeWidth="1.3" markerEnd="url(#tut-arrow)" />
      <path d="M160 178 L 130 200" stroke={INK} strokeWidth="1.3" markerEnd="url(#tut-arrow)" />
      <path d="M160 178 L 190 200" stroke={INK} strokeWidth="1.3" markerEnd="url(#tut-arrow)" />

      {/* numbered start points */}
      <StepBadge x={160} y={90} n={1} />
      <StepBadge x={160} y={148} n={2} />
      <StepBadge x={160} y={178} n={3} />

      {/* mini key */}
      <rect x={16} y={228} width="14" height="10" fill={ZONE} stroke={INK} strokeWidth="0.6" />
      <Caption x={36} y={237}>Apply foundation here, then bounce sponge outward</Caption>
    </g>
  );
}

/* ---- 3. Eyes ---- */
function Eyes() {
  return (
    <g>
      <Caption x={160} y={20} anchor="middle">Three shadows · light → dark, in this order</Caption>

      {/* brow */}
      <path d="M40 70 Q 160 40 280 70" stroke={INK} strokeWidth="2.2" fill="none" />

      {/* eye outline */}
      <path
        d="M40 150 Q 160 80 280 150 Q 160 200 40 150 Z"
        fill="hsl(30 25% 95%)"
        stroke={INK}
        strokeWidth="1.4"
      />

      {/* zone 1 — transition (above crease) */}
      <path d="M50 130 Q 160 78 270 130 Q 160 100 50 130 Z" fill="hsl(35 35% 75% / 0.7)" />

      {/* zone 2 — lid (mid tone, pressed flat) */}
      <path d="M70 150 Q 160 110 250 150 Q 160 170 70 150 Z" fill="hsl(25 30% 55% / 0.7)" />

      {/* zone 3 — outer V */}
      <path d="M210 124 Q 270 150 210 178 Q 230 150 210 124 Z" fill="hsl(20 35% 28% / 0.85)" />

      {/* iris */}
      <circle cx="160" cy="150" r="22" stroke={INK} strokeWidth="1" fill="none" />
      <circle cx="160" cy="150" r="9" fill={INK} />

      {/* numbered badges pointing into zones */}
      <StepBadge x={94} y={108} n={1} />
      <Caption x={106} y={111}>transition (lightest)</Caption>

      <StepBadge x={132} y={188} n={2} />
      <Caption x={144} y={191}>lid (mid-tone, press flat)</Caption>

      <StepBadge x={252} y={172} n={3} />
      <Caption x={246} y={194} anchor="end">outer V (deepest)</Caption>

      {/* windshield-wiper motion arrow on transition */}
      <path d="M90 100 Q 160 86 230 100" stroke={ACCENT} strokeWidth="1.1" fill="none"
        strokeDasharray="3 3" markerEnd="url(#tut-arrow)" markerStart="url(#tut-arrow)" />
      <Caption x={160} y={78} anchor="middle">windshield-wiper motion</Caption>
    </g>
  );
}

/* ---- 4. Brows ---- */
function Brows() {
  return (
    <g>
      <Caption x={160} y={20} anchor="middle">Three alignment points from the nostril</Caption>

      {/* nose reference */}
      <path d="M156 130 L 148 220 Q 160 232 172 220 L 164 130" stroke={INK} strokeWidth="1.1" fill="hsl(30 30% 92%)" />
      {/* nostril (origin point) */}
      <circle cx="160" cy="218" r="3" fill={INK} />
      <Caption x={160} y={250} anchor="middle">nostril (your reference point)</Caption>

      {/* eye outline (faint) */}
      <ellipse cx="220" cy="120" rx="32" ry="10" stroke={FAINT} strokeWidth="1" fill="none" />
      <circle cx="220" cy="120" r="4" fill={FAINT} />

      {/* alignment guides (dashed) from nostril */}
      <path d="M160 218 L 96 78"  stroke={ACCENT} strokeWidth="0.8" strokeDasharray="3 3" />
      <path d="M160 218 L 220 60" stroke={ACCENT} strokeWidth="0.8" strokeDasharray="3 3" />
      <path d="M160 218 L 252 92" stroke={ACCENT} strokeWidth="0.8" strokeDasharray="3 3" />

      {/* brow shape (filled) */}
      <path
        d="M88 84 Q 150 50 218 60 Q 240 65 260 90 Q 240 78 218 72 Q 150 64 92 92 Z"
        fill={ZONE_STRONG}
        stroke={INK}
        strokeWidth="1"
      />

      {/* three points */}
      <StepBadge x={96} y={78} n={1} />
      <Caption x={84} y={68}>start</Caption>

      <StepBadge x={220} y={60} n={2} />
      <Caption x={220} y={48} anchor="middle">arch (over outer iris)</Caption>

      <StepBadge x={252} y={92} n={3} />
      <Caption x={264} y={92}>tail</Caption>
    </g>
  );
}

/* ---- 5. Lips ---- */
function Lips() {
  return (
    <g>
      <Caption x={160} y={20} anchor="middle">Liner just outside, color from center outward</Caption>

      {/* liner — dashed outline just outside the lip */}
      <path
        d="M50 130 Q 100 88 160 110 Q 220 88 270 130 Q 220 178 160 158 Q 100 178 50 130 Z"
        stroke={ACCENT}
        strokeWidth="1.4"
        strokeDasharray="4 3"
        fill="none"
      />

      {/* upper lip */}
      <path
        d="M58 132 Q 100 96 140 116 L 160 130 L 180 116 Q 220 96 262 132 Q 220 148 160 138 Q 100 148 58 132 Z"
        fill="hsl(355 45% 50% / 0.55)"
        stroke={INK}
        strokeWidth="1.1"
      />
      {/* lower lip */}
      <path
        d="M58 132 Q 100 174 160 156 Q 220 174 262 132 Q 220 158 160 168 Q 100 158 58 132 Z"
        fill="hsl(355 45% 45% / 0.65)"
        stroke={INK}
        strokeWidth="1.1"
      />

      {/* center start point + outward arrows */}
      <StepBadge x={160} y={138} n={1} />
      <path d="M160 138 L 100 132" stroke={INK} strokeWidth="1.3" markerEnd="url(#tut-arrow)" />
      <path d="M160 138 L 220 132" stroke={INK} strokeWidth="1.3" markerEnd="url(#tut-arrow)" />

      {/* labels */}
      <Caption x={48} y={108}>liner (matching shade, slightly outside)</Caption>
      <Caption x={160} y={206} anchor="middle">apply lipstick from center → outward, blot, powder, reapply</Caption>
    </g>
  );
}

/* ---- 6. Set ---- */
function Set() {
  return (
    <g>
      <Caption x={160} y={20} anchor="middle">Mist setting spray · X first, then T</Caption>

      {/* faint mist particles */}
      {Array.from({ length: 36 }).map((_, i) => {
        const x = 60 + ((i * 23) % 200);
        const y = 40 + Math.floor((i * 23) / 200) * 22 + (i % 3) * 4;
        return <circle key={i} cx={x} cy={y} r="1.1" fill={ACCENT} opacity="0.35" />;
      })}

      <FaceBase />

      {/* X pattern */}
      <path d="M96 60 L 224 200" stroke={ACCENT} strokeWidth="1.6" strokeDasharray="5 4"
        markerEnd="url(#tut-arrow)" />
      <path d="M224 60 L 96 200" stroke={ACCENT} strokeWidth="1.6" strokeDasharray="5 4"
        markerEnd="url(#tut-arrow)" />
      <StepBadge x={96} y={60} n={1} />
      <StepBadge x={224} y={60} n={1} />

      {/* T pattern */}
      <path d="M96 86 L 224 86" stroke={ACCENT} strokeWidth="2" markerEnd="url(#tut-arrow)" />
      <path d="M160 86 L 160 214" stroke={ACCENT} strokeWidth="2" markerEnd="url(#tut-arrow)" />
      <StepBadge x={96} y={86} n={2} />
      <StepBadge x={224} y={86} n={2} />
      <StepBadge x={160} y={214} n={2} />

      <Caption x={160} y={252} anchor="middle">let it air-dry — don't blot</Caption>
    </g>
  );
}

/* ---------------- Legend (small footer under each diagram) ---------------- */

function Legend({ kind }: { kind: DiagramKind }) {
  const items: Record<DiagramKind, string> = {
    undertone: "Match the vein color you see most to find your undertone.",
    foundation: "Tinted area = where to apply. Arrows = bounce direction.",
    eyes: "Each shaded zone is one shadow. Apply in numbered order.",
    brows: "Use the dashed lines from your nostril to mark all three points before drawing.",
    lips: "Dashed line = liner placement (just outside). Filled area = lipstick.",
    set: "Spray X first (1), then T (2). Hold the bottle ~25 cm away.",
  };
  return (
    <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground border-t border-border pt-3">
      {items[kind]}
    </p>
  );
}
