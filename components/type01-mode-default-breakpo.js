import { useMemo } from "react";
import LogoBehanceColorDefault from "./logo-behance-color-default";
import AignCentre from "./aign-centre";
import Stars4 from "./stars4";

const Type01ModeDefaultBreakpo = ({
  companyLogo,
  testimonial,
  type01ModeDefaultBreakpoWidth,
  containerWidth,
  rowWidth,
  columnWidth,
  contentWidth,
  companyLogoIconWidth,
  companyLogoIconHeight,
  companyLogoIconOverflow,
  companyLogoIconFlexShrink,
  testimonialLineHeight,
  baseAvatarsIconWidth,
  baseAvatarsIconHeight,
  contentWidth1,
  nameLineHeight,
  designationLineHeight,
  frameIconWidth,
  frameIconHeight,
  frameIconWidth1,
  frameIconHeight1,
  frameIconWidth2,
  frameIconHeight2,
  frameIconWidth3,
  frameIconHeight3,
}) => {
  const type01ModeDefaultBreakpo4Style = useMemo(() => {
    return {
      width: type01ModeDefaultBreakpoWidth,
    };
  }, [type01ModeDefaultBreakpoWidth]);

  const container19Style = useMemo(() => {
    return {
      width: containerWidth,
    };
  }, [containerWidth]);

  const row8Style = useMemo(() => {
    return {
      width: rowWidth,
    };
  }, [rowWidth]);

  const column6Style = useMemo(() => {
    return {
      width: columnWidth,
    };
  }, [columnWidth]);

  const content58Style = useMemo(() => {
    return {
      width: contentWidth,
    };
  }, [contentWidth]);

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

  const testimonial2Style = useMemo(() => {
    return {
      lineHeight: testimonialLineHeight,
    };
  }, [testimonialLineHeight]);

  const sizeExtraLargeTypeProfileStyle = useMemo(() => {
    return {
      width: baseAvatarsIconWidth,
      height: baseAvatarsIconHeight,
    };
  }, [baseAvatarsIconWidth, baseAvatarsIconHeight]);

  const content7Style = useMemo(() => {
    return {
      width: contentWidth1,
    };
  }, [contentWidth1]);

  const nameStyle = useMemo(() => {
    return {
      lineHeight: nameLineHeight,
    };
  }, [nameLineHeight]);

  const designationStyle = useMemo(() => {
    return {
      lineHeight: designationLineHeight,
    };
  }, [designationLineHeight]);

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
      className="bg-white w-[1440px] flex flex-col items-center justify-center py-24 px-20 box-border text-center text-13xl text-neutral-100 font-h700-62-semibold"
      style={type01ModeDefaultBreakpo4Style}
    >
      <div
        className="w-[1280px] flex flex-col items-center justify-center p-8 box-border"
        style={container19Style}
      >
        <div
          className="w-[1216px] flex flex-col items-center justify-center"
          style={row8Style}
        >
          <div
            className="w-[824px] flex flex-col items-center justify-start gap-[48px]"
            style={column6Style}
          >
            <div
              className="w-[824px] flex flex-col items-center justify-start gap-[32px]"
              style={content58Style}
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
                className="self-stretch relative leading-[40px] font-medium"
                style={testimonial2Style}
              >
                {testimonial}
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[12px]">
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
      </div>
    </div>
  );
};

export default Type01ModeDefaultBreakpo;
