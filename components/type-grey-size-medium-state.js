import { useEffect, useMemo, useState } from "react";

import SizeMediumIconLagging from "./size-medium-icon-lagging";

const TypeGreySizeMediumState = ({
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

  // ... rest of your code ...

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
