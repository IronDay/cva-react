import { cva } from "class-variance-authority";
import { HTMLAttributes, useState } from "react";
import cn from "../utils/cn";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  intent?: "primary" | "secondary";
  size?: "sm" | "lg";
  className?: string;
  handleClick: (count: number) => void;
};

const Button = ({
  intent,
  size,
  className,
  handleClick,
  ...props
}: ButtonProps) => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount((count) => (count += 1));
        handleClick(count);
      }}
      className={cn(button({ intent, size }), className)}
      {...props}
    />
  );
};

const button = cva("px-4 py-2 rounded text-white", {
  variants: {
    intent: {
      primary: "bg-indigo-500 px-[40px] rounded-md",
      secondary: "bg-slate-500",
    },
    size: {
      sm: "text-[12px] font-bold",
      lg: "text-2xl font-light",
    },
  },

  defaultVariants: {
    intent: "primary",
    size: "sm",
  },
});

export default Button;

/* import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};
const Button = ({ variant, ...props }: ButtonProps) => {
  return <button {...props} className={buttonsVariants({ variant })} />;
};

const buttonsVariants = cva(
  "px-[40px] py-2 rounded-md font-[roboto] text-[12px] hover:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-purple-500 to-purple-700 text-white",
        secondary: "bg-stone-700 text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
export default Button;
 */
