import { useMemo } from "react";
import Number3ModeDefaultSizeM from "./number3-mode-default-size-m";

const Footer = ({
  propAlignItems,
  propJustifyContent,
  propTextAlign,
  propWidth,
  propAlignSelf,
}) => {
  const content66Style = useMemo(() => {
    return {
      alignItems: propAlignItems,
    };
  }, [propAlignItems]);

  const content67Style = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
    };
  }, [propJustifyContent]);

  const copyright3Style = useMemo(() => {
    return {
      textAlign: propTextAlign,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propTextAlign, propWidth, propAlignSelf]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[1.33rem] text-left text-[0.78rem] text-neutral-400 font-h05-12-medium"
      style={content66Style}
    >
      <div
        className="flex flex-row items-start justify-start"
        style={content67Style}
      >
        <Number3ModeDefaultSizeM
          number3ModeDefaultSizeMFlexShrink="0"
          frameIconWidth="1.11rem"
          frameIconHeight="1.11rem"
          socialIconWidth="1.11rem"
          socialIconHeight="1.11rem"
          socialIconWidth1="1.11rem"
          socialIconHeight1="1.11rem"
          number3ModeDefaultSizeMGap="1.33rem"
        />
      </div>
      <div
        className="relative leading-[1.11rem] whitespace-pre-wrap inline-block w-[13.72rem]"
        style={copyright3Style}
      >
        © 2023 Mode UI Inc. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
