import styled from "styled-components";

const badgeStyles = {
  지인: {
    backgroundColor: "beige",
    fontColor: "beige",
  },
  동료: {
    backgroundColor: "purple",
    fontColor: "purple",
  },
  가족: {
    backgroundColor: "green",
    fontColor: "green",
  },
  친구: {
    backgroundColor: "blue",
    fontColor: "blue",
  },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51px;
  height: 20px;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor][100]};
  color: ${({ theme, fontColor }) => theme.colors[fontColor][500]};
  border-radius: 4px;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fonts["14r"]};
`;

const EmojiBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // gap: 4px;
  width: 66px;
  height: 36px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 32px;
  font-size: ${({ theme }) => theme.fonts["16r"]};
`;

const Emoji = styled.div`
  font-size: 20px; /* 이모지 크기 조정 */
`;

const Likes = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

function RelBadge({ value = "지인" }) {
  const selectedStyle = badgeStyles[value];

  return (
    <Container
      bgColor={selectedStyle.backgroundColor}
      fontColor={selectedStyle.fontColor}
    >
      <Label>{value}</Label>
    </Container>
  );
}

function EmojiBadge({ emoji = "😍", initialLikes = 0 }) {
  return (
    <EmojiBadgeContainer>
      <Emoji>{emoji}</Emoji>
      <Likes>{initialLikes}</Likes>
    </EmojiBadgeContainer>
  );
}

export { RelBadge, EmojiBadge };
