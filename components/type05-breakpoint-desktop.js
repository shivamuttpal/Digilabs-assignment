import { useMemo } from "react";
import LogoBehanceColorDefault from "./logo-behance-color-default";

const Type05BreakpointDesktop = ({
  companyLogo,
  companyLogo1,
  companyLogo2,
  companyLogo3,
  type05BreakpointDesktopWidth,
  containerWidth,
  containerPadding,
  rowWidth,
  companyLogoIconWidth,
  companyLogoIconHeight,
  companyLogoIconWidth1,
  companyLogoIconHeight1,
  companyLogoWidth,
  companyLogoHeight,
  companyLogoIconWidth2,
  companyLogoIconHeight2,
  companyLogoIconWidth3,
  companyLogoIconHeight3,
  companyLogoWidth1,
  companyLogoHeight1,
  companyLogoIconWidth4,
  companyLogoIconHeight4,
  companyLogoIconWidth5,
  companyLogoIconHeight5,
}) => {
  const type05BreakpointDesktopStyle = useMemo(() => {
    return {
      width: type05BreakpointDesktopWidth,
    };
  }, [type05BreakpointDesktopWidth]);

  const container22Style = useMemo(() => {
    return {
      width: containerWidth,
      padding: containerPadding,
    };
  }, [containerWidth, containerPadding]);

  const row11Style = useMemo(() => {
    return {
      width: rowWidth,
    };
  }, [rowWidth]);

  const logoBehanceColorDefaultIconStyle = useMemo(() => {
    return {
      width: companyLogoIconWidth,
      height: companyLogoIconHeight,
    };
  }, [companyLogoIconWidth, companyLogoIconHeight]);

  const logoBehanceColorDefaultIconStyle1 = useMemo(() => {
    return {
      width: companyLogoIconWidth1,
      height: companyLogoIconHeight1,
    };
  }, [companyLogoIconWidth1, companyLogoIconHeight1]);

  const companyLogo4Style = useMemo(() => {
    return {
      width: companyLogoWidth,
      height: companyLogoHeight,
    };
  }, [companyLogoWidth, companyLogoHeight]);

  const logoBehanceColorDefaultIconStyle2 = useMemo(() => {
    return {
      width: companyLogoIconWidth2,
      height: companyLogoIconHeight2,
    };
  }, [companyLogoIconWidth2, companyLogoIconHeight2]);

  const logoBehanceColorDefaultIconStyle3 = useMemo(() => {
    return {
      width: companyLogoIconWidth3,
      height: companyLogoIconHeight3,
    };
  }, [companyLogoIconWidth3, companyLogoIconHeight3]);

  const companyLogo5Style = useMemo(() => {
    return {
      width: companyLogoWidth1,
      height: companyLogoHeight1,
    };
  }, [companyLogoWidth1, companyLogoHeight1]);

  const logoBehanceColorDefaultIconStyle4 = useMemo(() => {
    return {
      width: companyLogoIconWidth4,
      height: companyLogoIconHeight4,
    };
  }, [companyLogoIconWidth4, companyLogoIconHeight4]);

  const logoBehanceColorDefaultIconStyle5 = useMemo(() => {
    return {
      width: companyLogoIconWidth5,
      height: companyLogoIconHeight5,
    };
  }, [companyLogoIconWidth5, companyLogoIconHeight5]);

  return (
    <div
      className="bg-white w-[1440px] flex flex-col items-center justify-center py-24 px-20 box-border"
      style={type05BreakpointDesktopStyle}
    >
      <div
        className="w-[1280px] flex flex-col items-center justify-center py-0 px-8 box-border"
        style={container22Style}
      >
        <div
          className="w-[1216px] flex flex-row items-center justify-between"
          style={row11Style}
        >
          <div className="shrink-0 flex flex-col items-center justify-center p-2">
            <LogoBehanceColorDefault
              logoBehanceColorDefaultLo="/company-logo@2x.png"
              logoBehanceColorDefaultIcWidth="98px"
              logoBehanceColorDefaultIcPosition="relative"
              logoBehanceColorDefaultIcFlexShrink="0"
              logoBehanceColorDefaultIcOverflow="hidden"
              logoBehanceColorDefaultIcHeight="24px"
            />
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center p-2">
            <LogoBehanceColorDefault
              logoBehanceColorDefaultLo="/company-logo@2x.png"
              logoBehanceColorDefaultIcWidth="68px"
              logoBehanceColorDefaultIcPosition="relative"
              logoBehanceColorDefaultIcFlexShrink="unset"
              logoBehanceColorDefaultIcOverflow="unset"
              logoBehanceColorDefaultIcHeight="24px"
            />
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center p-2">
            <div className="relative w-[124px] h-6" style={companyLogo4Style}>
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-20@2x.png"
              />
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center p-2">
            <LogoBehanceColorDefault
              logoBehanceColorDefaultLo="/company-logo@2x.png"
              logoBehanceColorDefaultIcWidth="106px"
              logoBehanceColorDefaultIcPosition="relative"
              logoBehanceColorDefaultIcFlexShrink="0"
              logoBehanceColorDefaultIcOverflow="hidden"
              logoBehanceColorDefaultIcHeight="24px"
            />
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center p-2">
            <LogoBehanceColorDefault
              logoBehanceColorDefaultLo="/company-logo@2x.png"
              logoBehanceColorDefaultIcWidth="98px"
              logoBehanceColorDefaultIcPosition="relative"
              logoBehanceColorDefaultIcFlexShrink="unset"
              logoBehanceColorDefaultIcOverflow="unset"
              logoBehanceColorDefaultIcHeight="24px"
            />
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center p-2">
            <div className="relative w-[120px] h-6" style={companyLogo5Style}>
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-18@2x.png"
              />
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center p-2">
            <LogoBehanceColorDefault
              logoBehanceColorDefaultLo="/company-logo@2x.png"
              logoBehanceColorDefaultIcWidth="102px"
              logoBehanceColorDefaultIcPosition="relative"
              logoBehanceColorDefaultIcFlexShrink="0"
              logoBehanceColorDefaultIcOverflow="hidden"
              logoBehanceColorDefaultIcHeight="24px"
            />
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center p-2">
            <LogoBehanceColorDefault
              logoBehanceColorDefaultLo="/company-logo@2x.png"
              logoBehanceColorDefaultIcWidth="132px"
              logoBehanceColorDefaultIcPosition="relative"
              logoBehanceColorDefaultIcFlexShrink="0"
              logoBehanceColorDefaultIcOverflow="hidden"
              logoBehanceColorDefaultIcHeight="24px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type05BreakpointDesktop;
