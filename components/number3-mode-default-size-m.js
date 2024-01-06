import { useMemo } from "react";
import SocialIconsGithubSizeMedi from "./social-icons-github-size-medi";

const Number3ModeDefaultSizeM = ({
  number3ModeDefaultSizeMFlexShrink,
  frameIconWidth,
  frameIconHeight,
  socialIconWidth,
  socialIconHeight,
  socialIconWidth1,
  socialIconHeight1,
  number3ModeDefaultSizeMGap,
}) => {
  const number3ModeDefaultSizeMStyle = useMemo(() => {
    return {
      flexShrink: number3ModeDefaultSizeMFlexShrink,
      gap: number3ModeDefaultSizeMGap,
    };
  }, [number3ModeDefaultSizeMFlexShrink, number3ModeDefaultSizeMGap]);

  const frameIcon6Style = useMemo(() => {
    return {
      width: frameIconWidth,
      height: frameIconHeight,
    };
  }, [frameIconWidth, frameIconHeight]);

  const socialIconStyle = useMemo(() => {
    return {
      width: socialIconWidth,
      height: socialIconHeight,
    };
  }, [socialIconWidth, socialIconHeight]);

  const socialIcon1Style = useMemo(() => {
    return {
      width: socialIconWidth1,
      height: socialIconHeight1,
    };
  }, [socialIconWidth1, socialIconHeight1]);

  return (
    <div
      className="flex flex-row items-center justify-center gap-[24px]"
      style={number3ModeDefaultSizeMStyle}
    >
      <SocialIconsGithubSizeMedi
        socialIconsGithubSizeMediFlexShrink="0"
        frameIconWidth="20px"
        frameIconHeight="20px"
      />
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/social@2x.png"
        style={socialIconStyle}
      />
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/social@2x.png"
        style={socialIcon1Style}
      />
    </div>
  );
};

export default Number3ModeDefaultSizeM;
