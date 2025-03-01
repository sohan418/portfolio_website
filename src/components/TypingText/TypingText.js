import { useState, useEffect } from 'react';

const TypingText = ({ texts, speed = 100, eraseSpeed = 50, pause = 1000, loopPause = 1500 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const nextIndex = isDeleting ? displayedText.length - 1 : displayedText.length + 1;

    const timer = setTimeout(() => {
      setDisplayedText(currentText.slice(0, nextIndex));

      if (!isDeleting && nextIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && nextIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
        setTimeout(() => setDisplayedText(''), loopPause);
      }
    }, isDeleting ? eraseSpeed : speed);

    return () => clearTimeout(timer);
  }, [texts, textIndex, displayedText, isDeleting, speed, eraseSpeed, pause, loopPause]);

  return (
    <div className="text-xl font-mono">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};
export default TypingText;
 