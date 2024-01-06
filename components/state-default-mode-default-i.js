import { useMemo } from "react";

const StateDefaultModeDefaultI = ({
  menu,
  chevronDown,
  stateDefaultModeDefaultIFlexShrink,
  menuLineHeight,
  chevronDownIconWidth,
  chevronDownIconHeight,
}) => {
  const stateDefaultModeDefaultIStyle = useMemo(() => {
    return {
      flexShrink: stateDefaultModeDefaultIFlexShrink,
    };
  }, [stateDefaultModeDefaultIFlexShrink]);

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

  return (
    <div
      className="flex flex-row items-center justify-start gap-[8px] text-center text-base text-neutral-200 font-h05-12-medium"
      style={stateDefaultModeDefaultIStyle}
    >
      <div className="relative leading-[20px] font-medium" style={menuStyle}>
        {menu}
      </div>
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
        alt=""
        src={chevronDown}
        style={chevronDownIconStyle}
      />
    </div>
  );
};

export default StateDefaultModeDefaultI;
