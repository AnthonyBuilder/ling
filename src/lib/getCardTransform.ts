import type { RefObject } from "react";

export type MousePosition = {
  x: number;
  y: number;
};

export const getCardTransform = (
  cardRef: RefObject<HTMLElement>,
  globalMousePos: MousePosition,
  intensity: number = 1
) => {
  if (!cardRef.current || typeof window === "undefined") {
    return { rotX: 0, rotY: 0, shadowX: 0, shadowY: 0 };
  }

  const rect = cardRef.current.getBoundingClientRect();
  const cardCenterX = rect.left + rect.width / 2;
  const cardCenterY = rect.top + rect.height / 2;

  const deltaX = globalMousePos.x - cardCenterX;
  const deltaY = globalMousePos.y - cardCenterY;

  const rotX = (deltaY / window.innerHeight) * 8 * intensity;
  const rotY = (deltaX / window.innerWidth) * 8 * intensity;
  const shadowX = (deltaX / window.innerWidth) * 12 * intensity;
  const shadowY = (deltaY / window.innerHeight) * 12 * intensity;

  return { rotX, rotY, shadowX, shadowY };
};
