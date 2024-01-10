import { useState, useEffect, useMemo } from "react";
import axios from "axios";
// import TypeGreySizeMediumState from "./type-grey-size-medium-state";

const Type04BreakpointDesktop1 = ({
  subHeading,
  title,
  type04BreakpointDesktopWidth,
  type04BreakpointDesktopHeight,
  type04BreakpointDesktopPosition,
  heroSectionHeight,
  heroSectionTop,
  heroSectionBottom,
  containerWidth,
  containerPadding,
  rowWidth,
  contentWidth,
  contentWidth1,
  subHeadingLineHeight,
  subHeadingWidth,
  contentWidth2,
  titleLineHeight,
  paraTextLineHeight,
  paraTextWidth,
  actionWidth,
  textLineHeight,
  arrowRightIconWidth,
  arrowRightIconHeight,
  noCreditCardLineHeight,
  noCreditCardWidth,
}) => {
  const [text, setText] = useState("");

  const [formeddata, setformeddata] = useState({
    userEmail: '',
  });

  const handleInputChange = (e) => {
    setformeddata({
      ...formeddata,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { responsedata } = await axios.post('https://digilab-backend-qz1q.onrender.com/api/emails', {
        email: formeddata.userEmail
      });

      // // Handle the response as needed
      alert("Email sent successfully");
      console.log('Email sent successfully:', responsedata.data);
      // console.log(formeddata);
    } catch (error) {
      // Handle errors
      console.error('Error sending the email:', error.response);
    }
  };


  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await axios.get("https://digilab-backend-qz1q.onrender.com/api/settings");
        const logoData = response.data[0];
        setText(logoData.buttonText);
      } catch (error) {
        console.error("Error fetching text:", error);
      }
    };

    fetchText();
  }, []);

  const type04BreakpointDesktop1Style = useMemo(() => {
    return {
      width: type04BreakpointDesktopWidth,
      height: type04BreakpointDesktopHeight,
      position: type04BreakpointDesktopPosition,
    };
  }, [
    type04BreakpointDesktopWidth,
    type04BreakpointDesktopHeight,
    type04BreakpointDesktopPosition,
  ]);

  const heroSection2Style = useMemo(() => {
    return {
      height: heroSectionHeight,
      top: heroSectionTop,
      bottom: heroSectionBottom,
    };
  }, [heroSectionHeight, heroSectionTop, heroSectionBottom]);

  const container23Style = useMemo(() => {
    return {
      width: containerWidth,
      padding: containerPadding,
    };
  }, [containerWidth, containerPadding]);

  const row12Style = useMemo(() => {
    return {
      width: rowWidth,
    };
  }, [rowWidth]);

  const content61Style = useMemo(() => {
    return {
      width: contentWidth,
    };
  }, [contentWidth]);

  const content62Style = useMemo(() => {
    return {
      width: contentWidth1,
    };
  }, [contentWidth1]);

  const subHeading2Style = useMemo(() => {
    return {
      lineHeight: subHeadingLineHeight,
      width: subHeadingWidth,
    };
  }, [subHeadingLineHeight, subHeadingWidth]);

  const content63Style = useMemo(() => {
    return {
      width: contentWidth2,
    };
  }, [contentWidth2]);

  const title7Style = useMemo(() => {
    return {
      lineHeight: titleLineHeight,
    };
  }, [titleLineHeight]);

  const paraText5Style = useMemo(() => {
    return {
      lineHeight: paraTextLineHeight,
      width: paraTextWidth,
    };
  }, [paraTextLineHeight, paraTextWidth]);

  const action5Style = useMemo(() => {
    return {
      width: actionWidth,
    };
  }, [actionWidth]);

  const textStyle = useMemo(() => {
    return {
      lineHeight: textLineHeight,
    };
  }, [textLineHeight]);

  const noCreditCardStyle = useMemo(() => {
    return {
      lineHeight: noCreditCardLineHeight,
      width: noCreditCardWidth,
    };
  }, [noCreditCardLineHeight, noCreditCardWidth]);

  const zapIconStyle = useMemo(() => {
    return {
      width: '20px',
      height: '20px',
    };
  }, []);

  return (
    <div
      className="w-[1440px] h-[532px] text-center text-base text-pri-purple-400 font-h05-12-medium"
      style={type04BreakpointDesktop1Style}
    >
      <img
        className="absolute h-[86.47%] w-[43.82%] top-[8.27%] right-[28.13%] bottom-[5.26%] left-[28.06%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/mesh@2x.png"
      />
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-center justify-center pt-32 px-20 pb-8 box-border"
        style={heroSection2Style}
      >
        <div
          className="w-[1280px] flex flex-col items-center justify-center py-0 px-8 box-border"
          style={container23Style}
        >
          <div
            className="w-[1216px] flex flex-col items-center justify-center"
            style={row12Style}
          >
            <div
              className="w-[832px] flex flex-col items-start justify-start gap-[32px]"
              style={content61Style}
            >
              <div
                className="w-[832px] flex flex-col items-center justify-start gap-[16px]"
                style={content62Style}
              >
                <div
                  className="relative leading-[20px] font-medium inline-block w-[832px]"
                  style={subHeading2Style}
                >
                  {subHeading}
                </div>
                <div
                  className="w-[832px] flex flex-col items-center justify-start gap-[16px] text-43xl text-gray font-h700-62-semibold"
                  style={content63Style}
                >
                  <div
                    className="self-stretch relative leading-[72px] font-semibold"
                    style={title7Style}
                  >
                    {title}
                  </div>
                  <div
                    className="relative text-lg leading-[28px] font-h05-12-medium text-neutral-400 inline-block w-[648px]"
                    style={paraText5Style}
                  >
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[16px] text-sm text-neutral-400">
                <div
                  className="w-[832px] shrink-0 flex flex-row items-center justify-center"
                  style={action5Style}
                >
                  <div className="rounded-lg bg-pri-purple-400 flex flex-row items-center justify-center py-3 px-4 gap-[8px] text-center text-base text-white font-h05-12-medium">
                    <div className="relative leading-[20px] font-medium">
                      {text}
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/arrowright@2x.png"
                      style={zapIconStyle}
                    />
                  </div>

                </div>
                <form onSubmit={handleFormSubmit} className="mb-4">

                  <label >
                    <input
                      type="email"
                      name="userEmail"
                      id=""
                      value={formeddata.userEmail}
                      onChange={handleInputChange}
                      placeholder="Enter your Email"
                      className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-pri-purple-400"
                    />
                  </label>
                  <button type='submit' className="bg-pri-purple-400 text-white py-2 px-4 rounded-md hover:bg-pri-purple-500 focus:outline-none focus:ring focus:border-pri-purple-400">
                    Submit
                  </button>
                </form>


                <div
                  className="relative leading-[20px] font-medium inline-block w-[832px]"
                  style={noCreditCardStyle}
                >
                  *No credit card required
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type04BreakpointDesktop1;
