import React from 'react'
import '../css/Header.css'
import AmazonLogo from '../images/amazon_logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>

        <img className='header__logo' alt='logo'
        src={AmazonLogo} 
        />
        
        <div className='header__search'>
            <input className='header_searchInput' 
            type='text' /> 
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Hello Guest
                </span>
                <span className='header__optionLineTwo'>
                    Sign In
                </span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Return
                </span>
                <span className='header__optionLineTwo'>
                    & Orders
                </span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Your
                </span>
                <span className='header__optionLineTwo'>
                    Prime
                </span>
            </div>
            <div className='header__optionBasket'>
                <ShoppingCartIcon />
                <span className='header__optionLineTwo header__basketCount'>0</span>
            </div>
        </div>

    </div>
  )
}

export default Header