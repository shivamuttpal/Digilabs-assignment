import { useMemo } from "react";

const SocialIconsGithubSizeMedi = ({
  socialIconsGithubSizeMediFlexShrink,
  frameIconWidth,
  frameIconHeight,
}) => {
  const socialIconsGithubSizeMediStyle = useMemo(() => {
    return {
      flexShrink: socialIconsGithubSizeMediFlexShrink,
    };
  }, [socialIconsGithubSizeMediFlexShrink]);

  const frameIcon6Style = useMemo(() => {
    return {
      width: frameIconWidth,
      height: frameIconHeight,
    };
  }, [frameIconWidth, frameIconHeight]);

  return (
    <div
      className="flex flex-row items-start justify-start"
      style={socialIconsGithubSizeMediStyle}
    >
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/frame@2x.png"
        style={frameIcon6Style}
      />
    </div>
  );
};

export default SocialIconsGithubSizeMedi;
