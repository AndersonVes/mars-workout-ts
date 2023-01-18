import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 40px;

    @media screen and (max-width: 460px) {
        padding: 10px 20px;
    }

    

    .workout-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @media screen and (max-width: 916px) {
            justify-content: center;
        }
    }

`;

export const Content = styled.div``;
