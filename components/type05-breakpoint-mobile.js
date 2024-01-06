import { useMemo } from "react";
import LogoBehanceColorDefault from "./logo-behance-color-default";

const Type05BreakpointMobile = ({
  companyLogo,
  image20,
  companyLogo1,
  type05BreakpointMobileWidth,
  type05BreakpointMobilePadding,
  containerWidth,
  logoGap,
  logoWidth,
  logoPadding,
  companyLogoIconWidth,
  companyLogoIconHeight,
  logoPadding1,
  companyLogoIconWidth1,
  companyLogoIconHeight1,
  logoPadding2,
  companyLogoWidth,
  companyLogoHeight,
  logoPadding3,
  companyLogoIconWidth2,
  companyLogoIconHeight2,
  logoWidth1,
  logoPadding4,
  companyLogoIconWidth3,
  companyLogoIconHeight3,
  logoPadding5,
  companyLogoWidth1,
  companyLogoHeight1,
  logoPadding6,
  companyLogoIconWidth4,
  companyLogoIconHeight4,
  logoPadding7,
  companyLogoIconWidth5,
  companyLogoIconHeight5,
}) => {
  const type05BreakpointMobileStyle = useMemo(() => {
    return {
      width: type05BreakpointMobileWidth,
      padding: type05BreakpointMobilePadding,
    };
  }, [type05BreakpointMobileWidth, type05BreakpointMobilePadding]);

  const container8Style = useMemo(() => {
    return {
      width: containerWidth,
    };
  }, [containerWidth]);

  const logo12Style = useMemo(() => {
    return {
      gap: logoGap,
    };
  }, [logoGap]);

  const logo13Style = useMemo(() => {
    return {
      width: logoWidth,
    };
  }, [logoWidth]);

  const logo14Style = useMemo(() => {
    return {
      padding: logoPadding,
    };
  }, [logoPadding]);

  const logoBehanceColorDefaultIconStyle = useMemo(() => {
    return {
      width: companyLogoIconWidth,
      height: companyLogoIconHeight,
    };
  }, [companyLogoIconWidth, companyLogoIconHeight]);

  const logo15Style = useMemo(() => {
    return {
      padding: logoPadding1,
    };
  }, [logoPadding1]);

  const companyLogoIconStyle = useMemo(() => {
    return {
      width: companyLogoIconWidth1,
      height: companyLogoIconHeight1,
    };
  }, [companyLogoIconWidth1, companyLogoIconHeight1]);

  const logo16Style = useMemo(() => {
    return {
      padding: logoPadding2,
    };
  }, [logoPadding2]);

  const companyLogo2Style = useMemo(() => {
    return {
      width: companyLogoWidth,
      height: companyLogoHeight,
    };
  }, [companyLogoWidth, companyLogoHeight]);

  const logo17Style = useMemo(() => {
    return {
      padding: logoPadding3,
    };
  }, [logoPadding3]);

  const logoBehanceColorDefaultIconStyle1 = useMemo(() => {
    return {
      width: companyLogoIconWidth2,
      height: companyLogoIconHeight2,
    };
  }, [companyLogoIconWidth2, companyLogoIconHeight2]);

  const logo18Style = useMemo(() => {
    return {
      width: logoWidth1,
    };
  }, [logoWidth1]);

  const logo19Style = useMemo(() => {
    return {
      padding: logoPadding4,
    };
  }, [logoPadding4]);

  const logoBehanceColorDefaultIconStyle2 = useMemo(() => {
    return {
      width: companyLogoIconWidth3,
      height: companyLogoIconHeight3,
    };
  }, [companyLogoIconWidth3, companyLogoIconHeight3]);

  const logo20Style = useMemo(() => {
    return {
      padding: logoPadding5,
    };
  }, [logoPadding5]);

  const companyLogo3Style = useMemo(() => {
    return {
      width: companyLogoWidth1,
      height: companyLogoHeight1,
    };
  }, [companyLogoWidth1, companyLogoHeight1]);

  const logo21Style = useMemo(() => {
    return {
      padding: logoPadding6,
    };
  }, [logoPadding6]);

  const logoBehanceColorDefaultIconStyle3 = useMemo(() => {
    return {
      width: companyLogoIconWidth4,
      height: companyLogoIconHeight4,
    };
  }, [companyLogoIconWidth4, companyLogoIconHeight4]);

  const logo22Style = useMemo(() => {
    return {
      padding: logoPadding7,
    };
  }, [logoPadding7]);

  const logoBehanceColorDefaultIconStyle4 = useMemo(() => {
    return {
      width: companyLogoIconWidth5,
      height: companyLogoIconHeight5,
    };
  }, [companyLogoIconWidth5, companyLogoIconHeight5]);

  return (
    <div
      className="bg-white w-[375px] flex flex-col items-center justify-center py-16 px-4 box-border"
      style={type05BreakpointMobileStyle}
    >
      <div
        className="w-[343px] flex flex-col items-center justify-start"
        style={container8Style}
      >
        <div
          className="flex flex-col items-center justify-center gap-[24px]"
          style={logo12Style}
        >
          <div
            className="w-[343px] shrink-0 flex flex-row items-center justify-between"
            style={logo13Style}
          >
            <div
              className="shrink-0 flex flex-col items-center justify-center p-2"
              style={logo14Style}
            >
              <LogoBehanceColorDefault
                logoBehanceColorDefaultLo="/company-logo@2x.png"
                logoBehanceColorDefaultIcWidth="65.3px"
                logoBehanceColorDefaultIcPosition="relative"
                logoBehanceColorDefaultIcFlexShrink="0"
                logoBehanceColorDefaultIcOverflow="hidden"
                logoBehanceColorDefaultIcHeight="16px"
              />
            </div>
            <div
              className="shrink-0 flex flex-col items-center justify-center p-2"
              style={logo15Style}
            >
              <img
                className="relative w-[45.3px] h-4 object-cover"
                alt=""
                src="/company-logo@2x.png"
                style={companyLogoIconStyle}
              />
            </div>
            <div
              className="shrink-0 flex flex-col items-center justify-center p-2"
              style={logo16Style}
            >
              <div
                className="relative w-[82.7px] h-4"
                style={companyLogo2Style}
              >
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src={image20}
                />
              </div>
            </div>
            <div
              className="shrink-0 flex flex-col items-center justify-center p-2"
              style={logo17Style}
            >
              <LogoBehanceColorDefault
                logoBehanceColorDefaultLo="/company-logo@2x.png"
                logoBehanceColorDefaultIcWidth="70.7px"
                logoBehanceColorDefaultIcPosition="relative"
                logoBehanceColorDefaultIcFlexShrink="0"
                logoBehanceColorDefaultIcOverflow="hidden"
                logoBehanceColorDefaultIcHeight="16px"
              />
            </div>
          </div>
          <div
            className="w-[343px] shrink-0 flex flex-row items-center justify-between"
            style={logo18Style}
          >
            <div
              className="shrink-0 flex flex-col items-center justify-center p-2"
              style={logo19Style}
            >
              <LogoBehanceColorDefault
                logoBehanceColorDefaultLo="/company-logo@2x.png"
                logoBehanceColorDefaultIcWidth="64px"
                logoBehanceColorDefaultIcPosition="relative"
                logoBehanceColorDefaultIcFlexShrink="unset"
                logoBehanceColorDefaultIcOverflow="unset"
                logoBehanceColorDefaultIcHeight="16px"
              />
            </div>
            <div
              className="shrink-0 flex flex-col items-center justify-center p-2"
              style={logo20Style}
            >
              <div className="relative w-20 h-4" style={companyLogo3Style}>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image-18@2x.png"
                />
              </div>
            </div>
            <div
              className="shrink-0 flex flex-col items-center justify-center p-2"
              style={logo21Style}
            >
              <LogoBehanceColorDefault
                logoBehanceColorDefaultLo="/company-logo@2x.png"
                logoBehanceColorDefaultIcWidth="68px"
                logoBehanceColorDefaultIcPosition="relative"
                logoBehanceColorDefaultIcFlexShrink="0"
                logoBehanceColorDefaultIcOverflow="hidden"
                logoBehanceColorDefaultIcHeight="16px"
              />
            </div>
            <div
              className="shrink-0 flex flex-col items-center justify-center p-2"
              style={logo22Style}
            >
              <LogoBehanceColorDefault
                logoBehanceColorDefaultLo="/company-logo@2x.png"
                logoBehanceColorDefaultIcWidth="88px"
                logoBehanceColorDefaultIcPosition="relative"
                logoBehanceColorDefaultIcFlexShrink="0"
                logoBehanceColorDefaultIcOverflow="hidden"
                logoBehanceColorDefaultIcHeight="16px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type05BreakpointMobile;
