import { useMemo } from "react";

const Type01BreakpointDesktop2 = ({
  frame,
  frame1,
  group12,
  type01BreakpointDesktopPosition,
  type01BreakpointDesktopFlexShrink,
  type01BreakpointDesktopWidth,
  type01BreakpointDesktopHeight,
  groupDivTop,
  groupDivLeft,
  groupDivWidth,
  groupDivHeight,
  frameDivTop,
  frameDivLeft,
  frameDivPadding,
  frameDivGap,
  frameDivGap1,
  frameDivGap2,
  spendingLineHeight,
  frameDivGap3,
  frameIconWidth,
  frameIconHeight,
  visaCardLineHeight,
  frameIconWidth1,
  frameIconHeight1,
  frameDivGap4,
  frameDivGap5,
  divLineHeight,
  uSDLineHeight,
  frameDivGap6,
  vsLastWeekLineHeight,
  lastPurchasedLineHeight,
  frameDivGap7,
  groupDivWidth1,
  groupDivHeight1,
  frameDivTop1,
  frameDivLeft1,
  frameDivPadding1,
  uSDLineHeight1,
  uSDTop,
  uSDLeft,
  uSDLineHeight2,
  uSDTop1,
  uSDLeft1,
  uSDLineHeight3,
  frameDivGap8,
  rectangleDivWidth,
  rectangleDivHeight,
  groupDivWidth2,
  groupDivHeight2,
  rectangleDivTop,
  rectangleDivLeft,
  rectangleDivWidth1,
  rectangleDivHeight1,
  rectangleDivTop1,
  rectangleDivLeft1,
  rectangleDivWidth2,
  rectangleDivHeight2,
  rectangleDivWidth3,
  rectangleDivHeight3,
  groupIconTop,
  groupIconLeft,
  groupIconWidth,
  groupIconHeight,
  frameDivBorderRadius,
  frameDivBorder,
  frameDivWidth,
  frameDivHeight,
  frameDivFlexShrink,
  spendingFontSize,
  visaCardFontSize,
  divFontSize,
  uSDFontSize,
  vsLastWeekFontSize,
  lastPurchasedFontSize,
  uSDFontSize1,
  uSDFontSize2,
  uSDFontSize3,
  rectangleDivBorderRadius,
  rectangleDivBorderRadius1,
}) => {
  const type01BreakpointDesktopStyle = useMemo(() => {
    return {
      position: type01BreakpointDesktopPosition,
      flexShrink: type01BreakpointDesktopFlexShrink,
      width: type01BreakpointDesktopWidth,
      height: type01BreakpointDesktopHeight,
    };
  }, [
    type01BreakpointDesktopPosition,
    type01BreakpointDesktopFlexShrink,
    type01BreakpointDesktopWidth,
    type01BreakpointDesktopHeight,
  ]);

  const groupDivStyle = useMemo(() => {
    return {
      top: groupDivTop,
      left: groupDivLeft,
      width: groupDivWidth,
      height: groupDivHeight,
    };
  }, [groupDivTop, groupDivLeft, groupDivWidth, groupDivHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      padding: frameDivPadding,
      borderRadius: frameDivBorderRadius,
      border: frameDivBorder,
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [
    frameDivTop,
    frameDivLeft,
    frameDivPadding,
    frameDivBorderRadius,
    frameDivBorder,
    frameDivWidth,
    frameDivHeight,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: frameDivGap,
      flexShrink: frameDivFlexShrink,
    };
  }, [frameDivGap, frameDivFlexShrink]);

  const frameDiv2Style = useMemo(() => {
    return {
      gap: frameDivGap1,
    };
  }, [frameDivGap1]);

  const frameDiv3Style = useMemo(() => {
    return {
      gap: frameDivGap2,
    };
  }, [frameDivGap2]);

  const spendingStyle = useMemo(() => {
    return {
      lineHeight: spendingLineHeight,
      fontSize: spendingFontSize,
    };
  }, [spendingLineHeight, spendingFontSize]);

  const frameDiv4Style = useMemo(() => {
    return {
      gap: frameDivGap3,
    };
  }, [frameDivGap3]);

  const frameIconStyle = useMemo(() => {
    return {
      width: frameIconWidth,
      height: frameIconHeight,
    };
  }, [frameIconWidth, frameIconHeight]);

  const visaCardStyle = useMemo(() => {
    return {
      lineHeight: visaCardLineHeight,
      fontSize: visaCardFontSize,
    };
  }, [visaCardLineHeight, visaCardFontSize]);

  const frameIcon1Style = useMemo(() => {
    return {
      width: frameIconWidth1,
      height: frameIconHeight1,
    };
  }, [frameIconWidth1, frameIconHeight1]);

  const frameDiv5Style = useMemo(() => {
    return {
      gap: frameDivGap4,
    };
  }, [frameDivGap4]);

  const frameDiv6Style = useMemo(() => {
    return {
      gap: frameDivGap5,
    };
  }, [frameDivGap5]);

  const divStyle = useMemo(() => {
    return {
      lineHeight: divLineHeight,
      fontSize: divFontSize,
    };
  }, [divLineHeight, divFontSize]);

  const uSDStyle = useMemo(() => {
    return {
      lineHeight: uSDLineHeight,
      fontSize: uSDFontSize,
    };
  }, [uSDLineHeight, uSDFontSize]);

  const frameDiv7Style = useMemo(() => {
    return {
      gap: frameDivGap6,
    };
  }, [frameDivGap6]);

  const vsLastWeekStyle = useMemo(() => {
    return {
      lineHeight: vsLastWeekLineHeight,
      fontSize: vsLastWeekFontSize,
    };
  }, [vsLastWeekLineHeight, vsLastWeekFontSize]);

  const lastPurchasedStyle = useMemo(() => {
    return {
      lineHeight: lastPurchasedLineHeight,
      fontSize: lastPurchasedFontSize,
    };
  }, [lastPurchasedLineHeight, lastPurchasedFontSize]);

  const frameDiv8Style = useMemo(() => {
    return {
      gap: frameDivGap7,
    };
  }, [frameDivGap7]);

  const groupDiv1Style = useMemo(() => {
    return {
      width: groupDivWidth1,
      height: groupDivHeight1,
    };
  }, [groupDivWidth1, groupDivHeight1]);

  const frameDiv9Style = useMemo(() => {
    return {
      top: frameDivTop1,
      left: frameDivLeft1,
      padding: frameDivPadding1,
    };
  }, [frameDivTop1, frameDivLeft1, frameDivPadding1]);

  const uSD1Style = useMemo(() => {
    return {
      lineHeight: uSDLineHeight1,
      fontSize: uSDFontSize1,
    };
  }, [uSDLineHeight1, uSDFontSize1]);

  const uSD2Style = useMemo(() => {
    return {
      top: uSDTop,
      left: uSDLeft,
      lineHeight: uSDLineHeight2,
      fontSize: uSDFontSize2,
    };
  }, [uSDTop, uSDLeft, uSDLineHeight2, uSDFontSize2]);

  const uSD3Style = useMemo(() => {
    return {
      top: uSDTop1,
      left: uSDLeft1,
      lineHeight: uSDLineHeight3,
      fontSize: uSDFontSize3,
    };
  }, [uSDTop1, uSDLeft1, uSDLineHeight3, uSDFontSize3]);

  const frameDiv10Style = useMemo(() => {
    return {
      gap: frameDivGap8,
    };
  }, [frameDivGap8]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: rectangleDivWidth,
      height: rectangleDivHeight,
      borderRadius: rectangleDivBorderRadius,
    };
  }, [rectangleDivWidth, rectangleDivHeight, rectangleDivBorderRadius]);

  const groupDiv2Style = useMemo(() => {
    return {
      width: groupDivWidth2,
      height: groupDivHeight2,
    };
  }, [groupDivWidth2, groupDivHeight2]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      top: rectangleDivTop,
      left: rectangleDivLeft,
      width: rectangleDivWidth1,
      height: rectangleDivHeight1,
    };
  }, [
    rectangleDivTop,
    rectangleDivLeft,
    rectangleDivWidth1,
    rectangleDivHeight1,
  ]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      top: rectangleDivTop1,
      left: rectangleDivLeft1,
      width: rectangleDivWidth2,
      height: rectangleDivHeight2,
    };
  }, [
    rectangleDivTop1,
    rectangleDivLeft1,
    rectangleDivWidth2,
    rectangleDivHeight2,
  ]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      width: rectangleDivWidth3,
      height: rectangleDivHeight3,
      borderRadius: rectangleDivBorderRadius1,
    };
  }, [rectangleDivWidth3, rectangleDivHeight3, rectangleDivBorderRadius1]);

  const groupIconStyle = useMemo(() => {
    return {
      top: groupIconTop,
      left: groupIconLeft,
      width: groupIconWidth,
      height: groupIconHeight,
    };
  }, [groupIconTop, groupIconLeft, groupIconWidth, groupIconHeight]);

  return (
    <div
      className="rounded-lg bg-ghostwhite w-[592px] h-[490px] overflow-hidden text-left text-lgi-5 text-gray font-h700-62-semibold"
      style={type01BreakpointDesktopStyle}
    >
      <div
        className="absolute top-[107px] left-[76px] w-[439.7px] h-[275px]"
        style={groupDivStyle}
      >
        <div
          className="absolute top-[4px] left-[31px] rounded-[12.98px] bg-white flex flex-col items-center justify-center p-[25.96825408935547px] border-[1px] border-solid border-mediumpurple"
          style={frameDivStyle}
        >
          <div
            className="shrink-0 flex flex-col items-start justify-start gap-[27.59px]"
            style={frameDiv1Style}
          >
            <div
              className="shrink-0 flex flex-row items-start justify-start gap-[219.92px]"
              style={frameDiv2Style}
            >
              <div
                className="shrink-0 flex flex-col items-start justify-start gap-[4.87px]"
                style={frameDiv3Style}
              >
                <div
                  className="relative leading-[25.97px] font-semibold"
                  style={spendingStyle}
                >
                  Spending
                </div>
                <div
                  className="shrink-0 flex flex-row items-center justify-start gap-[4.87px] text-smi text-neutral-400 font-h05-12-medium"
                  style={frameDiv4Style}
                >
                  <img
                    className="relative w-[19.5px] h-[19.5px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src={frame}
                    style={frameIconStyle}
                  />
                  <div
                    className="relative leading-[16.23px] font-medium"
                    style={visaCardStyle}
                  >
                    9349 visa card
                  </div>
                </div>
              </div>
              <img
                className="relative w-[19.5px] h-[19.5px] overflow-hidden shrink-0 object-cover"
                alt=""
                src={frame1}
                style={frameIcon1Style}
              />
            </div>
            <div
              className="shrink-0 flex flex-col items-start justify-center gap-[9.74px] text-13xl-5"
              style={frameDiv5Style}
            >
              <div
                className="shrink-0 flex flex-row items-center justify-start gap-[8.93px]"
                style={frameDiv6Style}
              >
                <div
                  className="relative leading-[38.95px] font-medium"
                  style={divStyle}
                >
                  127.14
                </div>
                <div
                  className="relative text-smi leading-[16.23px] font-medium font-h05-12-medium"
                  style={uSDStyle}
                >
                  USD
                </div>
              </div>
              <div
                className="shrink-0 flex flex-row items-start justify-start gap-[30.03px] text-smi text-neutral-400 font-h05-12-medium"
                style={frameDiv7Style}
              >
                <div
                  className="relative leading-[16.23px] font-medium"
                  style={vsLastWeekStyle}
                >
                  vs last week
                </div>
                <div
                  className="relative leading-[16.23px] font-medium"
                  style={lastPurchasedStyle}
                >
                  Last Purchased ( Feb 24 19:59 UTC-5 )
                </div>
              </div>
            </div>
            <div
              className="shrink-0 flex flex-col items-start justify-center gap-[5.68px] text-smi text-neutral-400 font-h05-12-medium"
              style={frameDiv8Style}
            >
              <div
                className="relative w-[316.4px] h-[30px]"
                style={groupDiv1Style}
              >
                <div
                  className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start p-[6.492063522338867px]"
                  style={frameDiv9Style}
                >
                  <div
                    className="relative leading-[16.23px] font-medium"
                    style={uSD1Style}
                  >
                    400 USD
                  </div>
                </div>
                <div
                  className="absolute top-[6.5px] left-[112px] leading-[16.23px] font-medium"
                  style={uSD2Style}
                >
                  1000 USD
                </div>
                <div
                  className="absolute top-[6.5px] left-[252.4px] leading-[16.23px] font-medium"
                  style={uSD3Style}
                >
                  5000 USD
                </div>
              </div>
              <div
                className="shrink-0 flex flex-row items-start justify-start gap-[3.25px]"
                style={frameDiv10Style}
              >
                <div
                  className="relative rounded-tl-[12.98px] rounded-tr-none rounded-br-none rounded-bl-[12.98px] bg-pri-purple-400 w-[102.3px] h-[12.2px]"
                  style={rectangleDivStyle}
                />
                <div
                  className="relative w-[141.2px] h-[12.2px]"
                  style={groupDiv2Style}
                >
                  <div
                    className="absolute top-[0px] left-[0px] bg-lavender w-[141.2px] h-[12.2px]"
                    style={rectangleDiv1Style}
                  />
                  <div
                    className="absolute top-[0px] left-[0px] bg-pri-purple-400 w-[77.1px] h-[12.2px]"
                    style={rectangleDiv2Style}
                  />
                </div>
                <div
                  className="relative rounded-tl-[12.98px] rounded-tr-none rounded-br-none rounded-bl-[12.98px] bg-lavender w-[102.3px] h-[12.2px] [transform:_rotate(-180deg)]"
                  style={rectangleDiv3Style}
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[59px] h-[55px] object-cover"
          alt=""
          src={group12}
          style={groupIconStyle}
        />
      </div>
    </div>
  );
};

export default Type01BreakpointDesktop2;
