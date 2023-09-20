import React from "react";

import { Line, Text } from "components";

const DesktopOneDropdown = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-lg text-white-A700"
          size="txtWorkSansRomanMedium18"
        >
          {props?.selectedproduct}
        </Text>
        <Line className="bg-white-A700 h-px w-[94%]" />
        <Text
          className="mt-1 text-sm text-white-A700"
          size="txtWorkSansLight14"
        >
          {props?.productone}
        </Text>
        <Text
          className="mt-[5px] text-sm text-white-A700"
          size="txtWorkSansLight14"
        >
          {props?.producttwo}
        </Text>
        <Text
          className="mt-[5px] text-sm text-white-A700"
          size="txtWorkSansLight14"
        >
          {props?.productthree}
        </Text>
        <Text
          className="mt-[5px] text-sm text-white-A700"
          size="txtWorkSansLight14"
        >
          {props?.productfour}
        </Text>
      </div>
    </>
  );
};

DesktopOneDropdown.defaultProps = {
  selectedproduct: "OUR PRODUCTS",
  productone: "PRODUCT 1",
  producttwo: "PRODUCT 2",
  productthree: "PRODUCT 3",
  productfour: "PRODUCT 4",
};

export default DesktopOneDropdown;
