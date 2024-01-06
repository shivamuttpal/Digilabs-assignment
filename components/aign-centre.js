import { useMemo } from "react";
import SizeExtraLargeTypeProfile from "./size-extra-large-type-profile";

const AignCentre = ({
  sizeExtraLargeTypeProfile,
  designation,
  aignCentreFlexShrink,
  baseAvatarsIconWidth,
  baseAvatarsIconHeight,
  contentWidth,
  nameLineHeight,
  designationLineHeight,
  aignCentreGap,
  contentGap,
  nameFontSize,
  designationFontSize,
}) => {
  const aignCentreStyle = useMemo(() => {
    return {
      flexShrink: aignCentreFlexShrink,
      gap: aignCentreGap,
    };
  }, [aignCentreFlexShrink, aignCentreGap]);

  const sizeExtraLargeTypeProfileStyle = useMemo(() => {
    return {
      width: baseAvatarsIconWidth,
      height: baseAvatarsIconHeight,
    };
  }, [baseAvatarsIconWidth, baseAvatarsIconHeight]);

  const content7Style = useMemo(() => {
    return {
      width: contentWidth,
      gap: contentGap,
    };
  }, [contentWidth, contentGap]);

  const nameStyle = useMemo(() => {
    return {
      lineHeight: nameLineHeight,
      fontSize: nameFontSize,
    };
  }, [nameLineHeight, nameFontSize]);

  const designationStyle = useMemo(() => {
    return {
      lineHeight: designationLineHeight,
      fontSize: designationFontSize,
    };
  }, [designationLineHeight, designationFontSize]);

  return (
    <div
      className="flex flex-col items-center justify-center gap-[16px] text-center text-base text-gray font-h05-12-medium"
      style={aignCentreStyle}
    >
      <SizeExtraLargeTypeProfile
        sizeExtraLargeTypeProfile="/base-avatars@2x.png"
        sizeExtraLargeTypeProfilePosition="relative"
        sizeExtraLargeTypeProfileWidth="64px"
        sizeExtraLargeTypeProfileHeight="64px"
      />
      <div
        className="w-[134px] flex flex-col items-center justify-start gap-[4px]"
        style={content7Style}
      >
        <div
          className="self-stretch relative leading-[20px] font-medium"
          style={nameStyle}
        >
          Nick Babich
        </div>
        <div
          className="self-stretch relative text-sm leading-[20px] text-neutral-400"
          style={designationStyle}
        >
          {designation}
        </div>
      </div>
    </div>
  );
};

export default AignCentre;
