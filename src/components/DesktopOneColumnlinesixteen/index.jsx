import React from "react";

import { Img, Line, Text } from "components";

const DesktopOneColumnlinesixteen = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-solid border-white-A700 flex flex-col items-center justify-center w-auto md:w-full">
          <div className="flex flex-row gap-2 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-lg text-white-A700 w-auto"
                size="txtWorkSansRegular18"
              >
                {props?.seemore}
              </Text>
            </div>
            <Img
              className="h-2.5 w-2.5"
              src="images/img_contrast.svg"
              alt="contrast"
            />
          </div>
        </div>
        <Line className="bg-white-A700 h-px w-full" />
      </div>
    </>
  );
};

DesktopOneColumnlinesixteen.defaultProps = { seemore: "See more" };

export default DesktopOneColumnlinesixteen;
