import React from "react";

import { Text } from "components";

const DesktopOneColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start px-2 w-[310px] md:w-full">
          <Text
            className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 w-60"
            size="txtSyneSemiBold26"
          >
            {props?.productname}
          </Text>
          <Text
            className="max-w-[302px] md:max-w-full text-gray-900_7f text-sm"
            size="txtWorkSansRegular14Gray9007f"
          >
            {props?.productdescription}
          </Text>
          <Text
            className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 w-[58px]"
            size="txtSyneSemiBold26"
          >
            {props?.productprice}
          </Text>
        </div>
      </div>
    </>
  );
};

DesktopOneColumn.defaultProps = {
  productname: "FLORIDA JACKET",
  productdescription:
    "Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised",
  productprice: "$100",
};

export default DesktopOneColumn;
