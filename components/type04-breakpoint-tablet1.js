import { useMemo } from "react";
import TypeGreySizeMediumState from "./type-grey-size-medium-state";

const Type04BreakpointTablet1 = ({
  subHeading,
  title,
  text,
  arrowRight,
  type04BreakpointTabletWidth,
  type04BreakpointTabletHeight,
  type04BreakpointTabletPosition,
  heroSectionHeight,
  heroSectionTop,
  heroSectionBottom,
  heroSectionPadding,
  containerPadding,
  rowGap,
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
  const type04BreakpointTabletStyle = useMemo(() => {
    return {
      width: type04BreakpointTabletWidth,
      height: type04BreakpointTabletHeight,
      position: type04BreakpointTabletPosition,
    };
  }, [
    type04BreakpointTabletWidth,
    type04BreakpointTabletHeight,
    type04BreakpointTabletPosition,
  ]);

  const heroSectionStyle = useMemo(() => {
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

  const containerStyle = useMemo(() => {
    return {
      padding: containerPadding,
    };
  }, [containerPadding]);

  const rowStyle = useMemo(() => {
    return {
      gap: rowGap,
    };
  }, [rowGap]);

  const contentStyle = useMemo(() => {
    return {
      gap: contentGap,
    };
  }, [contentGap]);

  const subHeadingStyle = useMemo(() => {
    return {
      fontSize: subHeadingFontSize,
      lineHeight: subHeadingLineHeight,
      width: subHeadingWidth,
    };
  }, [subHeadingFontSize, subHeadingLineHeight, subHeadingWidth]);

  const content1Style = useMemo(() => {
    return {
      width: contentWidth,
      gap: contentGap1,
    };
  }, [contentWidth, contentGap1]);

  const titleStyle = useMemo(() => {
    return {
      fontSize: titleFontSize,
      lineHeight: titleLineHeight,
      width: titleWidth,
    };
  }, [titleFontSize, titleLineHeight, titleWidth]);

  const paraTextStyle = useMemo(() => {
    return {
      fontSize: paraTextFontSize,
      lineHeight: paraTextLineHeight,
      width: paraTextWidth,
    };
  }, [paraTextFontSize, paraTextLineHeight, paraTextWidth]);

  const content2Style = useMemo(() => {
    return {
      width: contentWidth1,
      gap: contentGap2,
    };
  }, [contentWidth1, contentGap2]);

  const actionStyle = useMemo(() => {
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

  const text1Style = useMemo(() => {
    return {
      fontSize: textFontSize1,
      lineHeight: textLineHeight1,
      width: textWidth,
    };
  }, [textFontSize1, textLineHeight1, textWidth]);

  return (
    <div
      className="w-[768px] h-[560px] text-center text-base text-pri-purple-400 font-h05-12-medium"
      style={type04BreakpointTabletStyle}
    >
      <img
        className="absolute h-[70.36%] w-[70.05%] top-[16.79%] right-[14.97%] bottom-[12.86%] left-[14.97%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/mesh@2x.png"
      />
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-center justify-center pt-32 px-8 pb-8 box-border"
        style={heroSectionStyle}
      >
        <div
          className="shrink-0 flex flex-col items-center justify-center py-0 px-8"
          style={containerStyle}
        >
          <div
            className="shrink-0 flex flex-col items-center justify-start gap-[32px]"
            style={rowStyle}
          >
            <div
              className="shrink-0 flex flex-col items-start justify-start gap-[16px]"
              style={contentStyle}
            >
              <div
                className="relative leading-[20px] font-medium inline-block w-[640px]"
                style={subHeadingStyle}
              >
                {subHeading}
              </div>
              <div
                className="w-[640px] flex flex-col items-center justify-start gap-[16px] text-43xl text-gray font-h700-62-semibold"
                style={content1Style}
              >
                <div
                  className="relative leading-[72px] font-semibold inline-block w-[640px]"
                  style={titleStyle}
                >
                  {title}
                </div>
                <div
                  className="relative text-lg leading-[28px] font-h05-12-medium text-neutral-400 inline-block w-[576px]"
                  style={paraTextStyle}
                >
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud
                </div>
              </div>
            </div>
            <div
              className="w-[640px] flex flex-col items-center justify-start gap-[16px] text-sm text-neutral-400"
              style={content2Style}
            >
              <div
                className="w-[640px] flex flex-row items-center justify-center"
                style={actionStyle}
              >
                <TypeGreySizeMediumState
                  text="Get started for free"
                  zap="/arrowright@2x.png"
                  typeGreySizeMediumStateAlignItems="center"
                  typeGreySizeMediumStateJustifyContent="center"
                  typeGreySizeMediumStateFlexShrink="0"
                  baseButtonsBackgroundColor="#582066"
                  baseButtonsPadding="16px"
                  baseButtonsBoxSizing="border-box"
                  textColor="#fff"
                  textLineHeight="20px"
                  zapIconWidth="20px"
                  zapIconHeight="20px"
                  typeGreySizeMediumStateAlignSelf="unset"
                  typeGreySizeMediumStateFlex="unset"
                  typeGreySizeMediumStateGap="8px"
                  baseButtonsFontSize="16px"
                />
              </div>
              <div
                className="relative leading-[20px] font-medium inline-block w-[640px]"
                style={text1Style}
              >
                *No credit card required
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type04BreakpointTablet1;
