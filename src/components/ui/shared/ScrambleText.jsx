import { useEffect, useState } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+0123456789';

function ScrambleText({ text }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      setDisplayText((current) =>
        text
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';

            if (index < iteration) {
              return text[index];
            }

            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      // Increase iteration. Smaller numbers = longer scramble time per letter.
      iteration += 1 / 2;
    }, 5);

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
}

export default ScrambleText;
