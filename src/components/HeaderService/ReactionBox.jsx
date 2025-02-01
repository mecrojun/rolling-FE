import { ReactionBoxContainer, ReactionBox, Icon } from "./ReactionBox.style";

function Reaction({ likeCount, loveCount, partyCount }) {
  return (
    <ReactionBoxContainer>
      <ReactionBox>
        <Icon src="https://via.placeholder.com/30?text=👍" alt="like" />
        <span>{likeCount}</span>
      </ReactionBox>
      <ReactionBox>
        <Icon src="https://via.placeholder.com/30?text=😍" alt="love" />
        <span>{loveCount}</span>
      </ReactionBox>
      <ReactionBox>
        <Icon src="https://via.placeholder.com/30?text=🎉" alt="party" />
        <span>{partyCount}</span>
      </ReactionBox>
    </ReactionBoxContainer>
  );
}

export default Reaction;
