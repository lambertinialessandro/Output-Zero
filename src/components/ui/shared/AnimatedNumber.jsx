import { format } from 'app/utils/format';
import { useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedNumber(props) {
  const { value } = props;
  const ref = useRef(null);

  const lastFormattedValue = useRef(format(value));

  const spring = useSpring(value, { mass: 1, stiffness: 300, damping: 32 });

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (ref.current) {
        const currentFormatted = format(latest);

        if (currentFormatted !== lastFormattedValue.current) {
          ref.current.textContent = currentFormatted;
          lastFormattedValue.current = currentFormatted;
        }
      }
    });
    return () => unsubscribe();
  }, [spring]);

  return <span ref={ref}>{format(value)}</span>;
}

export default AnimatedNumber;
