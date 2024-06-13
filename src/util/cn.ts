<<<<<<< HEAD
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
=======
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
>>>>>>> c04cceef0703c7e6d90906ca23ef4d53603045f7

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
