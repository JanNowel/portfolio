import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, FastForward } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [, setHasStartedPlaying] = useState(false);
  const [statusMessage, setStatusMessage] = useState('INITIALIZING ENVIRONMENT...');
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    if (progress < 30) {
      setStatusMessage('INITIALIZING RUNTIME & ASSETS...');
    } else if (progress < 65) {
      setStatusMessage('PREPARING COMPONENT HIERARCHY...');
    } else if (progress < 95) {
      setStatusMessage('SYNCHRONIZING REPOSITORIES...');
    } else {
      setStatusMessage('WELCOME // PORTFOLIO READY');
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
    }, 500);
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
        return Math.min(prev + 5, 100);
      });
    }, 140);

    return () => clearInterval(fallbackTimer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.6, ease: 'easeInOut' },
        }}
        className="fixed inset-0 z-[1000] flex flex-col items-center justify-between bg-[#09090b] text-white p-4 sm:p-8 select-none overflow-hidden"
      >
        {/* Top Header Bar */}
        <div className="w-full max-w-3xl flex items-center justify-between z-10 pt-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden p-0.5">
              <img
                src={PERSONAL_INFO.logoImage}
                alt="JNB Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="text-xs font-mono font-semibold tracking-wider text-zinc-100">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                PORTFOLIO SEQUENCE
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
              className="px-2.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors text-xs font-mono flex items-center gap-1.5"
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="hidden sm:inline text-[11px]">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-zinc-200" />
                  <span className="hidden sm:inline text-[11px] text-zinc-200">Audio On</span>
                </>
              )}
            </button>

            {/* Skip Button */}
            <button
              type="button"
              onClick={finishLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <span>Skip</span>
              <FastForward className="w-3 h-3 text-zinc-400" />
            </button>
          </div>
        </div>

        {/* Center: Minimalist Video Frame */}
        <div className="relative my-auto w-full max-w-xl flex flex-col items-center z-10 px-2">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl"
          >
            <video
              ref={videoRef}
              src="/videos/gemini_generated_video_83869ac7.mp4"
              playsInline
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnded}
              className="w-full aspect-video object-contain bg-zinc-950"
            />
          </motion.div>
        </div>

        {/* Bottom Loading Progress Strip */}
        <div className="w-full max-w-3xl z-10 pb-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
            <span>{statusMessage}</span>
            <span className="text-zinc-200">{progress}%</span>
          </div>

          {/* Minimal Monochrome Progress Bar */}
          <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
            <motion.div
              className="h-full bg-zinc-200 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
