import styled from 'styled-components';
import { useFilm } from '../data/useFilm';
import Star from '../svg/Star';
import { useNavigate } from 'react-router-dom';
import WatchList from './FilmPage/WatchList';
import FilmInfo from './FilmPage/FilmInfo';

const StyledFilmPage = styled.div`
  position: relative;
`;

const Header = styled.header`
  width: 100%;
  height: 420px;

  ${props => `background-image: url(${props.src});`}

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  opacity: 0.45;

  @media only screen and (max-width: 1440px) {
    height: 360px;
  }

  @media only screen and (max-width: 600px) {
    height: 280px;
  }
`;

const Article = styled.article`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto 72px auto;
  padding: 36px;
  position: relative;
  border: 2px solid var(--color-black-750);
  border-radius: 18px;
  background-color: var(--color-black-800);
  transform: translateY(-60px);

  @media only screen and (max-width: 1680px) {
    width: 100%;
    border: none;
    border-top: 2px solid var(--color-black-750);
    border-radius: 0;
  }
`;

const PosterSection = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  margin-top: calc(-32px + -270px / 2);

  @media only screen and (max-width: 740px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media only screen and (max-width: 600px) {
    margin-top: calc(-32px + -180px / 2);
  }
`;

const PosterWrap = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media only screen and (max-width: 600px) {
    width: 120px;
  }
`;

const Poster = styled.img`
  width: 180px;
  display: block;
  aspect-ratio: 2 / 3;
  border-radius: 12px;

  @media only screen and (max-width: 600px) {
    width: 120px;
  }
`;

const EmptyPoster = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 2 / 3;
  font-size: var(--font-size-sm);
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 2px solid var(--color-black-750);
  border-radius: 12px;
  background-color: var(--color-black-800);
`;

const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

const TitleSection = styled.div`
  margin-bottom: 48px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 24px;
  }
`;

const TitleWrap = styled.span`
  display: grid;
  grid-template-rows: auto auto;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: var(--line-h-sm);

  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const TitleKor = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 500;
  line-height: var(--line-h-sm);
  opacity: 0.5;
`;

const Detail = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 54px;
  margin-left: calc(180px + 24px);

  @media only screen and (max-width: 940px) {
    margin-top: 48px;
    margin-left: 0;
  }
`;

const BackButton = styled.button`
  padding: 12px 16px;
  position: absolute;
  top: 36px;
  right: 36px;
  border: 2px solid var(--color-black-750);
  border-radius: 14px;
  background-color: var(--color-black-800);

  @media only screen and (max-width: 1440px) {
    display: none;
  }
`;

const BackButton2 = styled.button`
  display: none;
  padding: 12px 16px;
  position: absolute;
  top: 36px;
  right: 36px;
  border: 2px solid var(--color-black-750);
  border-radius: 14px;
  background-color: var(--color-black-800);

  @media only screen and (max-width: 1440px) {
    display: block;
  }

  @media only screen and (max-width: 600px) {
    top: 24px;
    right: 24px;
  }
`;

const ArticleTitle = styled.h3`
  margin-bottom: 16px;
  padding-bottom: 16px;
  font-size: var(--font-size-xl);
  font-weight: 700;
  border-bottom: 1px solid var(--color-black-750);
`;

const Trailer = styled.iframe`
  max-width: 100%;
  max-height: 100%;
  display: block;
  border-radius: 16px;
  aspect-ratio: 16 / 9;
  margin-bottom: 48px;
`;

const EmptyTrailer = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 0;
`;

function FilmPage() {
  const navigate = useNavigate();
  const { film, isLoading } = useFilm();

  if (isLoading) return null;

  const [
    {
      title,
      title_kor,
      year,
      poster,
      act,
      rating,
      genre,
      description,
      trailer_id,
      watch_list,
    },
  ] = film;

  return (
    <StyledFilmPage>
      {poster && <Header src={poster} />}
      {!poster && <Header src="banner.jpg" />}
      <BackButton2 onClick={() => navigate(-1, { replace: true })}>
        ← Back
      </BackButton2>
      <Article>
        <BackButton onClick={() => navigate(-1, { replace: true })}>
          ← Back
        </BackButton>
        <PosterSection>
          <PosterWrap>
            {poster && <Poster src={poster} />}
            {!poster && <EmptyPoster>no image</EmptyPoster>}
            <Rating>
              <Star size="16" />
              <p>{rating}</p>
            </Rating>
          </PosterWrap>
          <TitleSection>
            <TitleWrap>
              <Title>{title}</Title>
              {title_kor && <TitleKor>{title_kor}</TitleKor>}
            </TitleWrap>
          </TitleSection>
        </PosterSection>
        <Detail>
          <FilmInfo
            year={year}
            genre={genre}
            act={act}
            description={description}
          />
          <div>
            <ArticleTitle>시청하기</ArticleTitle>
            <WatchList watch_list={watch_list} />
          </div>
          <div>
            <ArticleTitle>트레일러</ArticleTitle>
            {trailer_id && (
              <Trailer
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailer_id}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></Trailer>
            )}
            {!trailer_id && (
              <EmptyTrailer>공개된 트레일러가 없습니다</EmptyTrailer>
            )}
          </div>
        </Detail>
      </Article>
    </StyledFilmPage>
  );
}

export default FilmPage;
