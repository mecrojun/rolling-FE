import { ShareMenuWrapper, ShareOptions, Overlay } from "./ShareMenu.style";

function ShareMenu({ onClose }) {
  return (
    <>
      <Overlay onClick={onClose} />
      <ShareMenuWrapper>
        <ShareOptions>
          <button>카카오톡 공유</button>
          <button>URL 공유</button>
        </ShareOptions>
      </ShareMenuWrapper>
    </>
  );
}

export default ShareMenu;
