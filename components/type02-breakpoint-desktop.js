import { useMemo } from "react";

const Type02BreakpointDesktop = ({
  type02BreakpointDesktopTy,
  type02BreakpointDesktopIcPosition,
  type02BreakpointDesktopIcFlexShrink,
  type02BreakpointDesktopIcWidth,
  type02BreakpointDesktopIcHeight,
}) => {
  const type02BreakpointDesktopIconStyle = useMemo(() => {
    return {
      position: type02BreakpointDesktopIcPosition,
      flexShrink: type02BreakpointDesktopIcFlexShrink,
      width: type02BreakpointDesktopIcWidth,
      height: type02BreakpointDesktopIcHeight,
    };
  }, [
    type02BreakpointDesktopIcPosition,
    type02BreakpointDesktopIcFlexShrink,
    type02BreakpointDesktopIcWidth,
    type02BreakpointDesktopIcHeight,
  ]);

  return (
    <img
      className="rounded-lg w-[592px] h-[490px] overflow-hidden object-cover"
      alt=""
      src={type02BreakpointDesktopTy}
      style={type02BreakpointDesktopIconStyle}
    />
  );
};

export default Type02BreakpointDesktop;
