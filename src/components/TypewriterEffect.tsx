import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypewriterEffect = ({ text, speed = 50, className = "" }: TypewriterProps) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className={`inline-block w-0.5 h-[1em] bg-primary ml-1 align-middle ${done ? "animate-pulse" : ""}`} />
    </span>
  );
};

export default TypewriterEffect;
