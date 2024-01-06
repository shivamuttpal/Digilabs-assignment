import { useMemo } from "react";
import TypeGreySizeMediumState from "./type-grey-size-medium-state";

const Type04BreakpointDesktop1 = ({
  subHeading,
  title,
  text,
  arrowRight,
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

  const zapIconStyle = useMemo(() => {
    return {
      width: arrowRightIconWidth,
      height: arrowRightIconHeight,
    };
  }, [arrowRightIconWidth, arrowRightIconHeight]);

  const noCreditCardStyle = useMemo(() => {
    return {
      lineHeight: noCreditCardLineHeight,
      width: noCreditCardWidth,
    };
  }, [noCreditCardLineHeight, noCreditCardWidth]);

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
                  <TypeGreySizeMediumState
                    text="Get started for free"
                    zap="/arrowright@2x.png"
                    typeGreySizeMediumStateAlignItems="center"
                    typeGreySizeMediumStateJustifyContent="center"
                    typeGreySizeMediumStateFlexShrink="0"
                    baseButtonsBackgroundColor="#582066"
                    baseButtonsPadding="16px"
                    baseButtonsBoxSizing="border-box"
                    textColor="#fff"
                    textLineHeight="20px"
                    zapIconWidth="20px"
                    zapIconHeight="20px"
                    typeGreySizeMediumStateAlignSelf="unset"
                    typeGreySizeMediumStateFlex="unset"
                    typeGreySizeMediumStateGap="8px"
                    baseButtonsFontSize="16px"
                  />
                </div>
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
