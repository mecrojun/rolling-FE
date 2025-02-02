import { ReactionBoxContainer, ReactionBox, Icon } from "./ReactionBox.style";

function Reaction({ likeCount, loveCount, partyCount }) {
  return (
    <ReactionBoxContainer>
      <ReactionBox>
        <Icon />
        <span>{likeCount}</span>
      </ReactionBox>
      <ReactionBox>
        <Icon />
        <span>{loveCount}</span>
      </ReactionBox>
      <ReactionBox>
        <Icon />
        <span>{partyCount}</span>
      </ReactionBox>
    </ReactionBoxContainer>
  );
}

export default Reaction;
