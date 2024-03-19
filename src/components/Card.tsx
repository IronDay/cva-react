import { HtmlHTMLAttributes } from "react";

type CardProps =
  | (HTMLAttributes<HTMLDivElement> & {
      type: "category";
      img: string;
      title: string;
      className?: string;
    })
  | {
      type: "product";
      img: string;
      title: string;
      price: number;
      description: string;
      star: number;
      liked?: boolean;
      className?: string;
    }
  | {
      type: "saveUp";
      img: string;
      title: string;
      amount: number;
      description: string;
    }
  | {
      type: "brand";
      img: string;
      brand: string;
      field: string[];
      logo: string;
      deliveryTime: number;
      className?: string;
    };

const cart = cva("", {
  variants: {
    intent: {
      category:
        "max-w-[184px] max-h-[217px] h-[217px] w-[184px] border rounded-lg relative text-white",
      brand: "max-w-[285px] max-h-[332px] w-[285px] h-[332px] flex flex-col",
      product:
        "max-w-[283.5px] max-h-[370px] w-[283.5px] h-[370px] border border-indigo-500 flex flex-col p-3 gap-2",
      saveUp: "",
    },
  },
});
