import React from 'react'
import { Link } from 'react-router-dom';

import { Wrapper, Content, LogoImg } from './Header.styles';

import Logo from '../../images/logo.png';

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={Logo} alt='Rmdb logo' />
                </Link>
                <h1>
                    Mars Workout
                </h1>
            </Content>
        </Wrapper>
    );
}

export default Header;