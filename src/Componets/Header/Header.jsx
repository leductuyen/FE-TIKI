import React from 'react';
import Styles from './Header.module.scss';
import Logo from '../../Image/logo.png';
import Search from '../../Image/search.png';
import DialogLogin from './Dialog';

function Header(props) {
    return (
        <div className={Styles.Main}>
            <div className={Styles.Wrapper}>
                <div className={Styles.Header}>
                    <div className={Styles.Middle}>
                        <div className={Styles.Logo}>
                            <img src={Logo} alt="logo" />
                            <div className={Styles.FreeTiki}>
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={Styles.FormSearch}>
                            <div className={Styles.Search}>
                                <input className={Styles.Input} type="text" placeholder="Tìm kiếm sản phẩm"></input>
                                <button className={Styles.Button}>
                                    <img src={Search} alt="serach" />
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.User}>
                        <img
                            className={Styles.ProfileIcon}
                            src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                            alt=""
                        />

                        <span className={Styles.UserStyles}>
                            <DialogLogin />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
