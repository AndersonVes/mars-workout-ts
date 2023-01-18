import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
    background: #111;
    border-radius: 7px;
    margin-bottom: 24px;

    width: 390px;
    @media screen and (max-width: 460px) {
        width: 260px;
        margin-bottom: 12px;

    }

    :hover {
    background: #222;

    }

    img {
        object-fit: cover;
        width: 370px;
        height: 240px;
        object-position: top;

        @media screen and (max-width: 460px) {
            width: 240px;
        }
    }

    h5 {
        margin: 0;
        margin-top: 5px;
        font-size: 20px;
        
        @media screen and (max-width: 460px) {
            font-size: 16px;
        }
    }

    span {
        display: flex;
        align-items: center;
        
        svg {
            margin-right: 5px
        }
    }
`;

