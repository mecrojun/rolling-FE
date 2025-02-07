import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;

  &.section-wrap {
    ${({ theme }) => theme.flexLayout("column")}
    width: 100%;
    max-width: 720px;
  }

  &.txt-box {
    margin: 0;
  }
`;

export const Section = styled.section`
  ${({ theme }) => theme.flexLayout("column", "flex-start", "flex-start")};
  width: 100%;

  &.section.to {
    margin-top: 57px;
    gap: 12px;
  }

  &.section.select-background {
    margin: 50px 0 69px;
  }
`;

export const SectionTitle = styled.h3`
  margin-bottom: 4px;
  ${({ theme }) => theme.fonts["24b"]}
`;

export const StyledToggleButton = styled.div`
  margin: 24px 0 45px;
`;
