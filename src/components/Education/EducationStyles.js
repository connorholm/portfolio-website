import styled from "styled-components"

// fill the width of the education card
export const Img = styled.img`
max-height: 500px;
max-width: 750px;
width: auto;
height: auto;
border-radius: 10px;
object-fit: cover;
overflow: hidden;
@media ${(props) => props.theme.breakpoints.md} {
    max-height: 250px;
}
`;

export const GridContainer = styled.section`
display: grid;
grid-template-columns: 1fr;
padding: 3rem;
place-items: center;
row-gap: 4rem;
@media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: 1fr;
    padding: 2rem;
    place-items: center;
}
`;

export const TitleContent = styled.div`
    text-align: center;
    z-index: 20;
    width: 100%;
    font-size: 2.5rem;
`;

export const EducationCard = styled.div`
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    text-align: center;
    width: 750px;
    @media ${(props) => props.theme.breakpoints.md} {
        width: 100%;
    }
`;

export const HeaderThree = styled.h3`
    font-weight: 500;
    letter-spacing: 2px;
    color: #9cc9e3;
    padding: 0.5rem 0;
    font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
    width: 50px;
    height: 3px;
    margin: 20px auto;
    border: 0;
    background: #d0bb57;
`;

export const ClassList = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
padding: 2rem;
`

export const Class = styled.p`
    font-size: 1.6rem;
    padding: 1rem 1.5rem;
    transition: 0.5s;
    &:hover {
        background: #9cc9e3;
        border-radius: 15px;
    }
`