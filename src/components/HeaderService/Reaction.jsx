import { useState } from "react";

import { ArrowDownIcon } from "../Icons";
import {
  ReactionBoxContainer,
  ReactionBox,
  ArrowButton,
  EmojiList,
  EmojiMoreWrapper,
  Overlay,
} from "./Reaction.style";

function Reaction({ topReactions }) {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  const toggleEmojiMenu = () => {
    setIsEmojiOpen((prev) => !prev);
  };

  const renderReactions = (reactions) => {
    return reactions.map((reaction) => (
      <ReactionBox key={reaction.id}>
        {reaction.emoji} {reaction.count}
      </ReactionBox>
    ));
  };

  return (
    <>
      <ReactionBoxContainer>
        {renderReactions(topReactions.slice(0, 3))}
        <ArrowButton onClick={toggleEmojiMenu}>
          <ArrowDownIcon />
        </ArrowButton>
      </ReactionBoxContainer>

      {isEmojiOpen && (
        <>
          <Overlay onClick={toggleEmojiMenu} />
          <EmojiMoreWrapper>
            <EmojiList>{renderReactions(topReactions)}</EmojiList>
          </EmojiMoreWrapper>
        </>
      )}
    </>
  );
}

export default Reaction;
