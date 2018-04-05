import React from 'React'
import styled from 'styled-components'

const NavBar = styled.nav`
  display: 'flex';
  justify-content: 'flex-end';
`

const NavLink = styled.button``

const Nav = ({ navigate }) => (
  <NavBar>
    <NavLink onClick={() => navigate('/list')}>List</NavLink>
    <NavLink onClick={() => navigate('/priority')}>List</NavLink>
  </NavBar>
)

export default Nav
