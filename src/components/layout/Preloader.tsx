import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, FastForward, Sparkles, Terminal } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [, setHasStartedPlaying] = useState(false);
  const [statusMessage, setStatusMessage] = useState('INITIALIZING QUANTUM CORE...');
  const [isFinishing, setIsFinishing] = useState(false);
  useEffect(() => {
    if (progress < 25) {
      setStatusMessage('INITIALIZING QUANTUM CORE...');
    } else if (progress < 50) {
      setStatusMessage('LOADING 3D TECH ECOSYSTEM...');
    } else if (progress < 75) {
      setStatusMessage('CALIBRATING MOTION ENGINES...');
    } else if (progress < 95) {
      setStatusMessage('SYNCHRONIZING REPOSITORIES...');
    } else {
      setStatusMessage('PORTFOLIO IS READY // WELCOME TO MY LIFE');
    }
  }, [progress]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (duration > 0) {
      const calculatedProgress = Math.min(Math.round((currentTime / duration) * 100), 100);
      setProgress((prev) => Math.max(prev, calculatedProgress));
    }
  };

  const finishLoading = () => {
    if (isFinishing) return;
    setIsFinishing(true);
    setProgress(100);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  const handleVideoEnded = () => {
    finishLoading();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setHasStartedPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked: fallback incremental timer
          setHasStartedPlaying(true);
        });
    }
    const fallbackTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fallbackTimer);
          finishLoading();
          return 100;
        }
        return Math.min(prev + 4, 100);
      });
    }, 150);

    return () => clearInterval(fallbackTimer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          y: '-100%',
          opacity: 0,
          transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
        }}
        className="fixed inset-0 z-[1000] flex flex-col items-center justify-between bg-[#080808] text-white p-4 sm:p-8 select-none overflow-hidden"
      >
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-accent-violet/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

        {/* Top Header Bar */}
        <div className="w-full max-w-4xl flex items-center justify-between z-10 pt-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#141418] border border-cyan-400/30 overflow-hidden p-0.5">
              <img
                src="/images/logo-jnb.jpg"
                alt="JNB Logo"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <div className="text-xs font-mono font-bold tracking-wider text-white">
                JHON NOEL BACULPO
              </div>
              <div className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>BOOT_SEQUENCE // v2.4</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              type="button"
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.muted = !isMuted;
                  setIsMuted(!isMuted);
                }
              }}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-zinc-300 hover:text-white transition-colors text-xs font-mono flex items-center gap-1.5"
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="hidden sm:inline text-[11px]">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline text-[11px] text-cyan-300">Sound ON</span>
                </>
              )}
            </button>

            {/* Skip Intro Button */}
            <button
              type="button"
              onClick={finishLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-violet/40 transition-all duration-200"
            >
              <span>Skip Intro</span>
              <FastForward className="w-3 h-3 text-accent-violet" />
            </button>
          </div>
        </div>

        {/* Center: Futuristic Video Container */}
        <div className="relative my-auto w-full max-w-xl sm:max-w-2xl flex flex-col items-center z-10 px-2">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/90 border border-cyan-400/40 shadow-[0_0_50px_rgba(6,182,212,0.2)] group"
          >
            {/* Cyberpunk HUD Corner Brackets */}
            <div className="absolute top-2 left-2 z-20 pointer-events-none">
              <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-400/90 bg-black/60 px-1.5 py-0.5 rounded border border-cyan-400/30">
                [SYSTEM_STREAM]
              </span>
            </div>
            <div className="absolute top-2 right-2 z-20 pointer-events-none">
              <span className="text-[9px] font-mono tracking-widest text-accent-violet/90 bg-black/60 px-1.5 py-0.5 rounded border border-accent-violet/30 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-accent-violet" />
                <span>AI_GENERATIVE</span>
              </span>
            </div>
            <div className="absolute bottom-2 left-2 z-20 pointer-events-none">
              <span className="text-[9px] font-mono text-zinc-400 bg-black/60 px-1.5 py-0.5 rounded border border-white/10">
                PORTFOLIO_INTRO // 1080P
              </span>
            </div>
            <div className="absolute bottom-2 right-2 z-20 pointer-events-none">
              <span className="text-[9px] font-mono text-cyan-400 font-semibold bg-black/60 px-1.5 py-0.5 rounded border border-cyan-400/30 tabular-nums">
                {progress}%
              </span>
            </div>

            {/* Video Element */}
            <video
              ref={videoRef}
              src="/videos/gemini_generated_video_83869ac7.mp4"
              autoPlay
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover"
            />

            {/* Subtle scanline overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.02] to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom HUD Progress Section */}
        <div className="w-full max-w-2xl flex flex-col items-center z-10 pb-4">
          <div className="w-full flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-zinc-300 font-semibold tracking-wider">
                {statusMessage}
              </span>
            </div>
            <span className="text-cyan-400 font-bold tabular-nums">{progress}%</span>
          </div>

          {/* Glowing Dual-Tone Progress Track */}
          <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-white/5 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-accent-violet to-accent-blue shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            />
          </div>

          <p className="text-[11px] font-mono text-zinc-400 mt-3 text-center">
            Tap or click <span className="text-zinc-300 font-semibold">Skip Intro</span> anytime to jump directly to the portfolio.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
