import React from 'react'

function ButtonPrimary({
  children,
  isDecorated = true,
  textClassName,
  buttonClassName,
}) {
  return (
    <div
      className={`bg-gradient-to-r from-primary to-secondary  relative  px-4 py-2 rounded-full w-fit ${buttonClassName}`}
    >
      <a href='#' className={`text-2xl font-Roboto z-0 ${textClassName}`}>{children}</a>
      {isDecorated && (
        <div
          className="absolute h-full w-full rounded-full border_gradient -bottom-2 -right-1 opacity-50 -z-10"
          style={{ "--gradient-border-width": "2px" }}
        ></div>
      )}
    </div>
  );
}

export default ButtonPrimary
