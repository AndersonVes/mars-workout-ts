import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px 40px;
    
    @media screen and (max-width: 460px) {
        padding: 10px 20px;
    }


    h1 {
        @media screen and (max-width: 660px) {
            font-size: 24px;
        }

        @media screen and (max-width: 460px) {
            font-size: 16px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoImg = styled.img`
    width: 220px;

    @media screen and (max-width: 660px) {
        width: 150px
    }

    @media screen and (max-width: 460px) {
        width: 110px
        }
`;