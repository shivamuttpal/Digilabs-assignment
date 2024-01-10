import { useMemo } from "react";

const SizeMediumIconLagging = ({
  text,
  zap,
  sizeMediumIconLaggingBackgroundColor,
  sizeMediumIconLaggingPadding,
  sizeMediumIconLaggingFlexShrink,
  sizeMediumIconLaggingBoxSizing,
  textColor,
  textLineHeight,
  zapIconWidth,
  zapIconHeight,
  sizeMediumIconLaggingFlex,
  sizeMediumIconLaggingGap,
  textFontSize,
}) => {
  const sizeMediumIconLaggingStyle = useMemo(() => {
    return {
      backgroundColor: sizeMediumIconLaggingBackgroundColor,
      padding: sizeMediumIconLaggingPadding,
      flexShrink: sizeMediumIconLaggingFlexShrink,
      boxSizing: sizeMediumIconLaggingBoxSizing,
      flex: sizeMediumIconLaggingFlex,
      gap: sizeMediumIconLaggingGap,
    };
  }, [
    sizeMediumIconLaggingBackgroundColor,
    sizeMediumIconLaggingPadding,
    sizeMediumIconLaggingFlexShrink,
    sizeMediumIconLaggingBoxSizing,
    sizeMediumIconLaggingFlex,
    sizeMediumIconLaggingGap,
  ]);

  const textStyle = useMemo(() => {
    return {
      color: textColor,
      lineHeight: textLineHeight,
      fontSize: textFontSize,
    };
  }, [textColor, textLineHeight, textFontSize]);

  const zapIconStyle = useMemo(() => {
    return {
      width: zapIconWidth,
      height: zapIconHeight,
    };
  }, [zapIconWidth, zapIconHeight]);
  

  return (
    <div
      className="rounded-lg bg-pri-purple-400 flex flex-row items-center justify-center py-3 px-4 gap-[8px] text-center text-base text-white font-h05-12-medium"
      style={sizeMediumIconLaggingStyle}
    >
      <div className="relative leading-[20px] font-medium" style={textStyle}>
        {text}
      </div>
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
        alt=""
        src={zap}
        style={zapIconStyle}
      />
    </div>
  );
};

export default SizeMediumIconLagging;
