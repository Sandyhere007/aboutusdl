import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-[1189px] gap-[41px] md:pb-5 bg-black-900">
        <div>
          <header className="flex flex-row justify-center items-center w-[100vwpx] p-2 bg-white-A700">
            <div className="flex md:flex-col justify-between items-center w-[100vwpx] md:w-full mt-[3px] gap-5 mx-auto max-w-[1810px]">
              <div className="flex md:flex-col justify-center items-center w-[80vwpx] md:w-full gap-[11px]">
                <div className="flex sm:flex-col justify-center items-start w-[38%] md:w-full gap-[7px]">
                  <div className="flex justify-center w-[36%] sm:w-full mb-[3px] text-6xl">
                    <div className="flex flex-col items-center w-full">
                      <div className="self-stretch h-[81px] w-[100px] relative">
                        <Img
                          src="images/img_vector_indigo_900_01.svg"
                          alt="vector_one"
                          className="h-[102px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <div className="flex flex-col w-[97%] bottom-[0.98px] right-0 left-0 m-auto absolute">
                          <div className="flex items-center">
                            <div className="flex items-start z-[1] flex-1">
                              <div className="flex items-center flex-1">
                                <div className="h-[91px] w-full md:h-auto z-[1] relative">
                                  <Img src="images/img_vector.svg" alt="vector_three" className="h-[91px]" />
                                  <div className="flex justify-end items-center w-[89%] right-[3.58px] top-[1.39px] m-auto absolute">
                                    <Img
                                      src="images/img_vector_indigo_900.svg"
                                      alt="vector_five"
                                      className="self-end h-[20px] mb-4 z-[1]"
                                    />
                                    <div className="flex flex-col items-start ml-[-17px] flex-1">
                                      <div className="flex items-start ml-[5px] md:ml-0">
                                        <Img
                                          src="images/img_vector_indigo_900_02.svg"
                                          alt="vector_seven"
                                          className="h-[3px] w-[3px] mt-[9px]"
                                        />
                                        <Img
                                          src="images/img_vector_indigo_900_3x3.svg"
                                          alt="vector_nine"
                                          className="h-[3px] w-[3px] mb-[15px] ml-0.5 z-[1]"
                                        />
                                        <Img
                                          src="images/img_vector_gray_100.svg"
                                          alt="vector_eleven"
                                          className="h-[38px] ml-[-2px]"
                                        />
                                        <Img
                                          src="images/img_vector_indigo_900_4x5.svg"
                                          alt="vector_thirteen"
                                          className="h-[4px] w-[5px] mt-0.5"
                                        />
                                        <Img
                                          src="images/img_vector_indigo_900_3x3.svg"
                                          alt="vector_fifteen"
                                          className="h-[4px] w-[5px] mb-[13px] ml-[-1px]"
                                        />
                                      </div>
                                      <div className="flex items-start gap-[29px]">
                                        <Img
                                          src="images/img_vector_indigo_900_8x13.svg"
                                          alt="vector"
                                          className="h-[8px]"
                                        />
                                        <Img
                                          src="images/img_vector_indigo_900_02_3x3.svg"
                                          alt="vector_nineteen"
                                          className="h-[3px] w-[3px]"
                                        />
                                      </div>
                                      <div className="h-[29px] w-[50%] md:h-auto mt-[5px] relative">
                                        <Img
                                          src="images/img_vector_blue_gray_50.svg"
                                          alt="vector"
                                          className="h-[29px]"
                                        />
                                        <Img
                                          src="images/img_vector_4x5.svg"
                                          alt="vector"
                                          className="h-[4px] w-[5px] right-[0.64px] top-[0.94px] m-auto absolute"
                                        />
                                        <Img
                                          src="images/img_vector_indigo_900_3x4.svg"
                                          alt="vector"
                                          className="h-[3px] w-[4px] bottom-[1.32px] left-[2.74px] m-auto absolute"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col self-end items-center w-full mb-0.5 ml-[-17px]">
                                  <div className="h-[2px] w-[83%] bg-gray-100_01" />
                                  <Img
                                    src="images/img_vector_gray_100_02.svg"
                                    alt="vector"
                                    className="h-[9px] w-full"
                                  />
                                </div>
                              </div>
                              <Img
                                src="images/img_vector_gray_100_02_29x39.svg"
                                alt="vector"
                                className="h-[29px] ml-[-34px] z-[1]"
                              />
                            </div>
                            <div className="flex self-end items-start mb-[11px] ml-[-9px]">
                              <Img
                                src="images/img_vector_gray_100_02_22x34.svg"
                                alt="vector"
                                className="h-[22px] mb-2.5"
                              />
                              <Img
                                src="images/img_vector_gray_100_02_15x22.svg"
                                alt="vector"
                                className="h-[15px] ml-[-2px]"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col self-center mt-[-19px] z-[1]">
                            <div className="flex items-start pr-px">
                              <Img src="images/img_vector_blue_gray_50_01.svg" alt="vector" className="h-[20px]" />
                              <Img
                                src="images/img_vector_indigo_900_02.svg"
                                alt="vector"
                                className="h-[3px] w-[3px] ml-[-4px]"
                              />
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_vector_gray_100_02_27x37.svg"
                          alt="vector_fortyone"
                          className="h-[27px] right-[35%] top-[32%] m-auto absolute"
                        />
                        <Img
                          src="images/img_vector_29x39.svg"
                          alt="vector"
                          className="h-[29px] bottom-[21.77px] right-0 left-0 m-auto absolute"
                        />
                        <Img
                          src="images/img_vector_gray_100_02_22x33.svg"
                          alt="vector"
                          className="h-[22px] right-[32%] top-[24.44px] m-auto absolute"
                        />
                        <Img
                          src="images/img_vector_gray_100_02_21x33.svg"
                          alt="vector"
                          className="h-[21px] bottom-[35%] right-0 left-0 m-auto absolute"
                        />
                        <Img
                          src="images/img_vector_gray_100_02_13x14.svg"
                          alt="vector"
                          className="h-[13px] w-[14px] bottom-[39%] right-[30%] m-auto absolute"
                        />
                      </div>
                      <div className="h-[2px] w-[42%] mt-[-3px] z-[1] bg-gray-100_02" />
                    </div>
                  </div>
                  <Heading size="xl" as="h1" className="!text-black-900 !font-istokweb text-center !text-[50px]">
                    <span className="text-blue-900">Dream</span>
                    <span className="text-black-900">Legal</span>
                  </Heading>
                </div>
                <ul className="flex flex-row md:flex-col justify-center items-center md:self-stretch gap-2.5 md:px-5 flex-1 text-2xl">
                  <li>
                    <a
                      href="#"
                      className="flex justify-center items-center h-[50px] px-[19px] py-[3px] bg-blue-100_7f rounded-[10px]"
                    >
                      <Heading size="xs" as="h3" className="!text-blue-900 !font-istokweb text-center">
                        Home
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <div className="flex flex-row justify-center items-center w-[500px] flex-wrap text-center">
                      <a
                        href="Directory"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-row self-end justify-end items-center px-[19px] py-[3px] cursor-pointer inline hover:text-blue-900 hover:bg-blue-100_7f hover:rounded-[10px]"
                      >
                        <Heading size="xs" as="h3" className="!text-blue-900_01 !font-istokweb text-center !text-2xl">
                          Directory
                        </Heading>
                      </a>
                      <a
                        href="Knowledge"
                        target="_blank"
                        rel="noreferrer"
                        className="self-end px-[19px] py-[3px] cursor-pointer inline hover:text-blue-900 hover:bg-blue-100_7f hover:rounded-[10px]"
                      >
                        <Heading size="xs" as="h3" className="!text-blue-900_01 !font-istokweb text-center !text-2xl">
                          Knowledge
                        </Heading>
                      </a>
                      <a
                        href="#"
                        className="self-start px-[19px] py-[3px] cursor-pointer inline hover:text-blue-900 hover:bg-blue-100_7f hover:rounded-[10px]"
                      >
                        <Heading size="xs" as="h3" className="!text-blue-900_01 !font-istokweb text-center !text-2xl">
                          About us
                        </Heading>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex gap-[9px]">
                <Button shape="round" className="sm:px-5 min-w-[132px]">
                  Log In
                </Button>
                <Button variant="fill" shape="round" className="border-white-A700 min-w-[131px]">
                  Contact Us
                </Button>
              </div>
            </div>
          </header>
        </div>
        <div className="w-full mx-auto md:p-5 max-w-[1694px]">
          <div className="flex flex-col gap-11">
            <div className="flex md:flex-col items-start ml-[39px] md:ml-0">
              <div className="flex flex-col md:self-stretch mt-[22px] gap-[315px] md:gap-[236px] sm:gap-[157px] flex-1 bg-black-900">
                <div className="h-[365px] w-[75%] md:h-auto relative">
                  <div className="flex flex-col items-end w-[75%] mb-10 mr-[97px] gap-[57px] md:mr-0 sm:gap-7">
                    <div className="h-[32px] w-[79%] bg-gradient" />
                    <div className="self-stretch h-[32px] mr-[327px] md:mr-0 bg-gradient" />
                    <div className="h-[32px] w-[50%] mr-[70px] md:mr-0 bg-gradient" />
                  </div>
                  <Text
                    size="md"
                    as="p"
                    className="h-max md:w-full left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 !text-6xl absolute"
                  >
                    We simplify selection, onboarding and management of technology for legal professionals and teams.
                  </Text>
                </div>
                <div className="flex md:flex-col justify-between items-start ml-5 gap-5 md:ml-0">
                  <Img
                    src="images/img_rectangle_22.png"
                    alt="image"
                    className="w-[20%] md:w-full mt-10 object-cover rounded-[16px]"
                  />
                  <div className="flex md:flex-col justify-between items-end w-[73%] md:w-full mt-[51px] gap-5">
                    <Img
                      src="images/img_rectangle_23.png"
                      alt="image_one"
                      className="w-[28%] md:w-full mt-[122px] mb-[51px] object-cover rounded-[16px]"
                    />
                    <Img
                      src="images/img_rectangle_24.png"
                      alt="image_two"
                      className="w-[28%] md:w-full mb-60 object-cover rounded-[16px]"
                    />
                    <Img
                      src="images/img_rectangle_25.png"
                      alt="image_three"
                      className="w-[28%] md:w-full object-cover rounded-[16px]"
                    />
                  </div>
                </div>
              </div>
              <Img src="images/img_https_lottief.png" alt="httpslottief" className="w-[26%] md:w-full object-cover" />
            </div>
            <div className="h-[756px] w-[90%] relative bg-black-900">
              <Heading
                size="4xl"
                as="h1"
                className="left-[0.00px] top-[0.00px] m-auto !font-abhayalibre !text-[90px] absolute"
              >
                Our Mission
              </Heading>
              <Text
                size="s"
                as="p"
                className="w-[85%] bottom-[-0.70px] left-[3%] m-auto !text-white-A700_db !text-[32px] absolute"
              >
                Our mission is to simplify every legal professional’s journey with technology, making it an effortless
                part of your daily workflow. We understand the unique challenges legal professionals face.  We&#39;re
                here to ensure that technology enhances your practice and eases your workload.
              </Text>
              <Img
                src="images/img_lingkaran.svg"
                alt="lingkaran_one"
                className="h-[457px] w-[457px] right-[0.00px] top-[14%] m-auto absolute"
              />
            </div>
            <div className="flex flex-col items-start w-[76%] md:w-full ml-[42px] md:ml-0">
              <Heading size="2xl" as="h2" className="!font-abhayalibre !text-[80px]">
                6 things we value
              </Heading>
              <div className="flex-row self-stretch justify-center items-center gap-[70px] grid-cols-3 grid grid-rows-2">
                <div className="h-[588px] w-full relative">
                  <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto bg-indigo-A700 shadow-xs absolute">
                    <div className="flex flex-col items-start gap-[57px] sm:gap-7">
                      <div className="h-[201px] w-[49%] bg-blue-A400" />
                      <Heading as="h3" className="ml-[55px] md:ml-0 !text-[40px]">
                        Impact
                      </Heading>
                      <div className="flex self-stretch justify-end bg-indigo-A700_01">
                        <div className="w-[51%] md:w-full pl-[7px] md:p-5 bg-indigo-A700_01">
                          <div className="h-[201px] bg-blue-A400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[201px] w-[51%] right-[0.00px] top-[0.00px] m-auto bg-indigo-A700_01 absolute" />
                </div>
                <div className="flex flex-col items-center w-full gap-[33px] bg-light_blue-A400">
                  <Img src="images/img_group_17.svg" alt="image" className="h-[221px] w-full md:h-auto" />
                  <Heading as="h4" className="!text-[40px]">
                    Integration
                  </Heading>
                  <Img src="images/img_group_16.svg" alt="image_one" className="h-[228px] w-full md:h-auto" />
                </div>
                <div className="h-[588px] w-full relative">
                  <div className="flex flex-col items-start w-full h-max gap-[38px] left-0 bottom-0 right-0 top-0 m-auto bg-gray-700 absolute">
                    <div className="w-[49%] md:w-full md:p-5 bg-gray-700">
                      <div className="h-[186px] w-[186px] bg-gray-700_01 rounded-[93px]" />
                    </div>
                    <Heading
                      as="h5"
                      className="flex flex-row self-center justify-center items-center pb-[286px] !text-[40px] text-center"
                    >
                      Efficiency
                    </Heading>
                  </div>
                  <div className="w-[48%] bottom-[3.00px] right-[0.00px] m-auto rotate-[-180deg] bg-gray-700 absolute">
                    <div className="h-[186px] w-[186px] bg-gray-700_01 rounded-[93px]" />
                  </div>
                </div>
                <div className="h-[591px] w-full relative">
                  <div className="h-[588px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img
                      src="images/img_group_13.svg"
                      alt="image"
                      className="h-[588px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <Img
                      src="images/img_polygon_2.svg"
                      alt="polygontwo_one"
                      className="h-[109px] bottom-[0.00px] right-0 left-0 m-auto absolute hidden"
                    />
                    <Heading
                      size="s"
                      as="h6"
                      className="w-max top-[42%] right-0 left-0 m-auto text-center !text-[40px] absolute"
                    >
                      Collaboration
                    </Heading>
                    <Img
                      src="images/img_polygon_1.svg"
                      alt="polygonone_one"
                      className="h-[212px] bottom-[0.00px] right-0 left-0 m-auto absolute"
                    />
                  </div>
                  <Img
                    src="images/img_group_21.svg"
                    alt="image_one"
                    className="h-[600px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                </div>
                <div className="h-[588px] w-full md:h-auto relative">
                  <div className="flex flex-col w-full gap-[254px] md:gap-[190px] sm:gap-[127px]">
                    <Img src="images/img_pattern.svg" alt="pattern_one" className="h-[163px] ml-[181px] md:ml-0" />
                    <Img src="images/img_pattern.svg" alt="pattern_three" className="h-[140px]" />
                  </div>
                  <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto bg-gray-800 absolute">
                    <div className="flex flex-col gap-[91px] md:gap-[68px] sm:gap-[45px]">
                      <Img src="images/img_pattern_gray_50.svg" alt="pattern_five" className="h-[163px] w-full" />
                      <div className="flex ml-2.5 md:ml-0">
                        <Heading as="h1" className="!text-[40px]">
                          Innovation
                        </Heading>
                      </div>
                      <div className="flex">
                        <Img
                          src="images/img_pattern_yellow_400.svg"
                          alt="pattern_seven"
                          className="h-[140px] z-[1] relative"
                        />
                        <Img
                          src="images/img_pattern_gray_50_171x180.svg"
                          alt="pattern_nine"
                          className="h-[140px] static"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[588px] w-full md:h-auto pl-[7px] bg-gray-900_01 relative">
                  <div className="flex flex-col w-full gap-[222px] md:gap-[166px] sm:gap-[111px]">
                    <Img src="images/img_lingkaran.svg" alt="lingkaran_one" className="h-[162px]" />
                    <Img src="images/img_lingkaran.svg" alt="lingkaran_three" className="h-[204px]" />
                  </div>
                  <Heading
                    as="h1"
                    className="w-[84%] top-[40%] right-0 left-0 m-auto text-center !text-[40px] absolute"
                  >
                    Value for Investment
                  </Heading>
                </div>
              </div>
              <Heading size="3xl" as="h1" className="mt-[199px] ml-[5px] md:ml-0 !font-abhayalibre !text-[90px]">
                Our Vision
              </Heading>
              <Heading size="lg" as="h1" className="mt-[95px] !text-indigo-A700_fc !text-[44px]">
                Our vision is to unlock these six core values in the life of legal professionals through technology.
              </Heading>
              <Heading as="h1" className="mt-[117px] ml-[5px] md:ml-0 !text-white-A700_fc !text-[44px]">
                Impact
              </Heading>
              <div className="self-stretch mt-[30px] ml-[5px] md:ml-0">
                <div className="flex flex-col items-start">
                  <Text as="p" className="!text-xl">
                    Driving meaningful change in how you serve clients and achieve results.
                  </Text>
                  <Heading as="h1" className="mt-[37px] !text-white-A700_fc !text-[44px]">
                    Flexible and budget friendly model
                  </Heading>
                  <Text as="p" className="mt-[3px] !text-xl">
                    Gesture Nexus provides quality services with transparent pricing and personalized attention for
                    businesses of all sizes
                  </Text>
                  <Heading as="h1" className="mt-2.5 !text-white-A700_fc !text-[44px]">
                    Strategic approach
                  </Heading>
                  <Text as="p" className="mt-[5px] !text-xl">
                    By implementing a strategic approach, you can out compete your rivals and achieve success
                    efficiently and effectively.{" "}
                  </Text>
                  <div className="self-stretch mt-[5px]">
                    <div className="flex flex-col items-start">
                      <Heading as="h1" className="!text-white-A700_fc !text-[44px] z-[1]">
                        Committed timelines
                      </Heading>
                      <Text as="p" className="mt-[-6px] !text-xl">
                        At Gesture Nexus, we take pride in our ability to meet deadlines and go above and beyond to
                        ensure our customers are satisfied with our work.
                      </Text>
                    </div>
                  </div>
                  <Heading as="h1" className="mt-[19px] !text-white-A700_fc !text-[44px] z-[1]">
                    Quality services
                  </Heading>
                  <Text as="p" className="!text-xl">
                    Trust us to provide you with the quality service you deserve.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
