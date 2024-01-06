import { useMemo } from "react";
import ColorDefault from "./color-default";
import TypeGreySizeMediumState from "./type-grey-size-medium-state";

const Type08ModeDefaultBreakpo1 = ({
  type08ModeDefaultBreakpoPadding,
  type08ModeDefaultBreakpoFlexShrink,
  containerWidth,
  logoPadding,
  modeUILogoPadding,
  vectorIconWidth,
  vectorIconHeight,
  contentGap,
  baseButtonsPadding,
  baseButtonsGap,
  textFontSize,
  textLineHeight,
  logInIconWidth,
  logInIconHeight,
  menuButtonPadding,
  menuIconWidth,
  menuIconHeight,
}) => {
  const type08ModeDefaultBreakpoStyle = useMemo(() => {
    return {
      padding: type08ModeDefaultBreakpoPadding,
      flexShrink: type08ModeDefaultBreakpoFlexShrink,
    };
  }, [type08ModeDefaultBreakpoPadding, type08ModeDefaultBreakpoFlexShrink]);

  const container6Style = useMemo(() => {
    return {
      width: containerWidth,
    };
  }, [containerWidth]);

  const logo11Style = useMemo(() => {
    return {
      padding: logoPadding,
    };
  }, [logoPadding]);

  const colorDefaultStyle = useMemo(() => {
    return {
      padding: modeUILogoPadding,
    };
  }, [modeUILogoPadding]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  const content25Style = useMemo(() => {
    return {
      gap: contentGap,
    };
  }, [contentGap]);

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
      width: logInIconWidth,
      height: logInIconHeight,
    };
  }, [logInIconWidth, logInIconHeight]);

  const menuButtonStyle = useMemo(() => {
    return {
      padding: menuButtonPadding,
    };
  }, [menuButtonPadding]);

  const menuIconStyle = useMemo(() => {
    return {
      width: menuIconWidth,
      height: menuIconHeight,
    };
  }, [menuIconWidth, menuIconHeight]);

  return (
    <div
      className="bg-white flex flex-col items-center justify-start py-5 px-4 border-b-[1px] border-solid border-neutral-1000"
      style={type08ModeDefaultBreakpoStyle}
    >
      <div
        className="w-[343px] shrink-0 flex flex-row items-center justify-between"
        style={container6Style}
      >
        <div
          className="shrink-0 flex flex-col items-start justify-start p-2"
          style={logo11Style}
        >
          <ColorDefault
            colorDefaultFlexShrink="0"
            colorDefaultAlignItems="flex-start"
            colorDefaultPadding="4px 8px"
            vectorIconWidth="84px"
            vectorIconHeight="16px"
            colorDefaultBoxSizing="border-box"
          />
        </div>
        <div
          className="shrink-0 flex flex-row items-center justify-start gap-[16px]"
          style={content25Style}
        >
          <div className="shrink-0 flex flex-col items-end justify-center">
            <TypeGreySizeMediumState
              text="Login"
              zap="/login@2x.png"
              typeGreySizeMediumStateAlignItems="center"
              typeGreySizeMediumStateJustifyContent="center"
              typeGreySizeMediumStateFlexShrink="0"
              baseButtonsBackgroundColor="#eeefef"
              baseButtonsPadding="8px 16px"
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
          <div
            className="shrink-0 flex flex-row items-start justify-end p-2"
            style={menuButtonStyle}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/menu@2x.png"
              style={menuIconStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type08ModeDefaultBreakpo1;
