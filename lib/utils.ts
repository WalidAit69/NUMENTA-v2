import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { checkSubscription } from "./subscription";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export const getIsPremium = async () => {
  const isPremium = await checkSubscription();
  return isPremium;
};