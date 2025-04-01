import React from "react";
import GradientBorder from "./GradientBorder";

function ButtonPrimary({
  children,
  isDecorated = true,
  textClassName,
  buttonClassName,
}) {
  return (
    <div
      className={`bg-gradient-to-r from-primary to-secondary  relative  px-5 py-2 rounded-full w-fit ${buttonClassName}`}
    >
      <a href="#" className={`text-2xl font-Roboto z-0 ${textClassName}`}>
        {children}
      </a>
      {isDecorated && (
        <GradientBorder
          className="-bottom-[7px] -right-[5px]"
        ></GradientBorder> 
      )}
    </div>
  );
}

export default ButtonPrimary;
