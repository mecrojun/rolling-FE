import { Count, Num } from "./MessageCount.style";

function MessageCount({ messageCount }) {
  return (
    <Count>
      <Num>{messageCount}</Num>명이 작성했어요!
    </Count>
  );
}

export default MessageCount;
