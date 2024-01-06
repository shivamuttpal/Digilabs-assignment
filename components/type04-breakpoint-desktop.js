import { useMemo } from "react";
import ModeLightSizeLarge from "./mode-light-size-large";

const Type04BreakpointDesktop = ({
  dollarSign,
  heading,
  dollarSignIconWidth,
  dollarSignIconHeight,
  headingLineHeight,
  headingWidth,
  descriptionLineHeight,
  descriptionWidth,
  type04BreakpointDesktopAlignSelf,
  type04BreakpointDesktopWidth,
  type04BreakpointDesktopPadding,
  contentFlexShrink,
  contentWidth,
  contentGap,
  type04BreakpointDesktopBoxSizing,
  type04BreakpointDesktopFlexShrink,
  type04BreakpointDesktopPadding1,
  contentFlexShrink1,
  contentWidth1,
  contentGap1,
  headingAlignSelf,
  headingFontSize,
  descriptionFontSize,
}) => {
  const dollarSignIconStyle = useMemo(() => {
    return {
      width: dollarSignIconWidth,
      height: dollarSignIconHeight,
    };
  }, [dollarSignIconWidth, dollarSignIconHeight]);

  const headingStyle = useMemo(() => {
    return {
      lineHeight: headingLineHeight,
      width: headingWidth,
      alignSelf: headingAlignSelf,
      fontSize: headingFontSize,
    };
  }, [headingLineHeight, headingWidth, headingAlignSelf, headingFontSize]);

  const descriptionStyle = useMemo(() => {
    return {
      lineHeight: descriptionLineHeight,
      width: descriptionWidth,
      fontSize: descriptionFontSize,
    };
  }, [descriptionLineHeight, descriptionWidth, descriptionFontSize]);

  const type04BreakpointDesktopStyle = useMemo(() => {
    return {
      alignSelf: type04BreakpointDesktopAlignSelf,
      width: type04BreakpointDesktopWidth,
      padding: type04BreakpointDesktopPadding,
      flexShrink: type04BreakpointDesktopFlexShrink,
    };
  }, [
    type04BreakpointDesktopAlignSelf,
    type04BreakpointDesktopWidth,
    type04BreakpointDesktopPadding,
    type04BreakpointDesktopFlexShrink,
  ]);

  const content4Style = useMemo(() => {
    return {
      flexShrink: contentFlexShrink,
      width: contentWidth,
      gap: contentGap,
    };
  }, [contentFlexShrink, contentWidth, contentGap]);

  const modeLightSizeLargeStyle = useMemo(() => {
    return {
      boxSizing: type04BreakpointDesktopBoxSizing,
      padding: type04BreakpointDesktopPadding1,
    };
  }, [type04BreakpointDesktopBoxSizing, type04BreakpointDesktopPadding1]);

  const content5Style = useMemo(() => {
    return {
      flexShrink: contentFlexShrink1,
      width: contentWidth1,
      gap: contentGap1,
    };
  }, [contentFlexShrink1, contentWidth1, contentGap1]);

  return (
    <div
      className="flex flex-col items-center justify-center p-4 text-center text-base text-gray font-h05-12-medium"
      style={type04BreakpointDesktopStyle}
    >
      <div
        className="shrink-0 flex flex-col items-center justify-start gap-[16px]"
        style={content4Style}
      >
        <ModeLightSizeLarge
          dollarSign="/dollarsign@2x.png"
          modeLightSizeLargeFlexShrink="0"
          dollarSignIconWidth="24px"
          dollarSignIconHeight="24px"
          modeLightSizeLargeBoxSizing="border-box"
          modeLightSizeLargePadding="16px"
        />
        <div
          className="shrink-0 flex flex-col items-center justify-start gap-[16px]"
          style={content5Style}
        >
          <div
            className="relative leading-[20px] font-medium inline-block w-[352px]"
            style={headingStyle}
          >
            {heading}
          </div>
          <div
            className="relative text-sm leading-[24px] font-medium text-neutral-400 inline-block w-80"
            style={descriptionStyle}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod `}</div>
        </div>
      </div>
    </div>
  );
};

export default Type04BreakpointDesktop;
