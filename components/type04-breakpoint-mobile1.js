import { useMemo } from "react";
import TypeGreySizeMediumState from "./type-grey-size-medium-state";

const Type04BreakpointMobile1 = ({
  subHeading,
  title,
  text,
  arrowRight,
  type04BreakpointMobileWidth,
  type04BreakpointMobileHeight,
  type04BreakpointMobilePosition,
  heroSectionHeight,
  heroSectionTop,
  heroSectionBottom,
  heroSectionPadding,
  containerGap,
  contentGap,
  subHeadingFontSize,
  subHeadingLineHeight,
  subHeadingWidth,
  contentWidth,
  contentGap1,
  titleFontSize,
  titleLineHeight,
  titleWidth,
  paraTextFontSize,
  paraTextLineHeight,
  paraTextWidth,
  contentWidth1,
  contentGap2,
  actionWidth,
  baseButtonsPadding,
  baseButtonsGap,
  textFontSize,
  textLineHeight,
  arrowRightIconWidth,
  arrowRightIconHeight,
  textFontSize1,
  textLineHeight1,
  textWidth,
}) => {
  const type04BreakpointMobileStyle = useMemo(() => {
    return {
      width: type04BreakpointMobileWidth,
      height: type04BreakpointMobileHeight,
      position: type04BreakpointMobilePosition,
    };
  }, [
    type04BreakpointMobileWidth,
    type04BreakpointMobileHeight,
    type04BreakpointMobilePosition,
  ]);

  const heroSection1Style = useMemo(() => {
    return {
      height: heroSectionHeight,
      top: heroSectionTop,
      bottom: heroSectionBottom,
      padding: heroSectionPadding,
    };
  }, [
    heroSectionHeight,
    heroSectionTop,
    heroSectionBottom,
    heroSectionPadding,
  ]);

  const container7Style = useMemo(() => {
    return {
      gap: containerGap,
    };
  }, [containerGap]);

  const content26Style = useMemo(() => {
    return {
      gap: contentGap,
    };
  }, [contentGap]);

  const subHeading1Style = useMemo(() => {
    return {
      fontSize: subHeadingFontSize,
      lineHeight: subHeadingLineHeight,
      width: subHeadingWidth,
    };
  }, [subHeadingFontSize, subHeadingLineHeight, subHeadingWidth]);

  const content27Style = useMemo(() => {
    return {
      width: contentWidth,
      gap: contentGap1,
    };
  }, [contentWidth, contentGap1]);

  const title2Style = useMemo(() => {
    return {
      fontSize: titleFontSize,
      lineHeight: titleLineHeight,
      width: titleWidth,
    };
  }, [titleFontSize, titleLineHeight, titleWidth]);

  const paraText2Style = useMemo(() => {
    return {
      fontSize: paraTextFontSize,
      lineHeight: paraTextLineHeight,
      width: paraTextWidth,
    };
  }, [paraTextFontSize, paraTextLineHeight, paraTextWidth]);

  const content28Style = useMemo(() => {
    return {
      width: contentWidth1,
      gap: contentGap2,
    };
  }, [contentWidth1, contentGap2]);

  const action1Style = useMemo(() => {
    return {
      width: actionWidth,
    };
  }, [actionWidth]);

  const sizeMediumIconLaggingStyle = useMemo(() => {
    return {
      padding: baseButtonsPadding,
      gap: baseButtonsGap,
    };
  }, [baseButtonsPadding, baseButtonsGap]);

  const textStyle = useMemo(() => {
    return {
      fontSize: textFontSize,
      lineHeight: textLineHeight,
    };
  }, [textFontSize, textLineHeight]);

  const zapIconStyle = useMemo(() => {
    return {
      width: arrowRightIconWidth,
      height: arrowRightIconHeight,
    };
  }, [arrowRightIconWidth, arrowRightIconHeight]);

  const text2Style = useMemo(() => {
    return {
      fontSize: textFontSize1,
      lineHeight: textLineHeight1,
      width: textWidth,
    };
  }, [textFontSize1, textLineHeight1, textWidth]);

  return (
    <div
      className="w-[375px] h-[476px] text-center text-base text-pri-purple-400 font-h05-12-medium"
      style={type04BreakpointMobileStyle}
    >
      <img
        className="absolute h-[42.02%] w-[91.47%] top-[14.5%] right-[4.27%] bottom-[43.49%] left-[4.27%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/mesh@2x.png"
      />
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-center pt-16 px-4 pb-8 box-border"
        style={heroSection1Style}
      >
        <div
          className="shrink-0 flex flex-col items-center justify-center gap-[32px]"
          style={container7Style}
        >
          <div
            className="shrink-0 flex flex-col items-center justify-start gap-[16px]"
            style={content26Style}
          >
            <div
              className="relative leading-[20px] font-medium inline-block w-[343px]"
              style={subHeading1Style}
            >
              {subHeading}
            </div>
            <div
              className="w-[343px] flex flex-col items-start justify-start gap-[16px] text-21xl text-gray font-h700-62-semibold"
              style={content27Style}
            >
              <div
                className="relative leading-[48px] font-semibold inline-block w-[343px]"
                style={title2Style}
              >
                {title}
              </div>
              <div
                className="relative text-lg leading-[28px] font-h05-12-medium text-neutral-400 inline-block w-[343px]"
                style={paraText2Style}
              >
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud
              </div>
            </div>
          </div>
          <div
            className="w-[343px] flex flex-col items-center justify-start gap-[16px] text-sm text-neutral-400"
            style={content28Style}
          >
            <div
              className="w-[343px] flex flex-col items-center justify-center"
              style={action1Style}
            >
              <TypeGreySizeMediumState
                text="Get started for free"
                zap="/arrowright@2x.png"
                typeGreySizeMediumStateAlignItems="center"
                typeGreySizeMediumStateJustifyContent="center"
                typeGreySizeMediumStateFlexShrink="unset"
                baseButtonsBackgroundColor="#582066"
                baseButtonsPadding="16px"
                baseButtonsBoxSizing="border-box"
                textColor="#fff"
                textLineHeight="20px"
                zapIconWidth="20px"
                zapIconHeight="20px"
                typeGreySizeMediumStateAlignSelf="stretch"
                typeGreySizeMediumStateFlex="1"
                typeGreySizeMediumStateGap="8px"
                baseButtonsFontSize="16px"
              />
            </div>
            <div
              className="relative leading-[20px] font-medium inline-block w-[343px]"
              style={text2Style}
            >
              *No credit card required
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type04BreakpointMobile1;
