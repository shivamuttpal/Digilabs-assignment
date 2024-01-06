import { useMemo } from "react";
import Subtitle01BreakpointDeskto from "./subtitle01-breakpoint-deskto";
import TypeGreySizeMediumState from "./type-grey-size-medium-state";

const Type01BreakpointDesktop = ({
  title,
  text,
  text1,
  figma,
  type01BreakpointDesktopWidth,
  containerWidth,
  containerPadding,
  rowWidth,
  titleLineHeight,
  titleWidth,
  textLineHeight,
  creditCardIconWidth,
  creditCardIconHeight,
  textLineHeight1,
  figmaIconWidth,
  figmaIconHeight,
  type01BreakpointDesktopPadding,
  rowGap,
  containerFontSize,
  containerFlexShrink,
  containerFlex,
  actionGap,
  type01BreakpointDesktopPadding1,
  type01BreakpointDesktopGap,
  containerFontSize1,
  type01BreakpointDesktopPadding2,
  type01BreakpointDesktopGap1,
  containerFontSize2,
}) => {
  const type01BreakpointDesktop2Style = useMemo(() => {
    return {
      width: type01BreakpointDesktopWidth,
      padding: type01BreakpointDesktopPadding,
    };
  }, [type01BreakpointDesktopWidth, type01BreakpointDesktopPadding]);

  const container17Style = useMemo(() => {
    return {
      width: containerWidth,
      padding: containerPadding,
    };
  }, [containerWidth, containerPadding]);

  const row7Style = useMemo(() => {
    return {
      width: rowWidth,
      gap: rowGap,
    };
  }, [rowWidth, rowGap]);

  const title5Style = useMemo(() => {
    return {
      lineHeight: titleLineHeight,
      width: titleWidth,
      fontSize: containerFontSize,
      flexShrink: containerFlexShrink,
      flex: containerFlex,
    };
  }, [
    titleLineHeight,
    titleWidth,
    containerFontSize,
    containerFlexShrink,
    containerFlex,
  ]);

  const textStyle = useMemo(() => {
    return {
      lineHeight: textLineHeight,
      fontSize: containerFontSize1,
    };
  }, [textLineHeight, containerFontSize1]);

  const zapIconStyle = useMemo(() => {
    return {
      width: creditCardIconWidth,
      height: creditCardIconHeight,
    };
  }, [creditCardIconWidth, creditCardIconHeight]);

  const textStyle1 = useMemo(() => {
    return {
      lineHeight: textLineHeight1,
      fontSize: containerFontSize2,
    };
  }, [textLineHeight1, containerFontSize2]);

  const zapIconStyle1 = useMemo(() => {
    return {
      width: figmaIconWidth,
      height: figmaIconHeight,
    };
  }, [figmaIconWidth, figmaIconHeight]);

  const action3Style = useMemo(() => {
    return {
      gap: actionGap,
    };
  }, [actionGap]);

  const sizeMediumIconLaggingStyle = useMemo(() => {
    return {
      padding: type01BreakpointDesktopPadding1,
      gap: type01BreakpointDesktopGap,
    };
  }, [type01BreakpointDesktopPadding1, type01BreakpointDesktopGap]);

  const sizeMediumIconLaggingStyle1 = useMemo(() => {
    return {
      padding: type01BreakpointDesktopPadding2,
      gap: type01BreakpointDesktopGap1,
    };
  }, [type01BreakpointDesktopPadding2, type01BreakpointDesktopGap1]);

  return (
    <div
      className="bg-white w-[1440px] flex flex-col items-center justify-center py-24 px-20 box-border"
      style={type01BreakpointDesktop2Style}
    >
      <div
        className="w-[1280px] flex flex-col items-center justify-center py-0 px-8 box-border"
        style={container17Style}
      >
        <div
          className="w-[1216px] flex flex-col items-center justify-start gap-[32px]"
          style={row7Style}
        >
          <Subtitle01BreakpointDeskto
            title="Revamp Your Landing Pages Today with Mode UI - Figma Kit"
            titleLineHeight="48px"
            titleWidth="704px"
          />
          <div
            className="self-stretch flex flex-row items-center justify-center gap-[8px]"
            style={action3Style}
          >
            <TypeGreySizeMediumState
              text="Get Pro Version"
              zap="/creditcard@2x.png"
              typeGreySizeMediumStateAlignItems="center"
              typeGreySizeMediumStateJustifyContent="center"
              typeGreySizeMediumStateFlexShrink="0"
              baseButtonsBackgroundColor="#582066"
              baseButtonsPadding="12px 16px"
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
            <TypeGreySizeMediumState
              text="Preview in Figma"
              zap="/figma@2x.png"
              typeGreySizeMediumStateAlignItems="center"
              typeGreySizeMediumStateJustifyContent="center"
              typeGreySizeMediumStateFlexShrink="0"
              baseButtonsBackgroundColor="#eeefef"
              baseButtonsPadding="12px 16px"
              baseButtonsBoxSizing="border-box"
              textColor="#5a6475"
              textLineHeight="20px"
              zapIconWidth="20px"
              zapIconHeight="20px"
              typeGreySizeMediumStateAlignSelf="unset"
              typeGreySizeMediumStateFlex="unset"
              typeGreySizeMediumStateGap="8px"
              baseButtonsFontSize="16px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type01BreakpointDesktop;
