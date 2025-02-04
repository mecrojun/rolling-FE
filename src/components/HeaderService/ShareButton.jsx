import { useState } from "react";
import { ShareIcon } from "../Icons";
import {
  Overlay,
  Button,
  ShareMenuWrapper,
  ShareOptions,
} from "./ShareButton.style";

function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShareMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      //Toast로 대체 예정
      alert("복사 성공");
      toggleShareMenu();
    } catch (err) {
      console.error("URL 복사 실패", err);
    }
  };
  return (
    <>
      <Button onClick={toggleShareMenu}>
        <ShareIcon />
      </Button>

      {isOpen && (
        <>
          <Overlay onClick={toggleShareMenu} />
          <ShareMenuWrapper>
            <ShareOptions>
              <button>카카오톡 공유</button>
              <button onClick={handleCopyUrl}>URL 공유</button>
            </ShareOptions>
          </ShareMenuWrapper>
        </>
      )}
    </>
  );
}

export default ShareButton;
