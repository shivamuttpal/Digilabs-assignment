import { useMemo } from "react";

const Subtitle01BreakpointDeskto = ({ title, titleLineHeight, titleWidth }) => {
  const title5Style = useMemo(() => {
    return {
      lineHeight: titleLineHeight,
      width: titleWidth,
    };
  }, [titleLineHeight, titleWidth]);

  return (
    <div className="flex flex-row items-center justify-center text-center text-21xl text-gray font-h700-62-semibold self-stretch">
      <div
        className="relative leading-[48px] font-semibold inline-block w-[704px] shrink-0"
        style={title5Style}
      >
        {title}
      </div>
    </div>
  );
};

export default Subtitle01BreakpointDeskto;
