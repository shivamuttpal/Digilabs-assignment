import { useMemo } from "react";

const ColorDefault = ({
  colorDefaultFlexShrink,
  colorDefaultAlignItems,
  colorDefaultPadding,
  vectorIconWidth,
  vectorIconHeight,
  colorDefaultBoxSizing,
}) => {
  const colorDefaultStyle = useMemo(() => {
    return {
      flexShrink: colorDefaultFlexShrink,
      alignItems: colorDefaultAlignItems,
      padding: colorDefaultPadding,
      boxSizing: colorDefaultBoxSizing,
    };
  }, [
    colorDefaultFlexShrink,
    colorDefaultAlignItems,
    colorDefaultPadding,
    colorDefaultBoxSizing,
  ]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  return (
    <div
      className="flex flex-col items-start justify-start py-1 px-2"
      style={colorDefaultStyle}
    >
      <img
        className="relative w-[84px] h-4 object-cover"
        alt=""
        src="/vector@2x.png"
        style={vectorIconStyle}
      />
    </div>
  );
};

export default ColorDefault;
