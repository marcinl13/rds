import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export function mergeClassNames(...inputs: classNames.ArgumentArray) {
  return twMerge(classNames(inputs))
}