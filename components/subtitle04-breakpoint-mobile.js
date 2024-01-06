import { useMemo } from "react";
import TypeGreySizeMediumState from "./type-grey-size-medium-state";

const Subtitle04BreakpointMobile = ({
  title,
  text,
  arrowRight,
  subtitle04BreakpointMobilWidth,
  subtitle04BreakpointMobilGap,
  contentGap,
  titleFontSize,
  titleLineHeight,
  paraTextAlignSelf,
  paraTextWidth,
  paraTextFontSize,
  paraTextLineHeight,
  baseButtonsGap,
  textFontSize,
  textLineHeight,
  arrowRightIconWidth,
  arrowRightIconHeight,
}) => {
  const subtitle04BreakpointMobileStyle = useMemo(() => {
    return {
      width: subtitle04BreakpointMobilWidth,
      gap: subtitle04BreakpointMobilGap,
    };
  }, [subtitle04BreakpointMobilWidth, subtitle04BreakpointMobilGap]);

  const content3Style = useMemo(() => {
    return {
      gap: contentGap,
    };
  }, [contentGap]);

  const title1Style = useMemo(() => {
    return {
      fontSize: titleFontSize,
      lineHeight: titleLineHeight,
    };
  }, [titleFontSize, titleLineHeight]);

  const paraText1Style = useMemo(() => {
    return {
      alignSelf: paraTextAlignSelf,
      width: paraTextWidth,
      fontSize: paraTextFontSize,
      lineHeight: paraTextLineHeight,
    };
  }, [paraTextAlignSelf, paraTextWidth, paraTextFontSize, paraTextLineHeight]);

  const sizeMediumIconLaggingStyle = useMemo(() => {
    return {
      gap: baseButtonsGap,
    };
  }, [baseButtonsGap]);

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

  return (
    <div
      className="w-[343px] flex flex-col items-center justify-start gap-[32px] text-center text-13xl text-gray font-h700-62-semibold"
      style={subtitle04BreakpointMobileStyle}
    >
      <div
        className="self-stretch flex flex-col items-center justify-center gap-[16px]"
        style={content3Style}
      >
        <div
          className="self-stretch relative leading-[40px] font-semibold"
          style={title1Style}
        >
          {title}
        </div>
        <div
          className="self-stretch relative text-lg leading-[28px] font-h05-12-medium text-neutral-400"
          style={paraText1Style}
        >
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <TypeGreySizeMediumState
          text="View component library"
          zap="/arrowright@2x.png"
          typeGreySizeMediumStateAlignItems="flex-start"
          typeGreySizeMediumStateJustifyContent="flex-start"
          typeGreySizeMediumStateFlexShrink="0"
          baseButtonsBackgroundColor="unset"
          baseButtonsPadding="unset"
          baseButtonsBoxSizing="unset"
          textColor="#582066"
          textLineHeight="20px"
          zapIconWidth="20px"
          zapIconHeight="20px"
          typeGreySizeMediumStateAlignSelf="unset"
          typeGreySizeMediumStateFlex="unset"
          typeGreySizeMediumStateGap="8px"
          baseButtonsFontSize="16px"
        />
      </div>
    </div>
  );
};

export default Subtitle04BreakpointMobile;
