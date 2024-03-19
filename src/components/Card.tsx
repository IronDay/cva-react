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
