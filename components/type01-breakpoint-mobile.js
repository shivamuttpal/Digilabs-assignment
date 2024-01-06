import { useMemo } from "react";
import TypeGreySizeMediumState from "./type-grey-size-medium-state";

const Type01BreakpointMobile = ({
  title,
  text,
  text1,
  figma,
  type01BreakpointMobilePadding,
  type01BreakpointMobileFlexShrink,
  containerWidth,
  containerGap,
  titleFontSize,
  titleLineHeight,
  actionWidth,
  actionGap,
  baseButtonsPadding,
  baseButtonsGap,
  textFontSize,
  textLineHeight,
  creditCardIconWidth,
  creditCardIconHeight,
  baseButtonsPadding1,
  baseButtonsGap1,
  textFontSize1,
  textLineHeight1,
  figmaIconWidth,
  figmaIconHeight,
}) => {
  const type01BreakpointMobile1Style = useMemo(() => {
    return {
      padding: type01BreakpointMobilePadding,
      flexShrink: type01BreakpointMobileFlexShrink,
    };
  }, [type01BreakpointMobilePadding, type01BreakpointMobileFlexShrink]);

  const container13Style = useMemo(() => {
    return {
      width: containerWidth,
      gap: containerGap,
    };
  }, [containerWidth, containerGap]);

  const title4Style = useMemo(() => {
    return {
      fontSize: titleFontSize,
      lineHeight: titleLineHeight,
    };
  }, [titleFontSize, titleLineHeight]);

  const action2Style = useMemo(() => {
    return {
      width: actionWidth,
      gap: actionGap,
    };
  }, [actionWidth, actionGap]);

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
      width: creditCardIconWidth,
      height: creditCardIconHeight,
    };
  }, [creditCardIconWidth, creditCardIconHeight]);

  const sizeMediumIconLaggingStyle1 = useMemo(() => {
    return {
      padding: baseButtonsPadding1,
      gap: baseButtonsGap1,
    };
  }, [baseButtonsPadding1, baseButtonsGap1]);

  const textStyle1 = useMemo(() => {
    return {
      fontSize: textFontSize1,
      lineHeight: textLineHeight1,
    };
  }, [textFontSize1, textLineHeight1]);

  const zapIconStyle1 = useMemo(() => {
    return {
      width: figmaIconWidth,
      height: figmaIconHeight,
    };
  }, [figmaIconWidth, figmaIconHeight]);

  return (
    <div
      className="bg-white flex flex-col items-center justify-center py-16 px-4 text-center text-13xl text-gray font-h700-62-semibold"
      style={type01BreakpointMobile1Style}
    >
      <div
        className="w-[343px] flex flex-col items-start justify-start gap-[32px]"
        style={container13Style}
      >
        <div className="self-stretch flex flex-row items-center justify-center">
          <div
            className="flex-1 relative leading-[40px] font-semibold"
            style={title4Style}
          >
            {title}
          </div>
        </div>
        <div
          className="w-[343px] flex flex-col items-center justify-start gap-[8px]"
          style={action2Style}
        >
          <TypeGreySizeMediumState
            text="Get Pro Version"
            zap="/creditcard@2x.png"
            typeGreySizeMediumStateAlignItems="center"
            typeGreySizeMediumStateJustifyContent="center"
            typeGreySizeMediumStateFlexShrink="unset"
            baseButtonsBackgroundColor="#582066"
            baseButtonsPadding="12px 16px"
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
          <TypeGreySizeMediumState
            text="Preview in Figma"
            zap="/figma@2x.png"
            typeGreySizeMediumStateAlignItems="center"
            typeGreySizeMediumStateJustifyContent="center"
            typeGreySizeMediumStateFlexShrink="unset"
            baseButtonsBackgroundColor="#eeefef"
            baseButtonsPadding="12px 16px"
            baseButtonsBoxSizing="border-box"
            textColor="#5a6475"
            textLineHeight="20px"
            zapIconWidth="20px"
            zapIconHeight="20px"
            typeGreySizeMediumStateAlignSelf="stretch"
            typeGreySizeMediumStateFlex="1"
            typeGreySizeMediumStateGap="8px"
            baseButtonsFontSize="16px"
          />
        </div>
      </div>
    </div>
  );
};

export default Type01BreakpointMobile;
