import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { AddIcon } from "../Icons";
import * as A from "./AddEmoji.style";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddEmoji({ updateReactions }) {
  const { id } = useParams();
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [mySelectedEmojis, setMySelectedEmojis] = useState([]);

  const toggleEmojiMenu = () => {
    setIsEmojiOpen((prev) => !prev);
  };

  const handleEmojiClick = async (emojiObject) => {
    const selectedEmoji = emojiObject.emoji;
    const isAlreadySelected = mySelectedEmojis.includes(selectedEmoji);
    const actionType = isAlreadySelected ? "decrease" : "increase";
    const requestData = {
      emoji: selectedEmoji,
      type: actionType,
    };

    try {
      await axios.post(
        `https://rolling-api.vercel.app/13-5/recipients/${id}/reactions/`,
        requestData
      );

      setMySelectedEmojis((prev) =>
        isAlreadySelected
          ? prev.filter((emoji) => emoji !== selectedEmoji)
          : [...prev, selectedEmoji]
      );

      updateReactions();
      console.log(`${selectedEmoji} ${actionType} 요청 성공`);
    } catch (error) {
      console.error(` ${actionType} 요청 실패:`, error);
    }
  };

  return (
    <>
      <A.Button onClick={toggleEmojiMenu}>
        <A.Section>
          <AddIcon />
          <A.Text>추가</A.Text>
        </A.Section>
      </A.Button>

      {isEmojiOpen && (
        <>
          <A.Overlay onClick={toggleEmojiMenu} />
          <A.EmojiPickerWrapper>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </A.EmojiPickerWrapper>
        </>
      )}
    </>
  );
}

export default AddEmoji;
