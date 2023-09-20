import React from "react";

const sizeClasses = {
  txtSyneSemiBold90: "font-semibold font-syne",
  txtWorkSansRegular18: "font-normal font-worksans",
  txtWorkSansRegular26: "font-normal font-worksans",
  txtWorkSansRegular14: "font-normal font-worksans",
  txtPoppinsRegular12WhiteA700: "font-normal font-poppins",
  txtWorkSansRegular14Gray9007f: "font-normal font-worksans",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtSyneExtraBold135: "font-extrabold font-syne",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtSyneSemiBold26: "font-semibold font-syne",
  txtPoppinsExtraLight40: "font-light font-poppins",
  txtWorkSansRegular18WhiteA7007f: "font-normal font-worksans",
  txtWorkSansLight14: "font-light font-worksans",
  txtWorkSansRegular14WhiteA700: "font-normal font-worksans",
  txtWorkSansRomanMedium18: "font-medium font-worksans",
  txtSyneSemiBold26WhiteA7007f: "font-semibold font-syne",
  txtWorkSansRegular18Black900: "font-normal font-worksans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
