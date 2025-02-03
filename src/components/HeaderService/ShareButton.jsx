import { useState } from "react";
import ShareMenu from "./ShareMenu";
import { ShareIcon } from "../Icons";
import { ShareButtonWrapper } from "./ShareButton.style";

function ShareButton() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleShareMenu = () => {
    setIsShareOpen((prev) => !prev);
  };
  return (
    <>
      <ShareButtonWrapper onClick={toggleShareMenu}>
        <ShareIcon />
      </ShareButtonWrapper>
      {isShareOpen && <ShareMenu onClose={() => setIsShareOpen(false)} />}
    </>
  );
}

export default ShareButton;
