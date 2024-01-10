import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const ColorDefault = ({
  colorDefaultFlexShrink,
  colorDefaultAlignItems,
  colorDefaultPadding,
  colorDefaultBoxSizing,
}) => {
  const [logoUrl, setLogoUrl] = useState("");
  const [logoWidth, setLogoWidth] = useState(""); // State to store dynamic logo width

  useEffect(() => {
    const fetchLogoUrl = async () => {
      try {
        const response = await axios.get("https://digilab-backend-qz1q.onrender.com/api/settings");
        const logoData = response.data[0];
        setLogoUrl(logoData.logoUrl);

        // Assuming you have a dynamic width value in your data (replace 'dynamicWidthProperty' with the actual property)
        setLogoWidth(logoData.dynamicWidthProperty);
      } catch (error) {
        console.error("Error fetching logo URL:", error);
      }
    };

    fetchLogoUrl();
  }, []);

  const colorDefaultStyle = useMemo(() => {
    return {
      flexShrink: colorDefaultFlexShrink,
      alignItems: colorDefaultAlignItems,
      padding: colorDefaultPadding,
      boxSizing: colorDefaultBoxSizing,
    };
  }, [
    colorDefaultFlexShrink,
    colorDefaultAlignItems,
    colorDefaultPadding,
    colorDefaultBoxSizing,
  ]);

  const vectorIconHeight = 64; // Adjust the height as needed
  const vectorIconStyle = useMemo(() => {
    return {
      width: "auto", // Allow the width to adjust dynamically based on the content
      height: vectorIconHeight,
      maxWidth: "100%", // Ensure the image doesn't exceed its original width
      width: `${logoWidth}px`, // Set the dynamic width based on the state
    };
  }, [vectorIconHeight, logoWidth]);

  return (
    <div
      className="flex flex-col items-start justify-start py-1 px-2"
      style={colorDefaultStyle}
    >
      <img
        className="relative object-cover"
        alt=""
        src={logoUrl}
        style={vectorIconStyle}
      />
    </div>
  );
};

export default ColorDefault;
