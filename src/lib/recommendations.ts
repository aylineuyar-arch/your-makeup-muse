export type SkinTone = "fair" | "light" | "medium" | "tan" | "deep" | "rich";
export type Undertone = "cool" | "neutral" | "warm";
export type FaceShape = "oval" | "round" | "square" | "heart";
export type EyeShape = "almond" | "hooded" | "round" | "monolid";
export type SkillLevel = "beginner" | "intermediate" | "expert";

export interface Profile {
  tone: SkinTone;
  undertone: Undertone;
  face: FaceShape;
  eye: EyeShape;
  skill: SkillLevel;
}

export const SKIN_SWATCHES: { id: SkinTone; hex: string; label: string }[] = [
  { id: "fair", hex: "#f9ebde", label: "Fair" },
  { id: "light", hex: "#f3d3b6", label: "Light" },
  { id: "medium", hex: "#e6b38a", label: "Medium" },
  { id: "tan", hex: "#c6865d", label: "Tan" },
  { id: "deep", hex: "#9c623b", label: "Deep" },
  { id: "rich", hex: "#5a3621", label: "Rich" },
];

const FOUNDATION_SHADES: Record<SkinTone, Record<Undertone, string>> = {
  fair:   { cool: "Porcelain 01C", neutral: "Ivory 01N", warm: "Linen 01W" },
  light:  { cool: "Shell 02C",     neutral: "Bisque 02N", warm: "Honey 02W" },
  medium: { cool: "Buff 03C",      neutral: "Ochre 03N",  warm: "Amber 03W" },
  tan:    { cool: "Sand 04C",      neutral: "Caramel 04N", warm: "Sienna 04W" },
  deep:   { cool: "Walnut 05C",    neutral: "Mocha 05N",  warm: "Bronze 05W" },
  rich:   { cool: "Onyx 06C",      neutral: "Espresso 06N", warm: "Mahogany 06W" },
};

const BLUSH: Record<Undertone, { name: string; shade: string }> = {
  cool: { name: "Silk Cheek Tint", shade: "Mauve Mist" },
  neutral: { name: "Silk Cheek Tint", shade: "Petal" },
  warm: { name: "Silk Cheek Tint", shade: "Apricot Glow" },
};

const LIPSTICK: Record<Undertone, { name: string; shade: string }> = {
  cool: { name: "Suede Pigment Stick", shade: "Berry Noir" },
  neutral: { name: "Suede Pigment Stick", shade: "Rosewood" },
  warm: { name: "Suede Pigment Stick", shade: "Desert Rose" },
};

const EYE_PRODUCT: Record<EyeShape, { name: string; shade: string; note: string }> = {
  almond:  { name: "Linear Eye Quad", shade: "Mineral", note: "Tonal taupes elongate the natural shape." },
  hooded:  { name: "Lifted Lid Quad", shade: "Smoke",   note: "Matte mid-tones above the crease open the lid." },
  round:   { name: "Soft Focus Quad", shade: "Cocoa",   note: "Outer-corner depth slims the eye." },
  monolid: { name: "Gradient Lid Quad", shade: "Bronze", note: "Build color along the lash line for a graphic wash." },
};

const FACE_TIP: Record<FaceShape, string> = {
  oval:   "Light contour beneath cheekbones; balance is your asset—keep it soft.",
  round:  "Contour along the temples and jawline to add structure and length.",
  square: "Soften the jaw with rounded blush placement on the apples of cheeks.",
  heart:  "Contour the chin lightly; bring blush slightly outward to widen the lower face.",
};

const EYE_TECHNIQUE: Record<EyeShape, string> = {
  almond:  "Extend shadow slightly past the outer corner to elongate the gaze.",
  hooded:  "Apply shadow above the natural crease—visible with eyes open.",
  round:   "Concentrate depth on the outer V; smudge liner outward, not down.",
  monolid: "Build a gradient along the lash line, deepest at the lashes.",
};

// ---------- Shape Identification Guides ----------

