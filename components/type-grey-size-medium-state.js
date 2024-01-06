import { useMemo } from "react";
import SizeMediumIconLagging from "./size-medium-icon-lagging";

const TypeGreySizeMediumState = ({
  text,
  zap,
  typeGreySizeMediumStateAlignItems,
  typeGreySizeMediumStateJustifyContent,
  typeGreySizeMediumStateFlexShrink,
  baseButtonsBackgroundColor,
  baseButtonsPadding,
  baseButtonsBoxSizing,
  textColor,
  textLineHeight,
  zapIconWidth,
  zapIconHeight,
  typeGreySizeMediumStateAlignSelf,
  typeGreySizeMediumStateFlex,
  typeGreySizeMediumStateGap,
  baseButtonsFontSize,
}) => {
  const typeGreySizeMediumStateStyle = useMemo(() => {
    return {
      alignItems: typeGreySizeMediumStateAlignItems,
      justifyContent: typeGreySizeMediumStateJustifyContent,
      flexShrink: typeGreySizeMediumStateFlexShrink,
      alignSelf: typeGreySizeMediumStateAlignSelf,
    };
  }, [
    typeGreySizeMediumStateAlignItems,
    typeGreySizeMediumStateJustifyContent,
    typeGreySizeMediumStateFlexShrink,
    typeGreySizeMediumStateAlignSelf,
  ]);

  const sizeMediumIconLaggingStyle = useMemo(() => {
    return {
      backgroundColor: baseButtonsBackgroundColor,
      padding: baseButtonsPadding,
      boxSizing: baseButtonsBoxSizing,
      flex: typeGreySizeMediumStateFlex,
      gap: typeGreySizeMediumStateGap,
    };
  }, [
    baseButtonsBackgroundColor,
    baseButtonsPadding,
    baseButtonsBoxSizing,
    typeGreySizeMediumStateFlex,
    typeGreySizeMediumStateGap,
  ]);

  const textStyle = useMemo(() => {
    return {
      color: textColor,
      lineHeight: textLineHeight,
      fontSize: baseButtonsFontSize,
    };
  }, [textColor, textLineHeight, baseButtonsFontSize]);

  const zapIconStyle = useMemo(() => {
    return {
      width: zapIconWidth,
      height: zapIconHeight,
    };
  }, [zapIconWidth, zapIconHeight]);

  return (
    <div
      className="flex flex-row items-center justify-center"
      style={typeGreySizeMediumStateStyle}
    >
      <SizeMediumIconLagging
        text="Button"
        zap="/zap@2x.png"
        sizeMediumIconLaggingBackgroundColor="#eeefef"
        sizeMediumIconLaggingPadding="12px 16px"
        sizeMediumIconLaggingFlexShrink="0"
        sizeMediumIconLaggingBoxSizing="border-box"
        textColor="#5a6475"
        textLineHeight="20px"
        zapIconWidth="20px"
        zapIconHeight="20px"
        sizeMediumIconLaggingFlex="unset"
        sizeMediumIconLaggingGap="8px"
        textFontSize="16px"
      />
    </div>
  );
};

export default TypeGreySizeMediumState;
