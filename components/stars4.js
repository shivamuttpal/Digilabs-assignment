import { useMemo } from "react";

const Stars4 = ({
  frame,
  frame1,
  frame2,
  frame3,
  stars4AlignSelf,
  frameDivFlexShrink,
  frameIconWidth,
  frameIconHeight,
  frameIconWidth1,
  frameIconHeight1,
  frameIconWidth2,
  frameIconHeight2,
  frameIconWidth3,
  frameIconHeight3,
  stars4BoxSizing,
  stars4Padding,
  frameDivGap,
}) => {
  const stars4Style = useMemo(() => {
    return {
      alignSelf: stars4AlignSelf,
      boxSizing: stars4BoxSizing,
      padding: stars4Padding,
    };
  }, [stars4AlignSelf, stars4BoxSizing, stars4Padding]);

  const frameDiv11Style = useMemo(() => {
    return {
      flexShrink: frameDivFlexShrink,
      gap: frameDivGap,
    };
  }, [frameDivFlexShrink, frameDivGap]);

  const frameIcon2Style = useMemo(() => {
    return {
      width: frameIconWidth,
      height: frameIconHeight,
    };
  }, [frameIconWidth, frameIconHeight]);

  const frameIcon3Style = useMemo(() => {
    return {
      width: frameIconWidth1,
      height: frameIconHeight1,
    };
  }, [frameIconWidth1, frameIconHeight1]);

  const frameIcon4Style = useMemo(() => {
    return {
      width: frameIconWidth2,
      height: frameIconHeight2,
    };
  }, [frameIconWidth2, frameIconHeight2]);

  const frameIcon5Style = useMemo(() => {
    return {
      width: frameIconWidth3,
      height: frameIconHeight3,
    };
  }, [frameIconWidth3, frameIconHeight3]);

  return (
    <div
      className="flex flex-col items-center justify-center py-1 px-2"
      style={stars4Style}
    >
      <div
        className="shrink-0 flex flex-row items-start justify-start gap-[12px]"
        style={frameDiv11Style}
      >
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
          alt=""
          src={frame}
          style={frameIcon2Style}
        />
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
          alt=""
          src={frame1}
          style={frameIcon3Style}
        />
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
          alt=""
          src={frame2}
          style={frameIcon4Style}
        />
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
          alt=""
          src={frame3}
          style={frameIcon5Style}
        />
      </div>
    </div>
  );
};

export default Stars4;
