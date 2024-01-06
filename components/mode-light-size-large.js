import { useMemo } from "react";

const ModeLightSizeLarge = ({
  dollarSign,
  modeLightSizeLargeFlexShrink,
  dollarSignIconWidth,
  dollarSignIconHeight,
  modeLightSizeLargeBoxSizing,
  modeLightSizeLargePadding,
}) => {
  const modeLightSizeLargeStyle = useMemo(() => {
    return {
      flexShrink: modeLightSizeLargeFlexShrink,
      boxSizing: modeLightSizeLargeBoxSizing,
      padding: modeLightSizeLargePadding,
    };
  }, [
    modeLightSizeLargeFlexShrink,
    modeLightSizeLargeBoxSizing,
    modeLightSizeLargePadding,
  ]);

  const dollarSignIconStyle = useMemo(() => {
    return {
      width: dollarSignIconWidth,
      height: dollarSignIconHeight,
    };
  }, [dollarSignIconWidth, dollarSignIconHeight]);

  return (
    <div
      className="rounded-221xl bg-pri-purple-900 flex flex-row items-center justify-center p-4"
      style={modeLightSizeLargeStyle}
    >
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
        alt=""
        src={dollarSign}
        style={dollarSignIconStyle}
      />
    </div>
  );
};

export default ModeLightSizeLarge;
