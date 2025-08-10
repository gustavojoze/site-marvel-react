// src/components/Navbar.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../redux/cartSlice';
import Cart from './Cart';

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

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
    `;

const Navbar = () =>{ 
    const dispatch = useDispatch();

    return(
    <>   
    <Nav>
        <Link to="/">
            <Logo src="/logo_marvel.png" alt="Marvel Logo" />
        </Link>
        <button onClick={() =>  dispatch(toggleCart())}>Carrinho</button>
    </Nav>
    <Cart/>
    </>
);
}

export default Navbar;