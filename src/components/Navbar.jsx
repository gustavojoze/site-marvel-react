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



const Navbar = () =>{ 
    const dispatch = useDispatch();

    return(
    <>   
    <Nav>
        <Link to="/">
            <Logo src="/logo_marvel.png" alt="Marvel Logo" />
        </Link>
        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" onClick={() => dispatch(toggleCart())} style={{ cursor: 'pointer', width: '40px', height: '40px' }}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
        </svg>
    </Nav>
    <Cart/>
    </>
);
}

export default Navbar;