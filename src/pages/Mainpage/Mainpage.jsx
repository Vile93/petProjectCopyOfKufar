import { Link } from 'react-router-dom';
import classes from './Mainpage.module.css';
import bigLogo from '/src/images/logo/logo-big.svg';
import SearchIcon from '/src/images/icons/search.svg?react';
import CrossIcon from '/src/images/icons/cross.svg?react';
import LocationIcon from '/src/images/icons/location.svg?react';
/* import ArrowLeft from '/src/images/icons/arrowLeft.svg?react'; */
import PlusIcon from '/src/images/icons/plus.svg?react';
import { useRef, useState } from 'react';
import HeaderLocationSelect from '../../components/HeaderLocationSelect/HeaderLocationSelect';
export default function Mainpage() {
    const linesRef = useRef();
    const searchIconRef = useRef();
    const searchInputRef = useRef();
    const searchCrossRef = useRef();
    const locationDropdownRef = useRef();
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

                    if (!e.target.closest(`.${classes.locationWrapper}`)) {
                        locationDropdownRef.current.classList.remove(
                            classes.active
                        );
                    } /*
                    if (
                        e.target.closest(`.${classes.locationWrapper}`) &&
                        !e.target.closest(`.${classes.locationDropdown}`)
                    ) {
                        locationDropdownRef.current.classList.toggle(
                            classes.active
                        );
                        return;
                    } */
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
                        <div
                            className={classes.locationWrapper}
                            onClick={(e) => {
                                if (
                                    !e.target.closest(
                                        `.${classes.locationDropdown}`
                                    )
                                )
                                    locationDropdownRef.current.classList.toggle(
                                        classes.active
                                    );
                            }}
                        >
                            <LocationIcon />
                            <div className={classes.location}>
                                {locationText}
                            </div>
                            <div
                                className={classes.locationDropdown}
                                ref={locationDropdownRef}
                            >
                                <div className={classes.locationDropdownRegion}>
                                    Ваш регион
                                </div>
                                <div
                                    className={classes.locationDropdownSelects}
                                >
                                    {/* <div
                                        className={
                                            classes.locationDropdownSelectWrapper
                                        }
                                    >
                                        <ArrowLeft
                                            className={
                                                classes.locationDropdownArrowDown
                                            }
                                        />
                                        <select
                                            name="regions"
                                            className={
                                                classes.locationDropdownSelect
                                            }
                                        >
                                            <option value="belarus">
                                                Вся Беларусь
                                            </option>
                                            <option value="minsk">Минск</option>
                                            <option value="brest">
                                                Брестская
                                            </option>
                                        </select>
                                    </div> */}
                                    {/* <div
                                        className={
                                            classes.locationDropdownSelectWrapper
                                        }
                                    >
                                        <ArrowLeft
                                            className={
                                                classes.locationDropdownArrowDown
                                            }
                                            onClick={(e) => {
                                                const select = e.target.closest(
                                                    `.${classes.locationDropdownSelectWrapper}`
                                                );
                                                select.focus();
                                                select.click();
                                            }}
                                        />
                                        <select
                                            name="towns"
                                            className={
                                                classes.locationDropdownSelect
                                            }
                                        >
                                            <option value="test1">test1</option>
                                            <option value="test2">test2</option>
                                        </select>
                                    </div> */}
                                    <HeaderLocationSelect />
                                    <HeaderLocationSelect />
                                </div>
                                <button
                                    className={classes.locationDropdownBtn}
                                    onClick={() => {
                                        locationDropdownRef.current.classList.remove(
                                            classes.active
                                        );
                                    }}
                                >
                                    Выбрать
                                </button>
                            </div>
                        </div>
                        <button className={classes.addOffer}>
                            <div className={classes.addOfferPlus}>
                                <PlusIcon />
                            </div>
                            <div className={classes.addOfferText}>
                                Подать объявление
                            </div>
                        </button>
                        <button className={classes.loginBtn}>Войти</button>
                    </div>
                </div>
            </header>
        </>
    );
}
