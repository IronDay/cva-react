import { HTMLAttributes } from "react";
import cn from "../utils/cn";
import { cva } from "class-variance-authority";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";

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

    case "brand": {
      const { img, brand, field, logo, deliveryTime, className } = props;
      return (
        <div className={cn(cart({ intent }), className)}>
          <div className="w-full max-h-[187px]">
            <img
              className="w-full h-[187px] block object-cover overflow-hidden"
              src={img}
              alt="brand image"
            />
          </div>
          <div className="relative flex-1 flex flex-col justify-between bg-[#E5E5E5] rounded-b-lg">
            <img
              className="w-[62px] h-[62px] border rounded-full
               block absolute  bg-[#003D29] text-white top-[-31px] left-3 opacity-80"
              src={logo}
              alt="brand logo"
            />
            <div className="flex-1 flex flex-col items-start justify-end space-y-3 space-x-3 py-2">
              <h3 className="ml-3 font-medium text-[20px] text-[#003D29]">
                {brand}
              </h3>
              <ul className="flex items-center justify-between gap-[5px]">
                {field.map((elt, index) => {
                  if (index !== field.length - 1)
                    return (
                      <>
                        <li>{elt.toLowerCase()}</li>
                        <li>
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_126_2375)">
                              <path
                                d="M8 12.6239C10.2091 12.6239 12 10.833 12 8.6239C12 6.41476 10.2091 4.6239 8 4.6239C5.79086 4.6239 4 6.41476 4 8.6239C4 10.833 5.79086 12.6239 8 12.6239Z"
                                fill="black"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_126_2375">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(0 0.623901)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </li>
                      </>
                    );
                  return <li>{elt.toLowerCase()}</li>;
                })}
              </ul>
              <div className="flex items-center border">
                <div className="border">
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.6222 5.85205C20.607 5.66416 20.4597 5.51689 20.2718 5.50166L13.0964 4.91767C12.9847 4.90752 12.873 4.94814 12.7968 5.02939L4.90542 12.9208C4.83433 12.9919 4.7937 13.0884 4.7937 13.1899C4.7937 13.2915 4.83433 13.388 4.90542 13.4591L12.6648 21.2185C12.741 21.2946 12.8375 21.3302 12.9339 21.3302C13.0304 21.3302 13.1269 21.2946 13.2031 21.2185L21.0945 13.327C21.1757 13.2458 21.2164 13.1392 21.2062 13.0274L20.6222 5.85205ZM12.9339 20.411L5.71284 13.1899L13.2082 5.69462L19.8859 6.23798L20.4292 12.9157L12.9339 20.411Z"
                      fill="black"
                    />
                    <path
                      d="M17.7632 6.87781C17.3671 6.87781 16.9964 7.03015 16.712 7.31453C16.1331 7.89343 16.1331 8.83289 16.712 9.41179C16.9913 9.69109 17.3671 9.84851 17.7632 9.84851C18.1593 9.84851 18.53 9.69617 18.8144 9.41179C19.3933 8.83289 19.3933 7.89343 18.8144 7.31453C18.53 7.03523 18.1593 6.87781 17.7632 6.87781ZM18.271 8.87351C18.1339 9.01062 17.9511 9.08679 17.7581 9.08679C17.5651 9.08679 17.3823 9.01062 17.2452 8.87351C16.9659 8.59421 16.9659 8.1321 17.2452 7.85281C17.3823 7.7157 17.5651 7.63953 17.7581 7.63953C17.9511 7.63953 18.1339 7.7157 18.271 7.85281C18.5554 8.1321 18.5554 8.58914 18.271 8.87351Z"
                      fill="black"
                    />
                    <path
                      d="M12.2586 10.3259C12.1113 10.1786 11.8676 10.1786 11.7203 10.3259L8.59727 13.449C8.45 13.5962 8.45 13.84 8.59727 13.9872C8.67344 14.0634 8.76992 14.099 8.86641 14.099C8.96289 14.099 9.05937 14.0634 9.13555 13.9872L12.2586 10.8642C12.4059 10.7169 12.4059 10.4782 12.2586 10.3259Z"
                      fill="black"
                    />
                    <path
                      d="M14.0257 12.0981C13.8784 11.9509 13.6347 11.9509 13.4874 12.0981L10.3644 15.2212C10.2171 15.3684 10.2171 15.6122 10.3644 15.7594C10.4405 15.8356 10.537 15.8712 10.6335 15.8712C10.73 15.8712 10.8265 15.8356 10.9026 15.7594L14.0257 12.6364C14.178 12.4841 14.178 12.2454 14.0257 12.0981Z"
                      fill="black"
                    />
                    <path
                      d="M15.2597 13.8653L12.1367 16.9884C11.9894 17.1356 11.9894 17.3794 12.1367 17.5267C12.2129 17.6028 12.3094 17.6384 12.4058 17.6384C12.5023 17.6384 12.5988 17.6028 12.675 17.5267L15.798 14.4036C15.9453 14.2563 15.9453 14.0126 15.798 13.8653C15.6457 13.7181 15.407 13.7181 15.2597 13.8653Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p className="text-red-500 leading-4 border">
                  delivery in {deliveryTime} hours
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    case "product": {
      const { img, title, price, liked, description, className, star } = props;
      return (
        <div className="w-[283.5px] min-h-[370px] h-[370px] flex flex-col rounded-[15px]">
          <div className="flex-1 h-1/2 rounded-t-[15px overflow-hidden relative">
            <img
              src={img}
              alt="product image"
              className="w-full h-full object-cover overflow-hidden rounded-t-[15px]"
            />
            <div
              className="bg-[#F2F2F2] absolute top-[10px] p-1
            right-[10px] flex justify-center items-center rounded-full"
            >
              <MdOutlineFavoriteBorder size={25} />
            </div>
          </div>
          <div className=" shrink inline-flex flex-col items-start gap-[8px] p-[8px] bg-[#C9C9C9] rounded-b-[15px] overflow-hidden">
            <div className="flex justify-between w-full">
              <div className="font-medium text-[20px]">{title}</div>
              <div className="font-medium flex items-center">
                <p className="text-[14px] self-start">$</p>
                <p className="text-[20px]">{price}</p>
              </div>
            </div>
            <p>{description}</p>
            <div className="flex text-[#003D29]">
              <IoIosStarOutline size={32} />
              <IoIosStarOutline size={32} />
              <IoIosStarOutline size={32} />
              <IoIosStarOutline size={32} />
              <IoIosStarOutline size={32} />
            </div>
            <button className="border border-[#003D29] rounded-full px-[20px] py-[8px] grow-0">
              Add to cart
            </button>
          </div>
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
