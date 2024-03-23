import React from "react";

const sizes = {
  xs: "text-2xl font-normal md:text-[22px]",
  s: "text-[37px] font-light md:text-[35px] sm:text-[33px]",
  md: "text-[70px] font-medium md:text-5xl",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700_bf font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
