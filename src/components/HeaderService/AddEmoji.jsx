import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { AddIcon } from "../Icons";
import {
  Button,
  Section,
  Text,
  EmojiPickerWrapper,
  Overlay,
} from "./AddEmoji.style";

function AddEmoji() {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  const toggleEmojiMenu = () => {
    setIsEmojiOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={toggleEmojiMenu}>
        <Section>
          <AddIcon />
          <Text>추가</Text>
        </Section>
      </Button>

      {isEmojiOpen && (
        <>
          <Overlay onClick={toggleEmojiMenu} />
          <EmojiPickerWrapper>
            <EmojiPicker onEmojiClick={setIsEmojiOpen} />
          </EmojiPickerWrapper>
        </>
      )}
    </>
  );
}

export default AddEmoji;
