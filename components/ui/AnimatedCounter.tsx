"use client";
import { useEffect } from 'react';
import { useScrollAnimation, useCounterAnimation } from '@/hooks/useAnimations';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation();
  const { count, startCounting } = useCounterAnimation(target, duration);

  useEffect(() => {
    if (isVisible) {
      startCounting();
    }
  }, [isVisible, startCounting]);

  return (
    <div ref={ref} className={className}>
      {prefix}{count}{suffix}
    </div>
  );
};

export default AnimatedCounter;
