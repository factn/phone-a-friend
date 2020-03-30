import React from 'react'
import styled from 'styled-components';


const MainDiv = styled.nav`
    width: 80%;
    overflow:hidden;
    margin: 0 auto 0 auto 0;
`;
const P = styled.div`
    margin:0;
    font-size: .8rem;
`;

const MainJumbo = () => {
    return (
        <MainDiv>
            <h1>Hi! Let's Connect</h1>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae repellendus minima, ipsum, ipsa pariatur autem, totam mollitia necessitatibus
                 libero corrupti facilis. Tempora eveniet, quasi quod incidunt officia labore. Harum!</P>
        </MainDiv>
    )
}

export default MainJumbo
