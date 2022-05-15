import {Fragment} from 'react';
import catimg from '../../assets/cat.png';
import clases from './Header.module.css'
import HeaderButton from './HeaderButton';
import HeaderLoginButton from './HeaderLoginButton';
function Header(props) {
    return (
        <Fragment>
            <header className={clases.header}>
                <h1>Pet Mama Dünyası</h1>
                <HeaderLoginButton/>
                <HeaderButton/>
            </header>
            <div className={clases['main-image']}>
                <img src={catimg} alt="Cat Food!"/>
            </div>
        </Fragment>
    )

}

export default Header;