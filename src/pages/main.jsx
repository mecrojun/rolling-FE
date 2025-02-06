import Header from "../components/Header/Header";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { Content, Label, Wrapper } from "./Main.style";

function Main() {

    return (
      <Wrapper className="main-wrapper">
        <Wrapper className="header-wrap" height="66px"><Header /></Wrapper>
        <Wrapper className="section-wrap">
          <Content className="section">
            <Wrapper className="txt-box-01">
              <Label>Point. 01</Label>
              <div>
                <h2>누구나 손쉽게, 온라인
                롤링 페이퍼를 만들 수 있어요</h2>
                <p>로그인 없이 자유롭게 만들어요.</p>
              </div>
            </Wrapper>
            <Content className="img"></Content>
          </Content>
          <Content className="section reverse-section">
            <Wrapper className="txt-box-02">
              <Label>Point. 02</Label>
              <div>
                <h2>서로에게 이모지로 감정을
                표현해보세요</h2>
                <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
              </div>
            </Wrapper>
            <Content className="img"></Content>
          </Content>
        </Wrapper>
        <Wrapper className="buttonWrapper"><PrimaryButton width="280px">구경해보기</PrimaryButton></Wrapper>
      </Wrapper>
    );
  }
  
  export default Main;