import { useMemo } from "react";
import LogoBehanceColorDefault from "./logo-behance-color-default";
import AignCentre from "./aign-centre";
import Stars4 from "./stars4";

const Type01ModeDefaultBreakpo2 = ({
  companyLogo,
  testimonial,
  type01ModeDefaultBreakpoPadding,
  type01ModeDefaultBreakpoFlexShrink,
  containerGap,
  contentWidth,
  contentGap,
  companyLogoIconWidth,
  companyLogoIconHeight,
  companyLogoIconOverflow,
  companyLogoIconFlexShrink,
  testimonialFontSize,
  testimonialLineHeight,
  avatarGap,
  avatarNameGap,
  baseAvatarsIconWidth,
  baseAvatarsIconHeight,
  contentWidth1,
  contentGap1,
  nameFontSize,
  nameLineHeight,
  designationFontSize,
  designationLineHeight,
  ratingPadding,
  frameDivGap,
  frameIconWidth,
  frameIconHeight,
  frameIconWidth1,
  frameIconHeight1,
  frameIconWidth2,
  frameIconHeight2,
  frameIconWidth3,
  frameIconHeight3,
}) => {
  const type01ModeDefaultBreakpo2Style = useMemo(() => {
    return {
      padding: type01ModeDefaultBreakpoPadding,
      flexShrink: type01ModeDefaultBreakpoFlexShrink,
    };
  }, [type01ModeDefaultBreakpoPadding, type01ModeDefaultBreakpoFlexShrink]);

  const container12Style = useMemo(() => {
    return {
      gap: containerGap,
    };
  }, [containerGap]);

  const content31Style = useMemo(() => {
    return {
      width: contentWidth,
      gap: contentGap,
    };
  }, [contentWidth, contentGap]);

  const logoBehanceColorDefaultIconStyle = useMemo(() => {
    return {
      width: companyLogoIconWidth,
      height: companyLogoIconHeight,
      overflow: companyLogoIconOverflow,
      flexShrink: companyLogoIconFlexShrink,
    };
  }, [
    companyLogoIconWidth,
    companyLogoIconHeight,
    companyLogoIconOverflow,
    companyLogoIconFlexShrink,
  ]);

  const testimonial1Style = useMemo(() => {
    return {
      fontSize: testimonialFontSize,
      lineHeight: testimonialLineHeight,
    };
  }, [testimonialFontSize, testimonialLineHeight]);

  const avatar1Style = useMemo(() => {
    return {
      gap: avatarGap,
    };
  }, [avatarGap]);

  const aignCentreStyle = useMemo(() => {
    return {
      gap: avatarNameGap,
    };
  }, [avatarNameGap]);

  const sizeExtraLargeTypeProfileStyle = useMemo(() => {
    return {
      width: baseAvatarsIconWidth,
      height: baseAvatarsIconHeight,
    };
  }, [baseAvatarsIconWidth, baseAvatarsIconHeight]);

  const content7Style = useMemo(() => {
    return {
      width: contentWidth1,
      gap: contentGap1,
    };
  }, [contentWidth1, contentGap1]);

  const nameStyle = useMemo(() => {
    return {
      fontSize: nameFontSize,
      lineHeight: nameLineHeight,
    };
  }, [nameFontSize, nameLineHeight]);

  const designationStyle = useMemo(() => {
    return {
      fontSize: designationFontSize,
      lineHeight: designationLineHeight,
    };
  }, [designationFontSize, designationLineHeight]);

  const stars4Style = useMemo(() => {
    return {
      padding: ratingPadding,
    };
  }, [ratingPadding]);

  const frameDiv11Style = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

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
      className="bg-white flex flex-row items-center justify-center py-16 px-4 text-center text-xl text-neutral-100 font-h700-62-semibold"
      style={type01ModeDefaultBreakpo2Style}
    >
      <div
        className="shrink-0 flex flex-col items-center justify-start gap-[48px]"
        style={container12Style}
      >
        <div
          className="w-[343px] flex flex-col items-center justify-start gap-[32px]"
          style={content31Style}
        >
          <LogoBehanceColorDefault
            logoBehanceColorDefaultLo="/company-logo@2x.png"
            logoBehanceColorDefaultIcWidth="98px"
            logoBehanceColorDefaultIcPosition="relative"
            logoBehanceColorDefaultIcFlexShrink="unset"
            logoBehanceColorDefaultIcOverflow="unset"
            logoBehanceColorDefaultIcHeight="24px"
          />
          <div
            className="self-stretch relative leading-[24px] font-medium"
            style={testimonial1Style}
          >
            {testimonial}
          </div>
        </div>
        <div
          className="shrink-0 flex flex-col items-center justify-start gap-[12px]"
          style={avatar1Style}
        >
          <AignCentre
            sizeExtraLargeTypeProfile="/base-avatars@2x.png"
            designation="Lead Designer"
            aignCentreFlexShrink="0"
            baseAvatarsIconWidth="64px"
            baseAvatarsIconHeight="64px"
            contentWidth="134px"
            nameLineHeight="20px"
            designationLineHeight="20px"
            aignCentreGap="16px"
            contentGap="4px"
            nameFontSize="16px"
            designationFontSize="14px"
          />
          <Stars4
            frame="/frame@2x.png"
            frame1="/frame@2x.png"
            frame2="/frame@2x.png"
            frame3="/frame@2x.png"
            stars4AlignSelf="stretch"
            frameDivFlexShrink="unset"
            frameIconWidth="16px"
            frameIconHeight="16px"
            frameIconWidth1="16px"
            frameIconHeight1="16px"
            frameIconWidth2="16px"
            frameIconHeight2="16px"
            frameIconWidth3="16px"
            frameIconHeight3="16px"
            stars4BoxSizing="border-box"
            stars4Padding="4px 8px"
            frameDivGap="12px"
          />
        </div>
      </div>
    </div>
  );
};

export default Type01ModeDefaultBreakpo2;
