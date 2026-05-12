export type SkinTone = "fair" | "light" | "medium" | "tan" | "deep" | "rich";
export type Undertone = "cool" | "neutral" | "warm";
export type FaceShape = "oval" | "round" | "square" | "heart";
export type EyeShape = "almond" | "hooded" | "round" | "monolid";

export interface Profile {
  tone: SkinTone;
  undertone: Undertone;
  face: FaceShape;
  eye: EyeShape;
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

export function recommend(p: Profile) {
  const foundation = {
    name: "Velvet Veil Foundation",
    shade: FOUNDATION_SHADES[p.tone][p.undertone],
    why: `A ${p.undertone} match for your ${p.tone} skin, finished in a soft-focus second-skin veil.`,
  };
  const blush = { ...BLUSH[p.undertone], why: `Tuned to your ${p.undertone} undertone for a lit-from-within flush.` };
  const lip = { ...LIPSTICK[p.undertone], why: `A wearable anchor that complements your ${p.undertone} undertone.` };
  const eye = { ...EYE_PRODUCT[p.eye], why: EYE_PRODUCT[p.eye].note };

  const routine = [
    {
      title: "Prime & Even",
      body: "Press a hydrating primer into the high points. Let it set for 60 seconds before foundation.",
    },
    {
      title: "Build the Base",
      body: `Apply ${foundation.name} in ${foundation.shade} from the center outward with a damp sponge for a skin-first finish.`,
    },
    {
      title: "Sculpt the Face",
      body: FACE_TIP[p.face],
    },
    {
      title: "Define the Eyes",
      body: `${EYE_TECHNIQUE[p.eye]} Use ${eye.name} in ${eye.shade}.`,
    },
    {
      title: "Color the Cheek",
      body: `Smile and tap ${blush.name} in ${blush.shade} onto the apples, blending up toward the temple.`,
    },
    {
      title: "Anchor the Lip",
      body: `Press ${lip.name} in ${lip.shade} into the center of the lips and diffuse outward with a fingertip.`,
    },
  ];

  return { foundation, blush, lip, eye, routine };
}
