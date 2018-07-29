import React from 'react';
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="container">
            <div className="row row--centered">
                <div className="row__col row__col-2">
                    <a className="logo" href="/">
                        <img className="logo__image" sizes="130px" srcSet="/images/logo.png 130w, /images/logo-hi-dpi.png 260w" alt="Denteez"/>
                    </a>
                </div>
                <div className="row__col row__col-7">
                    <div className="header__middle-block">
                        <div className="search">
                            <span className="icon icon--search"></span>
                            <input className="search__input" type="text" placeholder="Company Name" />
                        </div>
                        <div className="icons-group">
                            <a href="#" className="icon icon--chat"></a>
                            <a href="#" className="icon icon--notifications"></a>
                        </div>
                    </div>
                </div>
                <div className="row__col row__col-3">
                    <div className="user-info">
                        <div className="user-info__pic-holder">
                            <img className="user-info__image" src="/images/user-pic.jpg" alt=""/>
                        </div>
                        <div className="user-info__name">
                            Maximillian Beekeeper
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchedToProps = (dispatch) => ({
    
});

export default connect(undefined, mapDispatchedToProps)(Header);