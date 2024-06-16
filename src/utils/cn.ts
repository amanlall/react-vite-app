import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const brandColours = {
  red: "#FF0000",
  blue: "#5a6ff0",
  green: "#00FF00",
  brown: "#98371b",
  skin:"#f9b17a",
  reveal:"#cc4d9d",
  black:"#06070d",
  leftblue:"#5d60c1"
}

export const SkillData = [
  {
    name: "Html 5",
    Image: "html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "js.png",
    width: 65,
    height: 65,
  },
  // {
  //   name: "Tailwind Css",
  //   Image: "tailwind.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    name: "React",
    Image: "react.png",
    width: 80,
    height: 80,
  },
  // {
  //   name: "Redux",
  //   Image: "/redux.png",
  //   width: 80,
  //   height: 80,
  // },

  {
    name: "TypeScript",
    Image: "ts.png",
    width: 80,
    height: 80,
  },
  // {
  //   name: "Next js 13",
  //   Image: "next.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: "Framer Motion",
  //   Image: "framer.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: "Stripe Payment",
  //   Image: "stripe.webp",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: "Node js",
  //   Image: "node-js.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    name: "Mongo db",
    Image: "mongodb.png",
    width: 40,
    height: 40,
  },];