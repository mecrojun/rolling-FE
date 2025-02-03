import { useState } from "react";
import { ShareMenuWrapper, ShareOptions, Overlay } from "./ShareMenu.style";

function ShareMenu({ onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch (err) {
      console.error("URL 복사 실패", err);
    }
  };
  return (
    <>
      <Overlay onClick={onClose} />
      <ShareMenuWrapper>
        <ShareOptions>
          <button>카카오톡 공유</button>
          <button onClick={handleCopyUrl}>URL 공유</button>
        </ShareOptions>
      </ShareMenuWrapper>
    </>
  );
}

export default ShareMenu;