export const FACE_SHAPE_GUIDE: Record<FaceShape, { signs: string[]; test: string }> = {
  oval: {
    signs: [
      "Face is longer than it is wide (about 1.5×)",
      "Forehead is slightly wider than the jaw",
      "Jawline is gently rounded, not angular",
    ],
    test: "Pull your hair back and trace your face in a steamed mirror — an oval traces an egg-like outline narrowing at the chin.",
  },
  round: {
    signs: [
      "Face length and width are roughly equal",
      "Cheeks are the widest point",
      "Soft, curved jawline with no sharp angles",
    ],
    test: "Measure cheek-to-cheek and forehead-to-chin — within ~1 cm means round.",
  },
  square: {
    signs: [
      "Forehead, cheekbones, and jaw are similar widths",
      "Jawline is angular and well-defined",
      "Face length and width are close to equal",
    ],
    test: "If you can draw a near-rectangle around your face with strong corners at the jaw, it's square.",
  },
  heart: {
    signs: [
      "Forehead is the widest part of the face",
      "Cheekbones are high and prominent",
      "Chin tapers to a narrow point",
    ],
    test: "Trace from temple down to chin — if the lines visibly converge, you have a heart shape.",
  },
};

export const EYE_SHAPE_GUIDE: Record<EyeShape, { signs: string[]; test: string }> = {
  almond: {
    signs: [
      "Visible crease with the outer corner lifted upward",
      "Eye tapers to a point at both inner and outer corners",
      "You can see white above and below the iris",
    ],
    test: "Look straight in a mirror — if your eye looks like an almond on its side, that's it.",
  },
  hooded: {
    signs: [
      "Excess skin or brow bone covers part of the lid when eyes are open",
      "The crease is hidden or only partly visible",
      "Lid space looks small even with eyes wide",
    ],
    test: "Open your eyes and look forward — if you can't see your own crease, your eyes are hooded.",
  },
  round: {
    signs: [
      "Iris shows white on top, bottom, or both",
      "Eyes look large and open",
      "Crease is clearly visible and curved",
    ],
    test: "If the iris doesn't touch the upper or lower lid when you relax your face, the eye is round.",
  },
  monolid: {
    signs: [
      "Little to no visible crease on the upper lid",
      "Lid surface is smooth and flat",
      "Eye line stays close to the lash line",
    ],
    test: "Close your eye gently — if the lid appears smooth without a defined crease line, it's a monolid.",
  },
};

// ---------- Brushes / Tools ----------

export interface BrushItem {
  name: string;
  use: string;
  technique: string;
}

export const BRUSH_KIT: BrushItem[] = [
  { name: "Damp Beauty Sponge", use: "Foundation, concealer", technique: "Bounce — never drag — for a skin-first finish." },
  { name: "Buffing Brush (dense, round)", use: "Powder foundation, setting powder", technique: "Small circular motions across the T-zone." },
  { name: "Angled Contour Brush", use: "Cream or powder contour", technique: "Sweep below the cheekbone toward the ear." },
  { name: "Fluffy Blush Brush", use: "Powder blush", technique: "Tap off excess; smile, apply to apples, blend up." },
  { name: "Tapered Highlight Fan", use: "Highlighter", technique: "Glide across cheekbones, brow bone, cupid's bow." },
  { name: "Flat Shader Brush", use: "Eyeshadow base color", technique: "Press pigment onto the lid; don't sweep." },
  { name: "Fluffy Crease Brush", use: "Crease + transition shades", technique: "Windshield-wiper motion in the crease." },
  { name: "Pencil Brush", use: "Outer V, lower lash line", technique: "Tight controlled strokes for definition." },
  { name: "Spoolie + Angled Brow Brush", use: "Brows", technique: "Hair-like flicks, then brush through with the spoolie." },
  { name: "Lip Brush", use: "Lipstick precision", technique: "Outline first, then fill from the center outward." },
];

// ---------- Skill-tiered routine ----------

interface Step {
  title: string;
  body: string;
  brush?: string;
  pro?: string; // shown for intermediate+
  expert?: string; // shown for expert only
}

