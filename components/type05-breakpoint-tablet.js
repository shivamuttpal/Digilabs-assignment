import { useMemo } from "react";
import LogoBehanceColorDefault from "./logo-behance-color-default";

const Type05BreakpointTablet = ({
  companyLogo,
  type05BreakpointTabletWidth,
  type05BreakpointTabletPadding,
  containerWidth,
  containerPadding,
  rowWidth,
  logoWidth,
  logoGap,
  logoWidth1,
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
  logoPadding4,
  companyLogoIconWidth3,
  companyLogoIconHeight3,
  logoGap1,
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
  const type05BreakpointTabletStyle = useMemo(() => {
    return {
      width: type05BreakpointTabletWidth,
      padding: type05BreakpointTabletPadding,
    };
  }, [type05BreakpointTabletWidth, type05BreakpointTabletPadding]);

  const container1Style = useMemo(() => {
    return {
      width: containerWidth,
      padding: containerPadding,
    };
  }, [containerWidth, containerPadding]);

  const row1Style = useMemo(() => {
    return {
      width: rowWidth,
    };
  }, [rowWidth]);

  const logoStyle = useMemo(() => {
    return {
      width: logoWidth,
      gap: logoGap,
    };
  }, [logoWidth, logoGap]);

  const logo1Style = useMemo(() => {
    return {
      width: logoWidth1,
    };
  }, [logoWidth1]);

  const logo2Style = useMemo(() => {
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

  const logo3Style = useMemo(() => {
    return {
      padding: logoPadding1,
    };
  }, [logoPadding1]);

  const logoBehanceColorDefaultIconStyle1 = useMemo(() => {
    return {
      width: companyLogoIconWidth1,
      height: companyLogoIconHeight1,
    };
  }, [companyLogoIconWidth1, companyLogoIconHeight1]);

  const logo4Style = useMemo(() => {
    return {
      padding: logoPadding2,
    };
  }, [logoPadding2]);

  const companyLogoStyle = useMemo(() => {
    return {
      width: companyLogoWidth,
      height: companyLogoHeight,
    };
  }, [companyLogoWidth, companyLogoHeight]);

  const logo5Style = useMemo(() => {
    return {
      padding: logoPadding3,
    };
  }, [logoPadding3]);

  const logoBehanceColorDefaultIconStyle2 = useMemo(() => {
    return {
      width: companyLogoIconWidth2,
      height: companyLogoIconHeight2,
    };
  }, [companyLogoIconWidth2, companyLogoIconHeight2]);

  const logo6Style = useMemo(() => {
    return {
      padding: logoPadding4,
    };
  }, [logoPadding4]);

  const logoBehanceColorDefaultIconStyle3 = useMemo(() => {
    return {
      width: companyLogoIconWidth3,
      height: companyLogoIconHeight3,
    };
  }, [companyLogoIconWidth3, companyLogoIconHeight3]);

  const logo7Style = useMemo(() => {
    return {
      gap: logoGap1,
    };
  }, [logoGap1]);

  const logo8Style = useMemo(() => {
    return {
      padding: logoPadding5,
    };
  }, [logoPadding5]);

  const companyLogo1Style = useMemo(() => {
    return {
      width: companyLogoWidth1,
      height: companyLogoHeight1,
    };
  }, [companyLogoWidth1, companyLogoHeight1]);

  const logo9Style = useMemo(() => {
    return {
      padding: logoPadding6,
    };
  }, [logoPadding6]);

  const logoBehanceColorDefaultIconStyle4 = useMemo(() => {
    return {
      width: companyLogoIconWidth4,
      height: companyLogoIconHeight4,
    };
  }, [companyLogoIconWidth4, companyLogoIconHeight4]);

  const logo10Style = useMemo(() => {
    return {
      padding: logoPadding7,
    };
  }, [logoPadding7]);

  const logoBehanceColorDefaultIconStyle5 = useMemo(() => {
    return {
      width: companyLogoIconWidth5,
      height: companyLogoIconHeight5,
    };
  }, [companyLogoIconWidth5, companyLogoIconHeight5]);

  return (
    <div
      className="bg-white w-[768px] flex flex-col items-center justify-center py-24 px-8 box-border"
      style={type05BreakpointTabletStyle}
    >
      <div
        className="w-[704px] flex flex-col items-center justify-center py-0 px-8 box-border"
        style={container1Style}
      >
        <div
          className="w-[640px] flex flex-col items-center justify-center"
          style={row1Style}
        >
          <div
            className="w-[640px] flex flex-col items-center justify-start gap-[32px]"
            style={logoStyle}
          >
            <div
              className="w-[640px] flex flex-row items-center justify-between"
              style={logo1Style}
            >
              <div
                className="shrink-0 flex flex-col items-center justify-center p-2"
                style={logo2Style}
              >
                <LogoBehanceColorDefault
                  logoBehanceColorDefaultLo="/company-logo@2x.png"
                  logoBehanceColorDefaultIcWidth="98px"
                  logoBehanceColorDefaultIcPosition="relative"
                  logoBehanceColorDefaultIcFlexShrink="0"
                  logoBehanceColorDefaultIcOverflow="hidden"
                  logoBehanceColorDefaultIcHeight="24px"
                />
              </div>
              <div
                className="shrink-0 flex flex-col items-center justify-center p-2"
                style={logo3Style}
              >
                <LogoBehanceColorDefault
                  logoBehanceColorDefaultLo="/company-logo@2x.png"
                  logoBehanceColorDefaultIcWidth="68px"
                  logoBehanceColorDefaultIcPosition="relative"
                  logoBehanceColorDefaultIcFlexShrink="unset"
                  logoBehanceColorDefaultIcOverflow="unset"
                  logoBehanceColorDefaultIcHeight="24px"
                />
              </div>
              <div
                className="shrink-0 flex flex-col items-center justify-center p-2"
                style={logo4Style}
              >
                <div
                  className="relative w-[124px] h-6"
                  style={companyLogoStyle}
                >
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image-20@2x.png"
                  />
                </div>
              </div>
              <div
                className="shrink-0 flex flex-col items-center justify-center p-2"
                style={logo5Style}
              >
                <LogoBehanceColorDefault
                  logoBehanceColorDefaultLo="/company-logo@2x.png"
                  logoBehanceColorDefaultIcWidth="106px"
                  logoBehanceColorDefaultIcPosition="relative"
                  logoBehanceColorDefaultIcFlexShrink="0"
                  logoBehanceColorDefaultIcOverflow="hidden"
                  logoBehanceColorDefaultIcHeight="24px"
                />
              </div>
              <div
                className="shrink-0 flex flex-col items-center justify-center p-2"
                style={logo6Style}
              >
                <LogoBehanceColorDefault
                  logoBehanceColorDefaultLo="/company-logo@2x.png"
                  logoBehanceColorDefaultIcWidth="98px"
                  logoBehanceColorDefaultIcPosition="relative"
                  logoBehanceColorDefaultIcFlexShrink="unset"
                  logoBehanceColorDefaultIcOverflow="unset"
                  logoBehanceColorDefaultIcHeight="24px"
                />
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-start gap-[16px]"
              style={logo7Style}
            >
              <div
                className="shrink-0 flex flex-col items-center justify-center p-2"
                style={logo8Style}
              >
                <div
                  className="relative w-[120px] h-6"
                  style={companyLogo1Style}
                >
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image-18@2x.png"
                  />
                </div>
              </div>
              <div
                className="shrink-0 flex flex-col items-center justify-center p-2"
                style={logo9Style}
              >
                <LogoBehanceColorDefault
                  logoBehanceColorDefaultLo="/company-logo@2x.png"
                  logoBehanceColorDefaultIcWidth="102px"
                  logoBehanceColorDefaultIcPosition="relative"
                  logoBehanceColorDefaultIcFlexShrink="0"
                  logoBehanceColorDefaultIcOverflow="hidden"
                  logoBehanceColorDefaultIcHeight="24px"
                />
              </div>
              <div
                className="shrink-0 flex flex-col items-center justify-center p-2"
                style={logo10Style}
              >
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
      </div>
    </div>
  );
};

export default Type05BreakpointTablet;
