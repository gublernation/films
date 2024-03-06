import styled from 'styled-components';
import Hero from '../ui/Hero';

const StyledAbout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const Article = styled.article`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin: 72px auto;
  padding-bottom: 120px;

  @media only screen and (max-width: 1420px) {
    width: 90%;
    margin: 36px auto;
  }
`;

const H2 = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: var(--line-h-lg);
`;

const Blockquote = styled.blockquote`
  padding: 24px;
  border-radius: 16px;
  background-color: var(--color-black-750);
`;

function About() {
  return (
    <StyledAbout>
      <Hero to="/" linkTitle="Home" />
      <Article>
        <div>
          <H2>About</H2>
          <Paragraph>
            배우 매튜 그레이 구블러(Matthew Gray Gubler)의 필모그래피를 정리한
            사이트입니다. 수록된 작품의 기준은 다음과 같습니다:
            <br />
            <br />① 검색 결과에 집계가 된 작품
            <br />② 국내에서 합법적인 루트로 볼 수 있는 작품
            <br />
            <br />
            검색 결과에 집계가 되어 있으며 합법적인 루트로 볼 수 있는 작품이라고
            하더라도 미국 등 특정 나라에서만 시청이 가능한 작품과 플랫폼은 따로
            수록하지 않았습니다. AppleTV는 해외 계정을 만들면 iTunes 및 AppleTV
            앱을 통해 시청이 가능하므로 예외적으로 시청 목록에 수록해뒀습니다.
            아마존 프라임 역시 기타 결제 수단을 이용하면 시청이 가능하긴 하나
            AppleTV에 비해 방법이 다소 번거로워서 제외했습니다.
          </Paragraph>
        </div>
        <div>
          <H2>tubi</H2>
          <Blockquote>
            <Paragraph>
              tubi는 구독 결제가 아닌 광고 수익으로 운영되는 플랫폼으로, 안전한
              사이트이며 합법적인 플랫폼입니다. 하지만 원칙적으로 미국 외의
              국가에서는 시청이 불가능하므로 VPN을 이용해야 합니다.
            </Paragraph>
          </Blockquote>
        </div>
      </Article>
    </StyledAbout>
  );
}

export default About;
