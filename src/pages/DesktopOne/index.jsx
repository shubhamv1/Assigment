import React from "react";

import { Button, Img, Line, List, Text } from "components";
import DesktopOneColumn from "components/DesktopOneColumn";
import DesktopOneColumnlinesixteen from "components/DesktopOneColumnlinesixteen";
import DesktopOneDropdown from "components/DesktopOneDropdown";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-worksans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="h-[790px] md:px-5 relative w-full">
            <div className="bg-gray-900_01 flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-start mb-[-1px] mx-auto p-2.5 w-full z-[1]">
              <Img
                className="h-3 md:ml-[0] ml-[79px]"
                src="images/img_computer.svg"
                alt="computer"
              />
              <Text
                className="md:ml-[0] ml-[7px] text-gray-700 text-xs"
                size="txtPoppinsRegular12"
              >
                Free Delivery
              </Text>
              <Line className="bg-gray-700 h-[19px] md:h-px ml-3.5 md:ml-[0] md:w-full w-px" />
              <Text
                className="md:ml-[0] ml-[13px] text-gray-700 text-xs"
                size="txtPoppinsRegular12"
              >
                Return Policy
              </Text>
              <a
                href="javascript:"
                className="md:ml-[0] ml-[864px] text-[10px] text-gray-700"
              >
                <Text size="txtPoppinsRegular10">Login</Text>
              </a>
              <Text
                className="md:ml-[0] ml-[35px] text-[10px] text-gray-700"
                size="txtPoppinsRegular10"
              >
                Follow US
              </Text>
              <Img
                className="h-[7px] ml-3.5 md:ml-[0]"
                src="images/img_vector.svg"
                alt="vector"
              />
              <Img
                className="h-[7px] md:ml-[0] ml-[11px] w-2"
                src="images/img_linkedin.svg"
                alt="linkedin"
              />
              <Img
                className="h-[5px] ml-3 md:ml-[0]"
                src="images/img_vector_gray_700.svg"
                alt="vector_One"
              />
              <Img
                className="h-2 md:ml-[0] ml-[11px] w-2"
                src="images/img_camera.svg"
                alt="camera"
              />
            </div>
            <div className="h-[749px] mt-auto mx-auto w-full">
              <div className="bg-gray-900 h-[748px] m-auto w-full"></div>
              <div className="absolute h-[749px] inset-[0] justify-center m-auto w-full">
                <div className="h-[749px] m-auto w-full">
                  <div className="h-[749px] m-auto w-full">
                    <Img
                      className="h-[749px] m-auto object-cover w-full"
                      src="images/img_rectangle.png"
                      alt="rectangle"
                    />
                    <div className="absolute bottom-[0] md:h-[654px] h-[659px] inset-x-[0] mx-auto w-full">
                      <div className="absolute font-worksans md:h-[654px] h-[659px] inset-y-[0] my-auto right-[0] w-[69%] md:w-full">
                        <div className="md:h-[654px] h-[659px] m-auto w-full">
                          <div className="absolute md:h-[654px] h-[659px] inset-y-[0] my-auto right-[6%] w-[49%] sm:w-full">
                            <Img
                              className="absolute border border-solid border-white-A700 h-[371px] right-[0] top-[0] w-[77%]"
                              src="images/img_star3.svg"
                              alt="starThree"
                            />
                            <Img
                              className="absolute h-[654px] inset-y-[0] left-[0] my-auto object-cover w-[91%]"
                              src="images/img_jessicaradanav.png"
                              alt="jessicaradanav"
                            />
                          </div>
                          <div className="absolute bg-yellow-900_6c bottom-[14%] flex flex-col inset-x-[0] items-start justify-center mx-auto p-[23px] sm:px-5 w-full">
                            <Text
                              className="md:ml-[0] ml-[830px] mt-[247px] text-gray-900 text-sm uppercase"
                              size="txtWorkSansRegular14"
                            >
                              Oregon jacket
                            </Text>
                            <Text
                              className="mb-6 md:ml-[0] ml-[830px] mt-0.5 text-gray-900 text-sm"
                              size="txtWorkSansRegular14"
                            >
                              $124
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[12%] h-[89px] right-[44%] w-[7%]"
                          src="images/img_star4.svg"
                          alt="starFour"
                        />
                      </div>
                      <Line className="absolute bg-white-A700 bottom-[18%] h-px left-[0] w-[68%]" />
                      <Text
                        className="absolute left-[8%] md:text-5xl text-[135px] text-white-A700 top-[18%]"
                        size="txtSyneExtraBold135"
                      >
                        Fresh
                      </Text>
                      <Text
                        className="absolute bottom-[23%] left-[13%] md:text-5xl text-[135px] text-white-A700"
                        size="txtSyneExtraBold135"
                      >
                        Look
                      </Text>
                      <DesktopOneColumnlinesixteen className="absolute bottom-[10%] flex flex-col font-worksans gap-[3px] items-center justify-center left-[8%] w-auto" />
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[9px] inset-x-[0] justify-start mx-auto top-[1%] w-[88%]">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                        size="txtPoppinsExtraLight40"
                      >
                        ShopKart
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[934px] text-sm text-white-A700"
                        size="txtWorkSansRegular14WhiteA700"
                      >
                        WISHLIST (0)
                      </Text>
                      <Text
                        className="ml-2.5 sm:ml-[0] text-sm text-white-A700"
                        size="txtWorkSansRegular14WhiteA700"
                      >
                        BAG (0)
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[47px] w-[59%] md:w-full">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtWorkSansRegular18"
                      >
                        HOME
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[123px] text-lg text-white-A700"
                        size="txtWorkSansRegular18"
                      >
                        ABOUT
                      </Text>
                      <a
                        href="javascript:"
                        className="md:ml-[0] ml-[379px] text-lg text-white-A700"
                      >
                        <Text size="txtWorkSansRegular18">CONTACT US</Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-1.5 inset-x-[0] justify-start mx-auto top-[6%] w-[88%]">
                  <div className="h-[22px] relative w-full">
                    <Line className="absolute bg-white-A700 bottom-[45%] h-px inset-x-[0] mx-auto w-full" />
                    <Img
                      className="absolute border border-solid border-white-A700 h-[22px] inset-y-[0] left-[31%] my-auto w-[21px]"
                      src="images/img_star1.svg"
                      alt="starOne"
                    />
                  </div>
                  <DesktopOneDropdown className="border border-solid border-white-A700 flex flex-col items-start justify-start md:ml-[0] ml-[400px] pb-[11px] pr-[11px] w-[13%] md:w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-syne md:gap-5 items-center justify-start max-w-[1269px] mt-[76px] mx-auto md:px-5 w-full">
            <div className="h-[109px] relative w-[53%] md:w-full">
              <Text
                className="absolute h-full inset-[0] justify-center m-auto md:text-5xl text-[90px] text-black-900 w-max"
                size="txtSyneSemiBold90"
              >
                New products
              </Text>
              <div className="absolute bottom-[0] h-[22px] inset-x-[0] mx-auto w-full">
                <Line className="absolute bg-gray-900 bottom-[45%] h-px inset-x-[0] mx-auto w-[99%]" />
                <Img
                  className="absolute h-[22px] inset-y-[0] left-[0] my-auto w-[22px]"
                  src="images/img_star2.svg"
                  alt="starTwo"
                />
              </div>
            </div>
            <Line className="bg-gray-900 h-px mb-[50px] md:ml-[0] ml-[448px] md:mt-0 mt-[58px] rotate-[-180deg] w-[5%]" />
            <Line className="bg-gray-900 h-px mb-[50px] ml-12 md:ml-[0] md:mt-0 mt-[58px] w-[5%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[97px] items-start justify-end md:ml-[0] ml-[91px] mt-[22px] overflow-auto md:px-5 w-[94%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5 w-[158px] md:w-full">
              <Text
                className="text-black-900 text-lg"
                size="txtWorkSansRegular18Black900"
              >
                Apparel
              </Text>
              <Text
                className="mt-[19px] md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                size="txtSyneSemiBold26"
              >
                Accessories
              </Text>
              <Text
                className="mt-[19px] text-black-900 text-lg"
                size="txtWorkSansRegular18Black900"
              >
                Best sellers
              </Text>
              <Text
                className="mt-[21px] text-black-900 text-lg"
                size="txtWorkSansRegular18Black900"
              >
                50% off
              </Text>
            </div>
            <div className="flex flex-col gap-[11px] items-start justify-start w-[97%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[26px] items-center justify-start w-3/4 md:w-full">
                <div className="h-[322px] relative w-[32%] md:w-full">
                  <Img
                    className="h-[322px] m-auto object-cover w-full"
                    src="images/img_philipparlt8e.png"
                    alt="philipparlt8e"
                  />
                  <Button className="absolute bg-gray-900 bottom-[0] flex h-[45px] items-center justify-center p-3.5 right-[0] w-[45px]">
                    <Img
                      className="h-[15px]"
                      src="images/img_contrast_white_a700.svg"
                      alt="contrast_One"
                    />
                  </Button>
                </div>
                <div className="h-[322px] relative w-[32%] md:w-full">
                  <Img
                    className="h-[322px] m-auto object-cover w-full"
                    src="images/img_zamnungarayac.png"
                    alt="zamnungarayac"
                  />
                  <Button className="absolute bg-gray-900 bottom-[0] flex h-[45px] items-center justify-center p-3.5 right-[0] w-[45px]">
                    <Img
                      className="h-[15px]"
                      src="images/img_contrast_white_a700.svg"
                      alt="contrast_Two"
                    />
                  </Button>
                </div>
                <div className="flex h-[322px] justify-end relative w-[32%] md:w-full">
                  <Button className="bg-gray-900 flex h-[45px] items-center justify-center ml-auto mt-auto p-3.5 w-[45px]">
                    <Img
                      className="h-[15px]"
                      src="images/img_contrast_white_a700.svg"
                      alt="contrast_Three"
                    />
                  </Button>
                  <div className="absolute inset-[0] justify-center m-auto overflow-x-auto w-full">
                    <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between w-full">
                      <div className="h-[322px] relative w-full">
                        <Img
                          className="h-[322px] m-auto object-cover w-full"
                          src="images/img_malickimbeser.png"
                          alt="malickimbeser"
                        />
                        <Button className="absolute bg-gray-900 bottom-[0] flex h-[45px] items-center justify-center p-3.5 right-[0] w-[45px]">
                          <Img
                            className="h-[15px]"
                            src="images/img_contrast_white_a700.svg"
                            alt="contrast_Four"
                          />
                        </Button>
                      </div>
                      <Img
                        className="flex-1 h-[322px] sm:h-auto object-cover w-full"
                        src="images/img_philipparltnm.png"
                        alt="philipparltnm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                {new Array(4).fill({}).map((props, index) => (
                  <React.Fragment key={`DesktopOneColumn${index}`}>
                    <DesktopOneColumn
                      className="flex flex-col gap-2 items-start justify-start w-auto"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <div className="font-worksans h-[520px] md:h-[623px] mt-[103px] md:px-5 relative w-full">
            <div className="h-[520px] m-auto w-full">
              <div className="font-worksans h-[520px] m-auto w-full">
                <Img
                  className="h-[520px] m-auto object-cover w-full"
                  src="images/img_18591063.png"
                  alt="18591063"
                />
                <Text
                  className="absolute left-[7%] text-lg text-white-A700_7f top-[20%] w-[24%] sm:w-full"
                  size="txtWorkSansRegular18WhiteA7007f"
                >
                  Get news about articles and updates in your inbox.
                </Text>
              </div>
              <div className="absolute flex flex-col font-worksans gap-[41px] justify-start left-[7%] top-[16%] w-[43%]">
                <div className="flex flex-row sm:gap-10 items-center justify-between mr-[33px] w-[95%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700_7f"
                    size="txtSyneSemiBold26WhiteA7007f"
                  >
                    Newslleter
                  </Text>
                  <Text
                    className="text-lg text-white-A700_7f"
                    size="txtWorkSansRegular18WhiteA7007f"
                  >
                    NAME
                  </Text>
                </div>
                <div className="flex flex-col gap-[47px] items-start justify-start md:ml-[0] ml-[527px]">
                  <Text
                    className="text-lg text-white-A700_7f"
                    size="txtWorkSansRegular18WhiteA7007f"
                  >
                    EMAIL
                  </Text>
                  <Text
                    className="text-lg text-white-A700_7f"
                    size="txtWorkSansRegular18WhiteA7007f"
                  >
                    MESSAGE
                  </Text>
                </div>
              </div>
              <Text
                className="absolute bottom-[0] leading-[102.00px] left-[6%] md:text-5xl text-[135px] text-white-A700"
                size="txtSyneExtraBold135"
              >
                <>
                  GET <br />
                  IN TOUCH
                </>
              </Text>
            </div>
            <div className="absolute bottom-[15%] flex flex-col items-start justify-start right-[7%] w-[51%]">
              <Line className="bg-white-A700 h-px w-[77%]" />
              <Line className="bg-white-A700 h-px mt-16 w-[77%]" />
              <Line className="bg-white-A700 h-px mt-[68px] w-[77%]" />
              <div className="border-2 border-solid border-yellow-900 flex flex-col h-[181px] items-center justify-center md:ml-[0] ml-[546px] mt-[13px] p-[54px] md:px-10 sm:px-5 rounded-[90px] w-[181px]">
                <Text
                  className="my-5 md:text-2xl sm:text-[22px] text-[26px] text-yellow-900"
                  size="txtWorkSansRegular26"
                >
                  SEND
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-black-900 flex flex-col font-poppins items-center justify-end p-[22px] sm:px-5 w-full">
            <Text
              className="mt-0.5 text-white-A700 text-xs"
              size="txtPoppinsRegular12WhiteA700"
            >
              Copyright 2022 All Right Reserved By SG
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
