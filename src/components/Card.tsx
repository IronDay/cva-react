import { HTMLAttributes } from "react";
import cn from "../utils/cn";
import { cva } from "class-variance-authority";

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

const Card = ({
  intent,
  ...props
}: CardProps & {
  intent?: "brand" | "product" | "saveUp" | "category";
}) => {
  switch (props.type) {
    case "category": {
      const { img, title, className } = props;
      return (
        <div className={cn(cart({ intent }), className)}>
          <img
            className="w-full h-full object-cover rounded-lg backdrop-blur-lg "
            src={img}
            alt="category image"
          />
          <h3 className="w-full absolute top-0 mx-auto text-center">{title}</h3>
        </div>
      );
    }
  }
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

export default Card;
