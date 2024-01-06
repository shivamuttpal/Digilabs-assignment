import { useMemo } from "react";

const LogoBehanceColorDefault = ({
  logoBehanceColorDefaultLo,
  logoBehanceColorDefaultIcWidth,
  logoBehanceColorDefaultIcPosition,
  logoBehanceColorDefaultIcFlexShrink,
  logoBehanceColorDefaultIcOverflow,
  logoBehanceColorDefaultIcHeight,
}) => {
  const logoBehanceColorDefaultIconStyle = useMemo(() => {
    return {
      width: logoBehanceColorDefaultIcWidth,
      position: logoBehanceColorDefaultIcPosition,
      flexShrink: logoBehanceColorDefaultIcFlexShrink,
      overflow: logoBehanceColorDefaultIcOverflow,
      height: logoBehanceColorDefaultIcHeight,
    };
  }, [
    logoBehanceColorDefaultIcWidth,
    logoBehanceColorDefaultIcPosition,
    logoBehanceColorDefaultIcFlexShrink,
    logoBehanceColorDefaultIcOverflow,
    logoBehanceColorDefaultIcHeight,
  ]);

  return (
    <img
      className="w-[132px] h-6 overflow-hidden object-cover"
      alt=""
      src={logoBehanceColorDefaultLo}
      style={logoBehanceColorDefaultIconStyle}
    />
  );
};

export default LogoBehanceColorDefault;
