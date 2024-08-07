import { Link } from 'react-router-dom';
import classes from './Mainpage.module.css';
import bigLogo from '/src/images/logo/logo-big.svg';
import SearchIcon from '/src/images/icons/search.svg?react';
import CrossIcon from '/src/images/icons/cross.svg?react';
import LocationIcon from '/src/images/icons/location.svg?react';
import { useRef, useState } from 'react';
export default function Mainpage() {
    const linesRef = useRef();
    const searchIconRef = useRef();
    const searchInputRef = useRef();
    const searchCrossRef = useRef();
    const [searchText, setSearchText] = useState('');
    const [locationText, setLocationText] = useState('Вся Беларусь');
    return (
        <>
            <header
                onClick={(e) => {
                    if (
                        !e.target.closest(`.${classes.searchIcon}`) &&
                        !e.target.closest(`.${classes.searchInput}`)
                    ) {
                        searchIconRef.current.classList.remove(classes.active);
                        searchInputRef.current.classList.remove(classes.active);
                        searchCrossRef.current.classList.add(classes.hide);
                    }
                }}
            >
                <div className={classes.container}>
                    <div className={classes.header}>
                        <Link to={'/'}>
                            <img
                                className={classes.logo}
                                src={bigLogo}
                                alt="logo"
                            />
                        </Link>
                        <div className={classes.categoriesBtnWrapper}>
                            <button
                                className={classes.categoriesBtn}
                                onClick={() => {
                                    linesRef.current.classList.toggle(
                                        classes.active
                                    );
                                }}
                            >
                                <div className={classes.lines} ref={linesRef}>
                                    <span className={classes.line}></span>
                                    <span className={classes.line}></span>
                                    <span className={classes.line}></span>
                                </div>
                                Категории
                            </button>
                        </div>
                        <div className={classes.searchWrapper}>
                            <input
                                ref={searchInputRef}
                                onClick={(e) => {
                                    searchIconRef.current.classList.add(
                                        classes.active
                                    );
                                    searchInputRef.current.classList.add(
                                        classes.active
                                    );
                                    if (e.target.value) {
                                        searchCrossRef.current.classList.remove(
                                            classes.hide
                                        );
                                    }
                                }}
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                    if (e.target.value) {
                                        searchCrossRef.current.classList.remove(
                                            classes.hide
                                        );
                                    }
                                }}
                                type="text"
                                className={classes.searchInput}
                                placeholder="Искать обьявления"
                            />
                            <div
                                ref={searchIconRef}
                                className={classes.searchIcon}
                            >
                                <SearchIcon />
                            </div>

                            <div className={classes.cross} ref={searchCrossRef}>
                                {searchText && (
                                    <CrossIcon
                                        onClick={() => {
                                            setSearchText('');
                                            searchInputRef.current.value = '';
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                        <div className={classes.locationWrapper}>
                            <LocationIcon />
                            <div className={classes.location}>
                                {locationText}
                            </div>
                            <div className={classes.locationDropdown}></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