export function recommend(p: Profile) {
  const foundation = {
    name: "Velvet Veil Foundation",
    shade: FOUNDATION_SHADES[p.tone][p.undertone],
    why: `A ${p.undertone} match for your ${p.tone} skin, finished in a soft-focus second-skin veil.`,
  };
  const blush = { ...BLUSH[p.undertone], why: `Tuned to your ${p.undertone} undertone for a lit-from-within flush.` };
  const lip = { ...LIPSTICK[p.undertone], why: `A wearable anchor that complements your ${p.undertone} undertone.` };
  const eye = { ...EYE_PRODUCT[p.eye], why: EYE_PRODUCT[p.eye].note };

  const baseSteps: Step[] = [
    {
      title: "Prep the Skin",
      body: "Cleanse, then apply moisturizer. Wait 60 seconds before makeup.",
      brush: "Hands",
      pro: "Press a hydrating primer into the cheeks; use a mattifying primer only on the T-zone.",
      expert: "Layer a luminous primer under the high points (tops of cheekbones, brow bone, cupid's bow) before foundation for a built-in glow map.",
    },
    {
      title: "Even the Base",
      body: `Apply ${foundation.name} in ${foundation.shade} from the center of the face outward.`,
      brush: "Damp Beauty Sponge",
      pro: "Build coverage in thin layers — two sheer passes look more like skin than one heavy pass.",
      expert: "Mix one drop of a luminous primer into your foundation for a custom dewy finish; spot-conceal afterward instead of layering all over.",
    },
    {
      title: "Conceal & Brighten",
      body: "Dot concealer in a triangle under the eye (point toward the cheek) and on any blemishes.",
      brush: "Damp Beauty Sponge or finger",
      pro: "Use a shade one step lighter than foundation only under the eye — match foundation exactly on blemishes.",
      expert: "Color-correct first: peach for blue under-eyes, green for redness. A tiny amount, set with a finishing powder and a damp sponge press.",
    },
    {
      title: "Sculpt the Face",
      body: FACE_TIP[p.face],
      brush: "Angled Contour Brush",
      pro: "Cream contour before powder for a natural shadow; powder alone can look chalky.",
      expert: `For your ${p.face} face: place contour exactly along the hollow you feel when you suck in your cheeks, then diffuse upward — never downward.`,
    },
    {
      title: "Define the Eyes",
      body: `${EYE_TECHNIQUE[p.eye]} Use ${eye.name} in ${eye.shade}.`,
      brush: "Flat Shader + Fluffy Crease Brush",
      pro: "Always start with a transition shade in the crease before laying down the lid color — it makes blending effortless.",
      expert: `For ${p.eye} eyes: cut the crease with concealer for a sharper lid, then use a pencil brush to deposit a deeper shade only at the outer third for dimension.`,
    },
    {
      title: "Frame the Brows",
      body: "Brush brows up and out. Fill sparse spots with hair-like strokes, then set with clear gel.",
      brush: "Spoolie + Angled Brow Brush",
      pro: "Use a shade one tone lighter than your hair for a softer, more modern look.",
      expert: "Map your brow with three points — start, arch (above the outer iris), and tail (where a line from nostril to outer eye lands).",
    },
    {
      title: "Color the Cheek",
      body: `Smile, then tap ${blush.name} in ${blush.shade} onto the apples and blend up toward the temple.`,
      brush: "Fluffy Blush Brush",
      pro: "Cream blush before powder for that lit-from-within effect; powder over the cream sets it.",
      expert: "Draw a faint blush 'C' from the temple to under the cheekbone for a contour + flush in one move.",
    },
    {
      title: "Add Light",
      body: "Sweep highlighter on the tops of cheekbones, brow bone, bridge of the nose, and cupid's bow.",
      brush: "Tapered Highlight Fan",
      pro: "Skip the nose if you have visible pores there — light makes texture more visible.",
      expert: "Mix a drop of liquid highlighter into your foundation on the high points only for a built-in luminous strobe.",
    },
    {
      title: "Anchor the Lip",
      body: `Press ${lip.name} in ${lip.shade} into the center of the lips and diffuse outward with a fingertip.`,
      brush: "Lip Brush or finger",
      pro: "Line slightly outside the natural lip line for a subtle plump — same shade as the lipstick, never darker.",
      expert: "Apply lipstick, blot with a tissue, dust translucent powder over the tissue while it's on your lips, then reapply — gives you 8-hour wear.",
    },
    {
      title: "Set & Lock",
      body: "Mist a setting spray in an X then a T pattern. Let it dry naturally.",
      brush: "Setting spray",
      pro: "Press a velvet puff with finishing powder only on areas that crease (under-eye, smile lines).",
      expert: "Bake the under-eye and forehead with loose powder for 5 minutes while you do brows and lips, then dust off — for full glam longevity.",
    },
  ];

  // Filter step content by skill
  const routine = baseSteps.map((s) => {
    if (p.skill === "beginner") {
      return { title: s.title, body: s.body, brush: s.brush, extras: [] as { label: string; text: string }[] };
    }
    const extras: { label: string; text: string }[] = [];
    if (s.pro) extras.push({ label: "Pro tip", text: s.pro });
    if (p.skill === "expert" && s.expert) extras.push({ label: "Expert move", text: s.expert });
    return { title: s.title, body: s.body, brush: s.brush, extras };
  });

  // For beginners, condense to the essential 6 steps
  const finalRoutine = p.skill === "beginner"
    ? routine.filter((_, i) => [0, 1, 2, 4, 6, 8].includes(i))
    : routine;

  return { foundation, blush, lip, eye, routine: finalRoutine };
}
