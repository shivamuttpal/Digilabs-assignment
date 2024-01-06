import { useMemo } from "react";

const SizeExtraLargeTypeProfile = ({
  sizeExtraLargeTypeProfile,
  sizeExtraLargeTypeProfilePosition,
  sizeExtraLargeTypeProfileWidth,
  sizeExtraLargeTypeProfileHeight,
}) => {
  const sizeExtraLargeTypeProfileStyle = useMemo(() => {
    return {
      position: sizeExtraLargeTypeProfilePosition,
      width: sizeExtraLargeTypeProfileWidth,
      height: sizeExtraLargeTypeProfileHeight,
    };
  }, [
    sizeExtraLargeTypeProfilePosition,
    sizeExtraLargeTypeProfileWidth,
    sizeExtraLargeTypeProfileHeight,
  ]);

  return (
    <img
      className="w-16 h-16 object-cover"
      alt=""
      src={sizeExtraLargeTypeProfile}
      style={sizeExtraLargeTypeProfileStyle}
    />
  );
};

export default SizeExtraLargeTypeProfile;
