// AnimatedBackground
// Decorative background with soft glowing blobs and a subtle grid

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Cyan glow - top left */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #06B6D4, transparent)',
          top: '10%',
          left: '10%',
          filter: 'blur(60px)',
        }}
      />

      {/* Purple glow - bottom right */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #8B5CF6, transparent)',
          bottom: '10%',
          right: '10%',
          filter: 'blur(60px)',
        }}
      />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
