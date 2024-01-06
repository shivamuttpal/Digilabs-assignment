import { useMemo } from "react";
import Subtitle04BreakpointDeskto from "./subtitle04-breakpoint-deskto";
import Type04BreakpointDesktop from "./type04-breakpoint-desktop";

const Type01BreakpointDesktop3 = ({
  title,
  text,
  arrowRight,
  dollarSign,
  heading,
  dollarSign1,
  heading1,
  dollarSign2,
  heading2,
  type01BreakpointDesktopWidth,
  containerWidth,
  containerPadding,
  rowWidth,
  subtitleCentreAlignWidth,
  contentWidth,
  contentWidth1,
  titleLineHeight,
  paraTextLineHeight,
  paraTextWidth,
  textLineHeight,
  arrowRightIconWidth,
  arrowRightIconHeight,
  dollarSignIconWidth,
  dollarSignIconHeight,
  headingLineHeight,
  headingWidth,
  descriptionLineHeight,
  descriptionWidth,
  dollarSignIconWidth1,
  dollarSignIconHeight1,
  headingLineHeight1,
  headingWidth1,
  descriptionLineHeight1,
  descriptionWidth1,
  dollarSignIconWidth2,
  dollarSignIconHeight2,
  headingLineHeight2,
  headingWidth2,
  descriptionLineHeight2,
  descriptionWidth2,
}) => {
  const type01BreakpointDesktop3Style = useMemo(() => {
    return {
      width: type01BreakpointDesktopWidth,
    };
  }, [type01BreakpointDesktopWidth]);

  const container21Style = useMemo(() => {
    return {
      width: containerWidth,
      padding: containerPadding,
    };
  }, [containerWidth, containerPadding]);

  const row10Style = useMemo(() => {
    return {
      width: rowWidth,
    };
  }, [rowWidth]);

  const subtitle04BreakpointDesktoStyle = useMemo(() => {
    return {
      width: subtitleCentreAlignWidth,
    };
  }, [subtitleCentreAlignWidth]);

  const content60Style = useMemo(() => {
    return {
      width: contentWidth,
    };
  }, [contentWidth]);

  const content59Style = useMemo(() => {
    return {
      width: contentWidth1,
    };
  }, [contentWidth1]);

  const title6Style = useMemo(() => {
    return {
      lineHeight: titleLineHeight,
    };
  }, [titleLineHeight]);

  const paraText4Style = useMemo(() => {
    return {
      lineHeight: paraTextLineHeight,
      width: paraTextWidth,
    };
  }, [paraTextLineHeight, paraTextWidth]);

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
    };
  }, [headingLineHeight, headingWidth]);

  const descriptionStyle = useMemo(() => {
    return {
      lineHeight: descriptionLineHeight,
      width: descriptionWidth,
    };
  }, [descriptionLineHeight, descriptionWidth]);

  const dollarSignIconStyle1 = useMemo(() => {
    return {
      width: dollarSignIconWidth1,
      height: dollarSignIconHeight1,
    };
  }, [dollarSignIconWidth1, dollarSignIconHeight1]);

  const headingStyle1 = useMemo(() => {
    return {
      lineHeight: headingLineHeight1,
      width: headingWidth1,
    };
  }, [headingLineHeight1, headingWidth1]);

  const descriptionStyle1 = useMemo(() => {
    return {
      lineHeight: descriptionLineHeight1,
      width: descriptionWidth1,
    };
  }, [descriptionLineHeight1, descriptionWidth1]);

  const dollarSignIconStyle2 = useMemo(() => {
    return {
      width: dollarSignIconWidth2,
      height: dollarSignIconHeight2,
    };
  }, [dollarSignIconWidth2, dollarSignIconHeight2]);

  const headingStyle2 = useMemo(() => {
    return {
      lineHeight: headingLineHeight2,
      width: headingWidth2,
    };
  }, [headingLineHeight2, headingWidth2]);

  const descriptionStyle2 = useMemo(() => {
    return {
      lineHeight: descriptionLineHeight2,
      width: descriptionWidth2,
    };
  }, [descriptionLineHeight2, descriptionWidth2]);

  return (
    <div
      className="bg-white w-[1440px] flex flex-col items-center justify-center py-24 px-20 box-border"
      style={type01BreakpointDesktop3Style}
    >
      <div
        className="w-[1280px] flex flex-col items-center justify-center py-0 px-8 box-border"
        style={container21Style}
      >
        <div
          className="w-[1216px] flex flex-col items-center justify-center gap-[96px]"
          style={row10Style}
        >
          <Subtitle04BreakpointDeskto
            title="Bring your ideas to life with our professional designs"
            text="View component library"
            arrowRight="/arrowright@2x.png"
            subtitle04BreakpointDesktWidth="1216px"
            contentWidth="704px"
            contentWidth1="704px"
            titleLineHeight="48px"
            paraTextLineHeight="28px"
            paraTextWidth="576px"
            actionFlexShrink="unset"
            textLineHeight="20px"
            arrowRightIconWidth="20px"
            arrowRightIconHeight="20px"
          />
          <div className="flex flex-row items-center justify-start gap-[32px]">
            <Type04BreakpointDesktop
              dollarSign="/dollarsign@2x.png"
              heading="Design workflow"
              type04BreakpointDesktopFlexShrink="0"
              dollarSignIconWidth="24px"
              dollarSignIconHeight="24px"
              headingLineHeight="20px"
              headingWidth="352px"
              descriptionLineHeight="24px"
              descriptionWidth="320px"
              type04BreakpointDesktopAlignSelf="unset"
              type04BreakpointDesktopWidth="unset"
              type04BreakpointDesktopPadding="16px"
              contentFlexShrink="0"
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
              type04BreakpointDesktopFlexShrink="0"
              dollarSignIconWidth="24px"
              dollarSignIconHeight="24px"
              headingLineHeight="20px"
              headingWidth="352px"
              descriptionLineHeight="24px"
              descriptionWidth="320px"
              type04BreakpointDesktopAlignSelf="unset"
              type04BreakpointDesktopWidth="unset"
              type04BreakpointDesktopPadding="16px"
              contentFlexShrink="0"
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
              type04BreakpointDesktopFlexShrink="0"
              dollarSignIconWidth="24px"
              dollarSignIconHeight="24px"
              headingLineHeight="20px"
              headingWidth="352px"
              descriptionLineHeight="24px"
              descriptionWidth="320px"
              type04BreakpointDesktopAlignSelf="unset"
              type04BreakpointDesktopWidth="unset"
              type04BreakpointDesktopPadding="16px"
              contentFlexShrink="0"
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

export default Type01BreakpointDesktop3;
