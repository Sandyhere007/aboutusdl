import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[31px]",
};
const variants = {
  outline: {
    blue_900: "border-blue-900 border border-solid shadow-bs text-black-900",
  },
  fill: {
    blue_900: "bg-blue-900 text-white-A700",
  },
};
const sizes = {
  xs: "h-[62px] px-[29px] text-[25px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xs",
  color = "blue_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer font-istokweb text-[25px] font-bold border border-solid rounded-[31px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["blue_900"]),
};

export { Button };
