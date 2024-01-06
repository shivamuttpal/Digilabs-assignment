import { useMemo } from "react";

const ModeGreySizeSmallIconNo = ({
  text,
  modeGreySizeSmallIconNoFlexShrink,
  textLineHeight,
  modeGreySizeSmallIconNoPadding,
  textFontSize,
}) => {
  const modeGreySizeSmallIconNoStyle = useMemo(() => {
    return {
      flexShrink: modeGreySizeSmallIconNoFlexShrink,
      padding: modeGreySizeSmallIconNoPadding,
    };
  }, [modeGreySizeSmallIconNoFlexShrink, modeGreySizeSmallIconNoPadding]);

  const text3Style = useMemo(() => {
    return {
      lineHeight: textLineHeight,
      fontSize: textFontSize,
    };
  }, [textLineHeight, textFontSize]);

  return (
    <div
      className="rounded-221xl bg-neutral-1300 flex flex-row items-center justify-center py-1 px-2 text-center text-xs text-neutral-200 font-h05-12-medium border-[1px] border-solid border-neutral-1000"
      style={modeGreySizeSmallIconNoStyle}
    >
      <div className="relative leading-[16px] font-medium" style={text3Style}>
        {text}
      </div>
    </div>
  );
};

export default ModeGreySizeSmallIconNo;
