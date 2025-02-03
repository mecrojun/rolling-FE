import { useState } from "react";
import EmojiMore from "./EmojiMore";
import { ArrowDownIcon } from "../Icons";
import {
  ReactionBoxContainer,
  ReactionBox,
  ArrowButton,
} from "./ReactionBox.style";

function Reaction({ likeCount, loveCount, partyCount }) {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  const toggleEmojiMenu = () => {
    setIsEmojiOpen((prev) => !prev);
  };

  return (
    <>
      <ReactionBoxContainer>
        <ReactionBox>
          👍
          <span>{likeCount}</span>
        </ReactionBox>
        <ReactionBox>
          😍
          <span>{loveCount}</span>
        </ReactionBox>
        <ReactionBox>
          🎉
          <span>{partyCount}</span>
        </ReactionBox>
        <ArrowButton onClick={toggleEmojiMenu}>
          <ArrowDownIcon />
        </ArrowButton>
      </ReactionBoxContainer>
      {isEmojiOpen && <EmojiMore onClose={() => setIsEmojiOpen(false)} />}
    </>
  );
}

export default Reaction;
