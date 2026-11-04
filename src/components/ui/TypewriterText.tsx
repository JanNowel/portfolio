import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 1800,
  className = '',
  cursorClassName = 'text-accent-violet',
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const targetWord = words[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < targetWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Word completed, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Word cleared, move to next
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <span
        className={`inline-block w-[2px] h-[1.1em] ml-1 bg-current animate-pulse ${cursorClassName}`}
        aria-hidden="true"
      />
    </span>
  );
};
