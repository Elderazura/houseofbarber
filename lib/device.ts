// lib/device.ts
export type DevicePlatform = "ios" | "android" | "desktop";

export function detectPlatform(): DevicePlatform {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/Android/.test(ua)) return "android";
  return "desktop";
}

export const APP_STORE_URL =
  "https://apps.apple.com/in/app/house-of-barber/id1571444397";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.saloon.hob";
