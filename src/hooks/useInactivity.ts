import { useEffect, useRef, useCallback } from 'react';

interface UseInactivityOptions {
  timeoutMs: number;
  countdownMs: number;
  onCountdown: (remaining: number) => void;
  onReset: () => void;
  enabled: boolean;
}

/**
 * Fires `onCountdown` every second for `countdownMs` after `timeoutMs` of
 * inactivity, then calls `onReset` when the countdown reaches zero.
 * Any user interaction resets the inactivity timer and cancels the countdown.
 */
export function useInactivity({
  timeoutMs,
  countdownMs,
  onCountdown,
  onReset,
  enabled,
}: UseInactivityOptions): { cancel: () => void } {
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const remainingRef = useRef<number>(Math.ceil(countdownMs / 1000));
  const isCountingDown = useRef(false);

  const stopCountdown = useCallback(() => {
    if (countdownTimer.current) {
      clearInterval(countdownTimer.current);
      countdownTimer.current = null;
    }
    isCountingDown.current = false;
    remainingRef.current = Math.ceil(countdownMs / 1000);
  }, [countdownMs]);

  const startCountdown = useCallback(() => {
    if (isCountingDown.current) return;
    isCountingDown.current = true;
    remainingRef.current = Math.ceil(countdownMs / 1000);
    onCountdown(remainingRef.current);

    countdownTimer.current = setInterval(() => {
      remainingRef.current -= 1;
      if (remainingRef.current <= 0) {
        stopCountdown();
        onReset();
      } else {
        onCountdown(remainingRef.current);
      }
    }, 1000);
  }, [countdownMs, onCountdown, onReset, stopCountdown]);

  const resetInactivity = useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    if (isCountingDown.current) {
      stopCountdown();
      onCountdown(-1); // signal: cancel overlay
    }
    if (!enabled) return;
    inactivityTimer.current = setTimeout(startCountdown, timeoutMs);
  }, [enabled, timeoutMs, startCountdown, stopCountdown, onCountdown]);

  useEffect(() => {
    if (!enabled) {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      stopCountdown();
      return;
    }

    const events = ['mousedown', 'mousemove', 'keydown', 'touchstart', 'scroll', 'click'];
    events.forEach((e) => window.addEventListener(e, resetInactivity, { passive: true }));
    resetInactivity();

    return () => {
      events.forEach((e) => window.removeEventListener(e, resetInactivity));
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      stopCountdown();
    };
  }, [enabled, resetInactivity, stopCountdown]);

  const cancel = useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    stopCountdown();
  }, [stopCountdown]);

  return { cancel };
}
