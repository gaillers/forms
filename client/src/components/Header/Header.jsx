import React from "react";
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderBar>
            <h1>Register</h1>
        </HeaderBar>
    )
}

export default Header;

const HeaderBar = styled.header({
    maxWidth: '1600px',
    width: '80%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
    padding: '5px 30px',
    minHeight: 80,
    backgroundColor: '#191d3a',
    marginBottom: '50px'
  });