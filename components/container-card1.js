import { useMemo } from "react";
import ColorDefault from "./color-default";

const ContainerCard1 = ({ propAlignItems, propTextAlign }) => {
  const content65Style = useMemo(() => {
    return {
      alignItems: propAlignItems,
    };
  }, [propAlignItems]);

  const intro3Style = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[1.78rem] text-left text-[0.89rem] text-neutral-400 font-h05-12-medium">
      <div className="self-stretch flex flex-col items-start justify-center">
        <div
          className="self-stretch flex flex-col items-start justify-center gap-[0.89rem]"
          style={content65Style}
        >
          <ColorDefault
            colorDefaultFlexShrink="unset"
            colorDefaultAlignItems="flex-start"
            colorDefaultPadding="0.22rem 0rem"
            vectorIconWidth="4.67rem"
            vectorIconHeight="0.89rem"
            colorDefaultBoxSizing="border-box"
          />
          <div
            className="self-stretch relative leading-[1.56rem] font-medium"
            style={intro3Style}
          >
            Mode UI is a comprehensive design system that empowers designers and
            developers to create cohesive and visually stunning user interfaces
            across various platforms and devices
          </div>
        </div>
      </div>
      <div className="self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-neutral-1300" />
    </div>
  );
};

export default ContainerCard1;
