import { useMemo } from "react";
import ModeGreySizeSmallIconNo from "./mode-grey-size-small-icon-no";

const Type02ModeDefaultBreakpo = ({
  text,
  type02ModeDefaultBreakpoWidth,
  containerWidth,
  textLineHeight,
  textLineHeight1,
  type02ModeDefaultBreakpoPadding,
  containerJustifyContent,
  containerAlignSelf,
  contentGap,
  contentAlignSelf,
  type02ModeDefaultBreakpoPadding1,
  containerFontSize,
  textFontSize,
  textTextAlign,
  textFlex,
}) => {
  const type02ModeDefaultBreakpoStyle = useMemo(() => {
    return {
      width: type02ModeDefaultBreakpoWidth,
      padding: type02ModeDefaultBreakpoPadding,
    };
  }, [type02ModeDefaultBreakpoWidth, type02ModeDefaultBreakpoPadding]);

  const container15Style = useMemo(() => {
    return {
      width: containerWidth,
      justifyContent: containerJustifyContent,
      alignSelf: containerAlignSelf,
    };
  }, [containerWidth, containerJustifyContent, containerAlignSelf]);

  const text3Style = useMemo(() => {
    return {
      lineHeight: textLineHeight,
      fontSize: containerFontSize,
    };
  }, [textLineHeight, containerFontSize]);

  const text4Style = useMemo(() => {
    return {
      lineHeight: textLineHeight1,
      fontSize: textFontSize,
      textAlign: textTextAlign,
      flex: textFlex,
    };
  }, [textLineHeight1, textFontSize, textTextAlign, textFlex]);

  const content49Style = useMemo(() => {
    return {
      gap: contentGap,
      alignSelf: contentAlignSelf,
    };
  }, [contentGap, contentAlignSelf]);

  const modeGreySizeSmallIconNoStyle = useMemo(() => {
    return {
      padding: type02ModeDefaultBreakpoPadding1,
    };
  }, [type02ModeDefaultBreakpoPadding1]);

  return (
    <div
      className="bg-white box-border w-[1440px] flex flex-col items-center justify-center p-2 text-center text-sm text-gray font-h05-12-medium border-b-[1px] border-solid border-neutral-1000"
      style={type02ModeDefaultBreakpoStyle}
    >
      <div
        className="w-[1216px] flex flex-col items-center justify-start"
        style={container15Style}
      >
        <div
          className="flex flex-row items-center justify-center gap-[16px]"
          style={content49Style}
        >
          <ModeGreySizeSmallIconNo
            text="Badges"
            modeGreySizeSmallIconNoFlexShrink="0"
            textLineHeight="16px"
            modeGreySizeSmallIconNoPadding="4px 8px"
            textFontSize="12px"
          />
          <div
            className="relative leading-[20px] font-medium"
            style={text4Style}
          >
            We are happy to announce that we raise $2 Million in Seed Funding
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type02ModeDefaultBreakpo;
