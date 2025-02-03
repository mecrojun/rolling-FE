import { useState } from "react";
import { EmojiMoreWrapper, EmojiList, Overlay, Emogi } from "./EmojiMore.style";

function EmojiMore({ onClose }) {
  return (
    <>
      <Overlay onClick={onClose} />
      <EmojiMoreWrapper>
        <EmojiList>
          <Emogi>👍 10</Emogi>
          <Emogi>😍 8</Emogi>
          <Emogi>🎉 24</Emogi>
          <Emogi>😂 2</Emogi>
          <Emogi>👍 10</Emogi>
          <Emogi>😍 8</Emogi>
          <Emogi>😍 24</Emogi>
          <Emogi>😍 2</Emogi>
        </EmojiList>
      </EmojiMoreWrapper>
    </>
  );
}

export default EmojiMore;
