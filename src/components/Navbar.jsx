    // src/components/Navbar.jsx
    import styled from 'styled-components';

    const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #20232a;
    color: white;
    margin-bottom: 20px;
    `;

    const Logo = styled.img`
    width: 100px;
    height: 40px;
    `;

    const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
    `;

    const Navbar = () => (
    <Nav>
        <Logo src="/logo_marvel.png" alt="Marvel Logo" />
        <StyledLink>Carrinho</StyledLink>
    </Nav>
    );

    export default Navbar;