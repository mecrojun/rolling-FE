import { useState } from "react";
import EmojiMore from "./EmojiMore";
import { ArrowDownIcon } from "../Icons";
import {
  ReactionBoxContainer,
  ReactionBox,
  ArrowButton,
} from "./ReactionBox.style";

function Reaction({ topReactions }) {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  const toggleEmojiMenu = () => {
    setIsEmojiOpen((prev) => !prev);
  };

  return (
    <>
      <ReactionBoxContainer>
        {topReactions.map((Reaction) => (
          <ReactionBox key={Reaction.id}>
            {Reaction.emoji}
            <span>{Reaction.count}</span>
          </ReactionBox>
        ))}

        <ArrowButton onClick={toggleEmojiMenu}>
          <ArrowDownIcon />
        </ArrowButton>
      </ReactionBoxContainer>
      {isEmojiOpen && <EmojiMore onClose={() => setIsEmojiOpen(false)} />}
    </>
  );
}

export default Reaction;
