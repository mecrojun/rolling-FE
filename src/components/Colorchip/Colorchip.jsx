import { useState } from "react";
import * as C from "./Colorchip.style";
import { CompletedIcon } from "../Icons";
import { useTheme } from "styled-components";

function Colorchip() {
  const colors = ["beige", "purple", "blue", "green"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const theme = useTheme();

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <C.ColorchipContainer>
      {colors.map((color, index) => (
        <C.ColorChipItem
          key={index}
          color={color}
          onClick={() => handleColorSelect(color)}
        >
          {/* Selection: 아이콘 컴포넌트로 대체 예정 */}
          <C.Selection isChecked={color === selectedColor}>
            <CompletedIcon size={44} color={theme.colors.gray[500]} />
          </C.Selection>
        </C.ColorChipItem>
      ))}
    </C.ColorchipContainer>
  );
}

export default Colorchip;
