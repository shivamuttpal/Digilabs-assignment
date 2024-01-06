import { useMemo } from "react";
import ColorDefault from "./color-default";
import StateDefaultModeDefaultI from "./state-default-mode-default-i";
import TypeGreySizeMediumState from "./type-grey-size-medium-state";

const Type08ModeDefaultBreakpo = ({
  menu,
  chevronDown,
  menu1,
  menu2,
  menu3,
  type08ModeDefaultBreakpoFlexShrink,
  containerPadding,
  rowWidth,
  vectorIconWidth,
  vectorIconHeight,
  menuLineHeight,
  chevronDownIconWidth,
  chevronDownIconHeight,
  menuLineHeight1,
  menuLineHeight2,
  menuLineHeight3,
  menuLineHeight4,
  menuLineHeight5,
  textLineHeight,
  logInIconWidth,
  logInIconHeight,
}) => {
  const type08ModeDefaultBreakpo1Style = useMemo(() => {
    return {
      flexShrink: type08ModeDefaultBreakpoFlexShrink,
    };
  }, [type08ModeDefaultBreakpoFlexShrink]);

  const container24Style = useMemo(() => {
    return {
      padding: containerPadding,
    };
  }, [containerPadding]);

  const row13Style = useMemo(() => {
    return {
      width: rowWidth,
    };
  }, [rowWidth]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  const menuStyle = useMemo(() => {
    return {
      lineHeight: menuLineHeight,
    };
  }, [menuLineHeight]);

  const chevronDownIconStyle = useMemo(() => {
    return {
      width: chevronDownIconWidth,
      height: chevronDownIconHeight,
    };
  }, [chevronDownIconWidth, chevronDownIconHeight]);

  const menu1Style = useMemo(() => {
    return {
      lineHeight: menuLineHeight1,
    };
  }, [menuLineHeight1]);

  const menu2Style = useMemo(() => {
    return {
      lineHeight: menuLineHeight2,
    };
  }, [menuLineHeight2]);

  const menu3Style = useMemo(() => {
    return {
      lineHeight: menuLineHeight3,
    };
  }, [menuLineHeight3]);

  const menu4Style = useMemo(() => {
    return {
      lineHeight: menuLineHeight4,
    };
  }, [menuLineHeight4]);

  const menu5Style = useMemo(() => {
    return {
      lineHeight: menuLineHeight5,
    };
  }, [menuLineHeight5]);

  const textStyle = useMemo(() => {
    return {
      lineHeight: textLineHeight,
    };
  }, [textLineHeight]);

  const zapIconStyle = useMemo(() => {
    return {
      width: logInIconWidth,
      height: logInIconHeight,
    };
  }, [logInIconWidth, logInIconHeight]);

  return (
    <div
      className="bg-white flex flex-col items-center justify-center py-5 px-20 text-center text-base text-neutral-200 font-h05-12-medium border-b-[1px] border-solid border-neutral-1000"
      style={type08ModeDefaultBreakpo1Style}
    >
      <div
        className="shrink-0 flex flex-col items-center justify-center py-0 px-8"
        style={container24Style}
      >
        <div
          className="w-[1216px] shrink-0 flex flex-row items-center justify-between"
          style={row13Style}
        >
          <div className="shrink-0 flex flex-col items-start justify-center p-2">
            <ColorDefault
              colorDefaultFlexShrink="0"
              colorDefaultAlignItems="flex-start"
              colorDefaultPadding="4px 8px"
              vectorIconWidth="84px"
              vectorIconHeight="16px"
              colorDefaultBoxSizing="border-box"
            />
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[16px]">
            <div className="shrink-0 flex flex-col items-start justify-start p-2">
              <StateDefaultModeDefaultI
                menu="Templates"
                chevronDown="/chevrondown@2x.png"
                stateDefaultModeDefaultIFlexShrink="0"
                menuLineHeight="20px"
                chevronDownIconWidth="20px"
                chevronDownIconHeight="20px"
              />
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start p-2">
              <div className="shrink-0 flex flex-row items-center justify-start">
                <div
                  className="relative leading-[20px] font-medium"
                  style={menu1Style}
                >
                  {menu1}
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start p-2">
              <div className="shrink-0 flex flex-row items-center justify-start">
                <div
                  className="relative leading-[20px] font-medium"
                  style={menu2Style}
                >
                  {menu2}
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start p-2">
              <div className="shrink-0 flex flex-row items-center justify-start">
                <div
                  className="relative leading-[20px] font-medium"
                  style={menu3Style}
                >
                  About
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start p-2">
              <div className="shrink-0 flex flex-row items-center justify-start">
                <div
                  className="relative leading-[20px] font-medium"
                  style={menu4Style}
                >
                  {menu3}
                </div>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start p-2">
              <div className="shrink-0 flex flex-row items-center justify-start">
                <div
                  className="relative leading-[20px] font-medium"
                  style={menu5Style}
                >
                  Contact
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Type08ModeDefaultBreakpo;
