import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 850px;
    margin: 0 auto;
    margin-bottom: 20px;

    @media screen and (max-width: 916px) {
        width: 650px;
    }

    @media screen and (max-width: 720px) {
        width: 460px;
    }

    @media screen and (max-width: 500px) {
        width: 320px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    * {
        width: 100%;
    }

    .info {
        padding: 20px;
        background: #111;
        border-radius: 7px;
    }

    p {
        margin: 0;
        font-weight: lighter;
    }

`;
