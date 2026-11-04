import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  const count = 120;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 99999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#8B5CF6', '#38BDF8', '#FFFFFF'],
  });
  fire(0.2, {
    spread: 60,
    colors: ['#7C3AED', '#60A5FA', '#C084FC'],
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#A78BFA', '#38BDF8', '#FFFFFF'],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ['#8B5CF6', '#38BDF8'],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ['#FFFFFF', '#A855F7'],
  });
};

