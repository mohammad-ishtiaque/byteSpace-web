export const GLOW = {
  lime: "rgb(212 251 32 / 0.35)",
  blue: "rgb(0 59 226 / 0.14)",
  limeStrong: "rgb(212 251 32 / 0.55)",
  blueStrong: "rgb(0 59 226 / 0.22)",
};

export default function GlowBackground({ glows }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="relative mx-auto h-full max-w-[1440px]">
        {glows.map((glow) => (
          <div
            key={`${glow.left}-${glow.top}`}
            className="absolute aspect-square"
            style={{
              left: glow.left,
              top: glow.top,
              width: glow.width,
              background: `radial-gradient(closest-side, ${glow.color}, transparent)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
