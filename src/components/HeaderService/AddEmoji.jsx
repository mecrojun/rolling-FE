import { AddIcon } from "../Icons";
import { Button, Section, Text } from "./AddEmoji.style";

function AddEmoji() {
  return (
    <Button>
      <Section>
        <AddIcon />
        <Text>추가</Text>
      </Section>
    </Button>
  );
}

export default AddEmoji;
