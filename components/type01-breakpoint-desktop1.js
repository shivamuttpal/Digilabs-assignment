import { useMemo } from "react";

const Type01BreakpointDesktop1 = ({
  number,
  title,
  type01BreakpointDesktopFlexShrink,
  contentWidth,
  numberLineHeight,
  contentWidth1,
  titleLineHeight,
  titleWidth,
  paraTextLineHeight,
  paraTextWidth,
  type01BreakpointDesktopAlignSelf,
  type01BreakpointDesktopPadding,
  contentAlignSelf,
  contentJustifyContent,
  contentGap,
  numberFontSize,
  contentAlignSelf1,
  contentGap1,
  titleAlignSelf,
  titleFontSize,
  paraTextAlignSelf,
  paraTextFontSize,
}) => {
  const type01BreakpointDesktop1Style = useMemo(() => {
    return {
      flexShrink: type01BreakpointDesktopFlexShrink,
      alignSelf: type01BreakpointDesktopAlignSelf,
      padding: type01BreakpointDesktopPadding,
    };
  }, [
    type01BreakpointDesktopFlexShrink,
    type01BreakpointDesktopAlignSelf,
    type01BreakpointDesktopPadding,
  ]);

  const content29Style = useMemo(() => {
    return {
      width: contentWidth,
      alignSelf: contentAlignSelf,
      justifyContent: contentJustifyContent,
      gap: contentGap,
    };
  }, [contentWidth, contentAlignSelf, contentJustifyContent, contentGap]);

  const numberStyle = useMemo(() => {
    return {
      lineHeight: numberLineHeight,
      fontSize: numberFontSize,
    };
  }, [numberLineHeight, numberFontSize]);

  const content30Style = useMemo(() => {
    return {
      width: contentWidth1,
      alignSelf: contentAlignSelf1,
      gap: contentGap1,
    };
  }, [contentWidth1, contentAlignSelf1, contentGap1]);

  const title3Style = useMemo(() => {
    return {
      lineHeight: titleLineHeight,
      width: titleWidth,
      alignSelf: titleAlignSelf,
      fontSize: titleFontSize,
    };
  }, [titleLineHeight, titleWidth, titleAlignSelf, titleFontSize]);

  const paraText3Style = useMemo(() => {
    return {
      lineHeight: paraTextLineHeight,
      width: paraTextWidth,
      alignSelf: paraTextAlignSelf,
      fontSize: paraTextFontSize,
    };
  }, [paraTextLineHeight, paraTextWidth, paraTextAlignSelf, paraTextFontSize]);

  return (
    <div
      className="flex flex-col items-center justify-center p-4 text-center text-29xl text-pri-purple-400 font-h700-62-semibold"
      style={type01BreakpointDesktop1Style}
    >
      <div
        className="w-[248px] flex flex-col items-center justify-center gap-[16px]"
        style={content29Style}
      >
        <div
          className="self-stretch relative leading-[56px] font-semibold"
          style={numberStyle}
        >
          {number}
        </div>
        <div
          className="w-[248px] flex flex-col items-start justify-start gap-[8px] text-base text-gray font-h05-12-medium"
          style={content30Style}
        >
          <div
            className="relative leading-[20px] font-medium inline-block w-[248px]"
            style={title3Style}
          >
            {title}
          </div>
          <div
            className="relative leading-[28px] text-neutral-400 inline-block w-[248px]"
            style={paraText3Style}
          >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type01BreakpointDesktop1;
