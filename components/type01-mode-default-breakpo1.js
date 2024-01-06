import { useMemo } from "react";
import Type01BreakpointDesktop1 from "./type01-breakpoint-desktop1";

const Type01ModeDefaultBreakpo1 = ({
  number,
  title,
  title1,
  number1,
  title2,
  number2,
  title3,
  containerPadding,
  contentWidth,
  numberLineHeight,
  contentWidth1,
  titleLineHeight,
  titleWidth,
  paraTextLineHeight,
  paraTextWidth,
  contentWidth2,
  numberLineHeight1,
  contentWidth3,
  titleLineHeight1,
  titleWidth1,
  paraTextLineHeight1,
  paraTextWidth1,
  contentWidth4,
  numberLineHeight2,
  contentWidth5,
  titleLineHeight2,
  titleWidth2,
  paraTextLineHeight2,
  paraTextWidth2,
  contentWidth6,
  numberLineHeight3,
  contentWidth7,
  titleLineHeight3,
  titleWidth3,
  paraTextLineHeight3,
  paraTextWidth3,
  type01ModeDefaultBreakpoPadding,
  type01ModeDefaultBreakpoBoxSizing,
  type01ModeDefaultBreakpoFlexDirection,
  containerBoxSizing,
  containerFlexDirection,
  rowFlexDirection,
  rowWidth,
  columnGap,
  columnFlexShrink,
  columnFlexDirection,
  columnAlignItems,
  columnJustifyContent,
  columnFlex,
  type01ModeDefaultBreakpoPadding1,
  type01ModeDefaultBreakpoAlignSelf,
  containerGap,
  containerAlignSelf,
  rowFontSize,
  columnGap1,
  metricBoxFontSize,
  contentFontSize,
  type01ModeDefaultBreakpoPadding2,
  type01ModeDefaultBreakpoAlignSelf1,
  containerGap1,
  containerAlignSelf1,
  rowFontSize1,
  columnGap2,
  metricBoxFontSize1,
  contentFontSize1,
  type01ModeDefaultBreakpoPadding3,
  type01ModeDefaultBreakpoAlignSelf2,
  containerGap2,
  containerAlignSelf2,
  rowFontSize2,
  columnGap3,
  metricBoxFontSize2,
  contentFontSize2,
  type01ModeDefaultBreakpoPadding4,
  type01ModeDefaultBreakpoFlexShrink,
  type01ModeDefaultBreakpoAlignSelf3,
  containerGap3,
  containerAlignSelf3,
  rowFontSize3,
  columnGap4,
  metricBoxFontSize3,
  contentFontSize3,
}) => {
  const container16Style = useMemo(() => {
    return {
      padding: containerPadding,
      boxSizing: containerBoxSizing,
      flexDirection: containerFlexDirection,
    };
  }, [containerPadding, containerBoxSizing, containerFlexDirection]);

  const content29Style = useMemo(() => {
    return {
      width: contentWidth,
      gap: containerGap,
      alignSelf: containerAlignSelf,
    };
  }, [contentWidth, containerGap, containerAlignSelf]);

  const numberStyle = useMemo(() => {
    return {
      lineHeight: numberLineHeight,
      fontSize: rowFontSize,
    };
  }, [numberLineHeight, rowFontSize]);

  const content30Style = useMemo(() => {
    return {
      width: contentWidth1,
      gap: columnGap1,
    };
  }, [contentWidth1, columnGap1]);

  const title3Style = useMemo(() => {
    return {
      lineHeight: titleLineHeight,
      width: titleWidth,
      fontSize: metricBoxFontSize,
    };
  }, [titleLineHeight, titleWidth, metricBoxFontSize]);

  const paraText3Style = useMemo(() => {
    return {
      lineHeight: paraTextLineHeight,
      width: paraTextWidth,
      fontSize: contentFontSize,
    };
  }, [paraTextLineHeight, paraTextWidth, contentFontSize]);

  const content29Style1 = useMemo(() => {
    return {
      width: contentWidth2,
      gap: containerGap1,
      alignSelf: containerAlignSelf1,
    };
  }, [contentWidth2, containerGap1, containerAlignSelf1]);

  const numberStyle1 = useMemo(() => {
    return {
      lineHeight: numberLineHeight1,
      fontSize: rowFontSize1,
    };
  }, [numberLineHeight1, rowFontSize1]);

  const content30Style1 = useMemo(() => {
    return {
      width: contentWidth3,
      gap: columnGap2,
    };
  }, [contentWidth3, columnGap2]);

  const title3Style1 = useMemo(() => {
    return {
      lineHeight: titleLineHeight1,
      width: titleWidth1,
      fontSize: metricBoxFontSize1,
    };
  }, [titleLineHeight1, titleWidth1, metricBoxFontSize1]);

  const paraText3Style1 = useMemo(() => {
    return {
      lineHeight: paraTextLineHeight1,
      width: paraTextWidth1,
      fontSize: contentFontSize1,
    };
  }, [paraTextLineHeight1, paraTextWidth1, contentFontSize1]);

  const content29Style2 = useMemo(() => {
    return {
      width: contentWidth4,
      gap: containerGap2,
      alignSelf: containerAlignSelf2,
    };
  }, [contentWidth4, containerGap2, containerAlignSelf2]);

  const numberStyle2 = useMemo(() => {
    return {
      lineHeight: numberLineHeight2,
      fontSize: rowFontSize2,
    };
  }, [numberLineHeight2, rowFontSize2]);

  const content30Style2 = useMemo(() => {
    return {
      width: contentWidth5,
      gap: columnGap3,
    };
  }, [contentWidth5, columnGap3]);

  const title3Style2 = useMemo(() => {
    return {
      lineHeight: titleLineHeight2,
      width: titleWidth2,
      fontSize: metricBoxFontSize2,
    };
  }, [titleLineHeight2, titleWidth2, metricBoxFontSize2]);

  const paraText3Style2 = useMemo(() => {
    return {
      lineHeight: paraTextLineHeight2,
      width: paraTextWidth2,
      fontSize: contentFontSize2,
    };
  }, [paraTextLineHeight2, paraTextWidth2, contentFontSize2]);

  const content29Style3 = useMemo(() => {
    return {
      width: contentWidth6,
      gap: containerGap3,
      alignSelf: containerAlignSelf3,
    };
  }, [contentWidth6, containerGap3, containerAlignSelf3]);

  const numberStyle3 = useMemo(() => {
    return {
      lineHeight: numberLineHeight3,
      fontSize: rowFontSize3,
    };
  }, [numberLineHeight3, rowFontSize3]);

  const content30Style3 = useMemo(() => {
    return {
      width: contentWidth7,
      gap: columnGap4,
    };
  }, [contentWidth7, columnGap4]);

  const title3Style3 = useMemo(() => {
    return {
      lineHeight: titleLineHeight3,
      width: titleWidth3,
      fontSize: metricBoxFontSize3,
    };
  }, [titleLineHeight3, titleWidth3, metricBoxFontSize3]);

  const paraText3Style3 = useMemo(() => {
    return {
      lineHeight: paraTextLineHeight3,
      width: paraTextWidth3,
      fontSize: contentFontSize3,
    };
  }, [paraTextLineHeight3, paraTextWidth3, contentFontSize3]);

  const type01ModeDefaultBreakpo3Style = useMemo(() => {
    return {
      padding: type01ModeDefaultBreakpoPadding,
      boxSizing: type01ModeDefaultBreakpoBoxSizing,
      flexDirection: type01ModeDefaultBreakpoFlexDirection,
      flexShrink: type01ModeDefaultBreakpoFlexShrink,
    };
  }, [
    type01ModeDefaultBreakpoPadding,
    type01ModeDefaultBreakpoBoxSizing,
    type01ModeDefaultBreakpoFlexDirection,
    type01ModeDefaultBreakpoFlexShrink,
  ]);

  const row6Style = useMemo(() => {
    return {
      flexDirection: rowFlexDirection,
      width: rowWidth,
    };
  }, [rowFlexDirection, rowWidth]);

  const column5Style = useMemo(() => {
    return {
      gap: columnGap,
      flexShrink: columnFlexShrink,
      flexDirection: columnFlexDirection,
      alignItems: columnAlignItems,
      justifyContent: columnJustifyContent,
      flex: columnFlex,
    };
  }, [
    columnGap,
    columnFlexShrink,
    columnFlexDirection,
    columnAlignItems,
    columnJustifyContent,
    columnFlex,
  ]);

  const type01BreakpointDesktop1Style = useMemo(() => {
    return {
      padding: type01ModeDefaultBreakpoPadding1,
      alignSelf: type01ModeDefaultBreakpoAlignSelf,
    };
  }, [type01ModeDefaultBreakpoPadding1, type01ModeDefaultBreakpoAlignSelf]);

  const type01BreakpointDesktop1Style1 = useMemo(() => {
    return {
      padding: type01ModeDefaultBreakpoPadding2,
      alignSelf: type01ModeDefaultBreakpoAlignSelf1,
    };
  }, [type01ModeDefaultBreakpoPadding2, type01ModeDefaultBreakpoAlignSelf1]);

  const type01BreakpointDesktop1Style2 = useMemo(() => {
    return {
      padding: type01ModeDefaultBreakpoPadding3,
      alignSelf: type01ModeDefaultBreakpoAlignSelf2,
    };
  }, [type01ModeDefaultBreakpoPadding3, type01ModeDefaultBreakpoAlignSelf2]);

  const type01BreakpointDesktop1Style3 = useMemo(() => {
    return {
      padding: type01ModeDefaultBreakpoPadding4,
      alignSelf: type01ModeDefaultBreakpoAlignSelf3,
    };
  }, [type01ModeDefaultBreakpoPadding4, type01ModeDefaultBreakpoAlignSelf3]);

  return (
    <div
      className="bg-white flex flex-col items-center justify-center py-24 px-20"
      style={type01ModeDefaultBreakpo3Style}
    >
      <div
        className="shrink-0 flex flex-col items-center justify-center py-0 px-8"
        style={container16Style}
      >
        <div
          className="shrink-0 flex flex-col items-center justify-center"
          style={row6Style}
        >
          <div
            className="shrink-0 flex flex-row items-start justify-start gap-[32px]"
            style={column5Style}
          >
            <Type01BreakpointDesktop1
              number="20+"
              title="Landing pages"
              type01BreakpointDesktopFlexShrink="0"
              contentWidth="248px"
              numberLineHeight="56px"
              contentWidth1="248px"
              titleLineHeight="20px"
              titleWidth="248px"
              paraTextLineHeight="28px"
              paraTextWidth="248px"
              type01BreakpointDesktopAlignSelf="unset"
              type01BreakpointDesktopPadding="16px"
              contentAlignSelf="unset"
              contentJustifyContent="center"
              contentGap="16px"
              numberFontSize="48px"
              contentAlignSelf1="unset"
              contentGap1="8px"
              titleAlignSelf="unset"
              titleFontSize="16px"
              paraTextAlignSelf="unset"
              paraTextFontSize="16px"
            />
            <Type01BreakpointDesktop1
              number="1K"
              title="Components"
              type01BreakpointDesktopFlexShrink="0"
              contentWidth="248px"
              numberLineHeight="56px"
              contentWidth1="248px"
              titleLineHeight="20px"
              titleWidth="248px"
              paraTextLineHeight="28px"
              paraTextWidth="248px"
              type01BreakpointDesktopAlignSelf="unset"
              type01BreakpointDesktopPadding="16px"
              contentAlignSelf="unset"
              contentJustifyContent="center"
              contentGap="16px"
              numberFontSize="48px"
              contentAlignSelf1="unset"
              contentGap1="8px"
              titleAlignSelf="unset"
              titleFontSize="16px"
              paraTextAlignSelf="unset"
              paraTextFontSize="16px"
            />
            <Type01BreakpointDesktop1
              number="200+"
              title="Blocks"
              type01BreakpointDesktopFlexShrink="0"
              contentWidth="248px"
              numberLineHeight="56px"
              contentWidth1="248px"
              titleLineHeight="20px"
              titleWidth="248px"
              paraTextLineHeight="28px"
              paraTextWidth="248px"
              type01BreakpointDesktopAlignSelf="unset"
              type01BreakpointDesktopPadding="16px"
              contentAlignSelf="unset"
              contentJustifyContent="center"
              contentGap="16px"
              numberFontSize="48px"
              contentAlignSelf1="unset"
              contentGap1="8px"
              titleAlignSelf="unset"
              titleFontSize="16px"
              paraTextAlignSelf="unset"
              paraTextFontSize="16px"
            />
            <Type01BreakpointDesktop1
              number="4.0"
              title="Auto Layout"
              type01BreakpointDesktopFlexShrink="0"
              contentWidth="248px"
              numberLineHeight="56px"
              contentWidth1="248px"
              titleLineHeight="20px"
              titleWidth="248px"
              paraTextLineHeight="28px"
              paraTextWidth="248px"
              type01BreakpointDesktopAlignSelf="unset"
              type01BreakpointDesktopPadding="16px"
              contentAlignSelf="unset"
              contentJustifyContent="center"
              contentGap="16px"
              numberFontSize="48px"
              contentAlignSelf1="unset"
              contentGap1="8px"
              titleAlignSelf="unset"
              titleFontSize="16px"
              paraTextAlignSelf="unset"
              paraTextFontSize="16px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type01ModeDefaultBreakpo1;
