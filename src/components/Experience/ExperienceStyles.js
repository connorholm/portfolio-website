import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  padding: 3rem;
  place-items: stretch;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const ExperienceCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  padding: 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  transition: 0.4s;
  &:hover {
    box-shadow: 3px 3px 30px rgba(155, 155, 155, 0.5);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  margin: 0 auto 0.5rem;
  border-radius: 50%;
  color: #fff;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
`;

export const Company = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.4rem 0 0;
  font-size: 2.4rem;
`;

export const Role = styled.p`
  color: #e4e6e7;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0.2rem 0;
`;

export const Meta = styled.p`
  color: rgba(255, 255, 255, 0.55);
  font-size: 1.4rem;
  font-style: italic;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 16px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 1.5rem;
  color: #e4e6e7;
  line-height: 24px;
  text-align: justify;
  flex: 1;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem 1.2rem;
  padding: 1.5rem 1rem 0.5rem;
  list-style: none;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.5rem;
  padding: 0.6rem 1.4rem;
  margin: 1rem auto 0.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;
