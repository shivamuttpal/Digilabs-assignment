import { useMemo } from "react";
import Subtitle04BreakpointMobile from "./subtitle04-breakpoint-mobile";
import Type04BreakpointDesktop from "./type04-breakpoint-desktop";

const Type01BreakpointTablet2 = ({
  title,
  text,
  arrowRight,
  dollarSign,
  heading,
  dollarSign1,
  heading1,
  dollarSign2,
  heading2,
  type01BreakpointTabletWidth,
  type01BreakpointTabletPadding,
  type01BreakpointTabletFlexShrink,
  containerWidth,
  containerPadding,
  rowWidth,
  rowGap,
  subtitleCentreAlignWidth,
  subtitleCentreAlignGap,
  contentGap,
  titleFontSize,
  titleLineHeight,
  paraTextFontSize,
  paraTextLineHeight,
  paraTextWidth,
  baseButtonsGap,
  textFontSize,
  textLineHeight,
  arrowRightIconWidth,
  arrowRightIconHeight,
  columnWidth,
  columnGap,
  columns01Padding,
  contentGap1,
  bigIconsPadding,
  dollarSignIconWidth,
  dollarSignIconHeight,
  contentGap2,
  headingFontSize,
  headingLineHeight,
  headingWidth,
  descriptionFontSize,
  descriptionLineHeight,
  descriptionWidth,
  columns02Padding,
  contentGap3,
  bigIconsPadding1,
  dollarSignIconWidth1,
  dollarSignIconHeight1,
  contentGap4,
  headingFontSize1,
  headingLineHeight1,
  headingWidth1,
  descriptionFontSize1,
  descriptionLineHeight1,
  descriptionWidth1,
  columns03Padding,
  contentGap5,
  bigIconsPadding2,
  dollarSignIconWidth2,
  dollarSignIconHeight2,
  contentGap6,
  headingFontSize2,
  headingLineHeight2,
  headingWidth2,
  descriptionFontSize2,
  descriptionLineHeight2,
  descriptionWidth2,
}) => {
  const type01BreakpointTabletStyle = useMemo(() => {
    return {
      width: type01BreakpointTabletWidth,
      padding: type01BreakpointTabletPadding,
      flexShrink: type01BreakpointTabletFlexShrink,
    };
  }, [
    type01BreakpointTabletWidth,
    type01BreakpointTabletPadding,
    type01BreakpointTabletFlexShrink,
  ]);

  const container2Style = useMemo(() => {
    return {
      width: containerWidth,
      padding: containerPadding,
    };
  }, [containerWidth, containerPadding]);

  const row2Style = useMemo(() => {
    return {
      width: rowWidth,
      gap: rowGap,
    };
  }, [rowWidth, rowGap]);

  const subtitle04BreakpointMobileStyle = useMemo(() => {
    return {
      width: subtitleCentreAlignWidth,
      gap: subtitleCentreAlignGap,
    };
  }, [subtitleCentreAlignWidth, subtitleCentreAlignGap]);

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
      fontSize: paraTextFontSize,
      lineHeight: paraTextLineHeight,
      width: paraTextWidth,
    };
  }, [paraTextFontSize, paraTextLineHeight, paraTextWidth]);

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

  const columnStyle = useMemo(() => {
    return {
      width: columnWidth,
      gap: columnGap,
    };
  }, [columnWidth, columnGap]);

  const type04BreakpointDesktopStyle = useMemo(() => {
    return {
      padding: columns01Padding,
    };
  }, [columns01Padding]);

  const content4Style = useMemo(() => {
    return {
      gap: contentGap1,
    };
  }, [contentGap1]);

  const modeLightSizeLargeStyle = useMemo(() => {
    return {
      padding: bigIconsPadding,
    };
  }, [bigIconsPadding]);

  const dollarSignIconStyle = useMemo(() => {
    return {
      width: dollarSignIconWidth,
      height: dollarSignIconHeight,
    };
  }, [dollarSignIconWidth, dollarSignIconHeight]);

  const content5Style = useMemo(() => {
    return {
      gap: contentGap2,
    };
  }, [contentGap2]);

  const headingStyle = useMemo(() => {
    return {
      fontSize: headingFontSize,
      lineHeight: headingLineHeight,
      width: headingWidth,
    };
  }, [headingFontSize, headingLineHeight, headingWidth]);

  const descriptionStyle = useMemo(() => {
    return {
      fontSize: descriptionFontSize,
      lineHeight: descriptionLineHeight,
      width: descriptionWidth,
    };
  }, [descriptionFontSize, descriptionLineHeight, descriptionWidth]);

  const type04BreakpointDesktopStyle1 = useMemo(() => {
    return {
      padding: columns02Padding,
    };
  }, [columns02Padding]);

  const content4Style1 = useMemo(() => {
    return {
      gap: contentGap3,
    };
  }, [contentGap3]);

  const modeLightSizeLargeStyle1 = useMemo(() => {
    return {
      padding: bigIconsPadding1,
    };
  }, [bigIconsPadding1]);

  const dollarSignIconStyle1 = useMemo(() => {
    return {
      width: dollarSignIconWidth1,
      height: dollarSignIconHeight1,
    };
  }, [dollarSignIconWidth1, dollarSignIconHeight1]);

  const content5Style1 = useMemo(() => {
    return {
      gap: contentGap4,
    };
  }, [contentGap4]);

  const headingStyle1 = useMemo(() => {
    return {
      fontSize: headingFontSize1,
      lineHeight: headingLineHeight1,
      width: headingWidth1,
    };
  }, [headingFontSize1, headingLineHeight1, headingWidth1]);

  const descriptionStyle1 = useMemo(() => {
    return {
      fontSize: descriptionFontSize1,
      lineHeight: descriptionLineHeight1,
      width: descriptionWidth1,
    };
  }, [descriptionFontSize1, descriptionLineHeight1, descriptionWidth1]);

  const type04BreakpointDesktopStyle2 = useMemo(() => {
    return {
      padding: columns03Padding,
    };
  }, [columns03Padding]);

  const content4Style2 = useMemo(() => {
    return {
      gap: contentGap5,
    };
  }, [contentGap5]);

  const modeLightSizeLargeStyle2 = useMemo(() => {
    return {
      padding: bigIconsPadding2,
    };
  }, [bigIconsPadding2]);

  const dollarSignIconStyle2 = useMemo(() => {
    return {
      width: dollarSignIconWidth2,
      height: dollarSignIconHeight2,
    };
  }, [dollarSignIconWidth2, dollarSignIconHeight2]);

  const content5Style2 = useMemo(() => {
    return {
      gap: contentGap6,
    };
  }, [contentGap6]);

  const headingStyle2 = useMemo(() => {
    return {
      fontSize: headingFontSize2,
      lineHeight: headingLineHeight2,
      width: headingWidth2,
    };
  }, [headingFontSize2, headingLineHeight2, headingWidth2]);

  const descriptionStyle2 = useMemo(() => {
    return {
      fontSize: descriptionFontSize2,
      lineHeight: descriptionLineHeight2,
      width: descriptionWidth2,
    };
  }, [descriptionFontSize2, descriptionLineHeight2, descriptionWidth2]);

  return (
    <div
      className="bg-white w-[768px] flex flex-row items-center justify-center py-24 px-8 box-border"
      style={type01BreakpointTabletStyle}
    >
      <div
        className="w-[704px] shrink-0 flex flex-row items-center justify-center py-0 px-8 box-border"
        style={container2Style}
      >
        <div
          className="w-[640px] flex flex-col items-center justify-start gap-[48px]"
          style={row2Style}
        >
          <Subtitle04BreakpointMobile
            title="Bring your ideas to life with our professional designs"
            text="View component library"
            arrowRight="/arrowright@2x.png"
            subtitle04BreakpointMobilWidth="640px"
            subtitle04BreakpointMobilGap="32px"
            contentGap="16px"
            titleFontSize="40px"
            titleLineHeight="48px"
            paraTextAlignSelf="unset"
            paraTextWidth="576px"
            paraTextFontSize="18px"
            paraTextLineHeight="28px"
            baseButtonsGap="8px"
            textFontSize="16px"
            textLineHeight="20px"
            arrowRightIconWidth="20px"
            arrowRightIconHeight="20px"
          />
          <div
            className="w-[640px] flex flex-col items-center justify-center gap-[32px]"
            style={columnStyle}
          >
            <Type04BreakpointDesktop
              dollarSign="/dollarsign@2x.png"
              heading="Design workflow"
              type04BreakpointDesktopFlexShrink="unset"
              dollarSignIconWidth="24px"
              dollarSignIconHeight="24px"
              headingLineHeight="20px"
              headingWidth="352px"
              descriptionLineHeight="24px"
              descriptionWidth="320px"
              type04BreakpointDesktopAlignSelf="stretch"
              type04BreakpointDesktopWidth="unset"
              type04BreakpointDesktopPadding="16px"
              contentFlexShrink="unset"
              contentWidth="unset"
              contentGap="16px"
              type04BreakpointDesktopBoxSizing="border-box"
              type04BreakpointDesktopFlexShrink="0"
              type04BreakpointDesktopPadding1="16px"
              contentFlexShrink1="0"
              contentWidth1="unset"
              contentGap1="16px"
              headingAlignSelf="unset"
              headingFontSize="16px"
              descriptionFontSize="14px"
            />
            <Type04BreakpointDesktop
              dollarSign="/dollarsign@2x.png"
              heading="Design workflow"
              type04BreakpointDesktopFlexShrink="unset"
              dollarSignIconWidth="24px"
              dollarSignIconHeight="24px"
              headingLineHeight="20px"
              headingWidth="352px"
              descriptionLineHeight="24px"
              descriptionWidth="320px"
              type04BreakpointDesktopAlignSelf="stretch"
              type04BreakpointDesktopWidth="unset"
              type04BreakpointDesktopPadding="16px"
              contentFlexShrink="unset"
              contentWidth="unset"
              contentGap="16px"
              type04BreakpointDesktopBoxSizing="border-box"
              type04BreakpointDesktopFlexShrink="0"
              type04BreakpointDesktopPadding1="16px"
              contentFlexShrink1="0"
              contentWidth1="unset"
              contentGap1="16px"
              headingAlignSelf="unset"
              headingFontSize="16px"
              descriptionFontSize="14px"
            />
            <Type04BreakpointDesktop
              dollarSign="/dollarsign@2x.png"
              heading="Design workflow"
              type04BreakpointDesktopFlexShrink="unset"
              dollarSignIconWidth="24px"
              dollarSignIconHeight="24px"
              headingLineHeight="20px"
              headingWidth="352px"
              descriptionLineHeight="24px"
              descriptionWidth="320px"
              type04BreakpointDesktopAlignSelf="stretch"
              type04BreakpointDesktopWidth="unset"
              type04BreakpointDesktopPadding="16px"
              contentFlexShrink="unset"
              contentWidth="unset"
              contentGap="16px"
              type04BreakpointDesktopBoxSizing="border-box"
              type04BreakpointDesktopFlexShrink="0"
              type04BreakpointDesktopPadding1="16px"
              contentFlexShrink1="0"
              contentWidth1="unset"
              contentGap1="16px"
              headingAlignSelf="unset"
              headingFontSize="16px"
              descriptionFontSize="14px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type01BreakpointTablet2;
