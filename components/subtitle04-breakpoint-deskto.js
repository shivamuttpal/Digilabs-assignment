import { useMemo } from "react";
import TypeGreySizeMediumState from "./type-grey-size-medium-state";

const Subtitle04BreakpointDeskto = ({
  title,
  text,
  arrowRight,
  subtitle04BreakpointDesktWidth,
  contentWidth,
  contentWidth1,
  titleLineHeight,
  paraTextLineHeight,
  paraTextWidth,
  actionFlexShrink,
  textLineHeight,
  arrowRightIconWidth,
  arrowRightIconHeight,
}) => {
  const subtitle04BreakpointDesktoStyle = useMemo(() => {
    return {
      width: subtitle04BreakpointDesktWidth,
    };
  }, [subtitle04BreakpointDesktWidth]);

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

  const action4Style = useMemo(() => {
    return {
      flexShrink: actionFlexShrink,
    };
  }, [actionFlexShrink]);

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

  return (
    <div
      className="w-[1216px] flex flex-col items-center justify-center text-center text-21xl text-gray font-h700-62-semibold"
      style={subtitle04BreakpointDesktoStyle}
    >
      <div
        className="flex flex-col items-center justify-start gap-[32px]"
        style={content60Style}
      >
        <div
          className="w-[704px] flex flex-col items-center justify-center gap-[16px]"
          style={content59Style}
        >
          <div
            className="self-stretch relative leading-[48px] font-semibold"
            style={title6Style}
          >
            {title}
          </div>
          <div
            className="relative text-lg leading-[28px] font-h05-12-medium text-neutral-400 inline-block w-[576px]"
            style={paraText4Style}
          >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
        </div>
        <div
          className="shrink-0 flex flex-col items-center justify-center"
          style={action4Style}
        >
          <TypeGreySizeMediumState
            text="View component library"
            zap="/arrowright@2x.png"
            typeGreySizeMediumStateAlignItems="flex-start"
            typeGreySizeMediumStateJustifyContent="flex-start"
            typeGreySizeMediumStateFlexShrink="0"
            baseButtonsBackgroundColor="unset"
            baseButtonsPadding="unset"
            baseButtonsBoxSizing="unset"
            textColor="#582066"
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
  );
};

export default Subtitle04BreakpointDeskto;
