import { useState } from "react";
import { ArrowDownIcon } from "../Icons";
import * as R from "./Reaction.style";
import { EmojiBadge } from "../Badge/Badge";

function Reaction({ reactions }) {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  const toggleEmojiMenu = () => {
    setIsEmojiOpen((prev) => !prev);
  };

  const renderReactions = (reactions) => {
    return reactions.map((reaction) => (
      <EmojiBadge
        key={reaction.id}
        emoji={reaction.emoji}
        count={reaction.count}
      />
    ));
  };

  return (
    <>
      <R.ReactionBoxContainer>
        {renderReactions(reactions.slice(0, 3))}
        <R.ArrowButton onClick={toggleEmojiMenu}>
          <ArrowDownIcon />
        </R.ArrowButton>
      </R.ReactionBoxContainer>

      {isEmojiOpen && (
        <>
          <R.Overlay onClick={toggleEmojiMenu} />
          <R.EmojiMoreWrapper>
            <R.EmojiList>{renderReactions(reactions)}</R.EmojiList>
          </R.EmojiMoreWrapper>
        </>
      )}
    </>
  );
}

export default Reaction;
