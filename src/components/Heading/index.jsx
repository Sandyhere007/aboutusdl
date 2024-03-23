import React from "react";

const sizes = {
  "3xl": "text-[105px] font-bold md:text-5xl",
  "2xl": "text-[100px] font-bold md:text-5xl",
  xl: "text-6xl font-bold md:text-[52px] sm:text-[46px]",
  "4xl": "text-[119px] font-bold md:text-5xl",
  s: "text-[45px] font-semibold md:text-[41px] sm:text-[35px]",
  md: "text-5xl font-semibold md:text-[44px] sm:text-[38px]",
  xs: "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  lg: "text-[52px] font-bold md:text-[44px] sm:text-[38px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
