import { Link } from 'react-router-dom';
import classes from './Mainpage.module.css';
import bigLogo from '/src/images/logo/logo-big.svg';
import SearchIcon from '/src/images/icons/search.svg?react';
import CrossIcon from '/src/images/icons/cross.svg?react';
import LocationIcon from '/src/images/icons/location.svg?react';
/* import ArrowLeft from '/src/images/icons/arrowLeft.svg?react'; */
import PlusIcon from '/src/images/icons/plus.svg?react';
import { useEffect, useRef, useState } from 'react';
import HeaderLocationSelect from '../../components/HeaderLocationSelect/HeaderLocationSelect';
import Message from '/src/images/icons/headerIcons/message.svg?react';
import Favourite from '/src/images/icons/headerIcons/favourite.svg?react';
import Notification from '/src/images/icons/headerIcons/notification.svg?react';
import Search from '/src/images/icons/headerIcons/search.svg?react';
import Store from '/src/images/icons/headerIcons/store.svg?react';
import Container from '../../components/Container/Container';
import PopularCategory from '../../components/PopularCategory/PopularCategory';
export default function Mainpage() {
    const linesRef = useRef();
    const searchIconRef = useRef();
    const searchInputRef = useRef();
    const searchCrossRef = useRef();
    const locationDropdownRef = useRef();
    const popularCategoriesRef = useRef();
    const [isDraggingPopularCategories, setIsDraggingPopularCategories] =
        useState(false);
    const [startX, setStartX] = useState();
    const [scrollLeft, setScrollLeft] = useState();
    const [searchText, setSearchText] = useState('');
    const [locationText, setLocationText] = useState('Вся Беларусь');
    useEffect(() => {
        if (popularCategoriesRef.current) {
            popularCategoriesRef.current.scrollLeft =
                popularCategoriesRef.current.clientWidth;
        }
    }, []);
    return (
        <div
            className={classes.wrapper}
            onMouseUp={() => {
                if (isDraggingPopularCategories) {
                    setIsDraggingPopularCategories(false);
                    if (
                        popularCategoriesRef.current.scrollLeft <
                        popularCategoriesRef.current.clientWidth
                    ) {
                        popularCategoriesRef.current.scrollTo({
                            left: popularCategoriesRef.current.clientWidth,
                            behavior: 'smooth',
                        });
                    }
                    if (
                        popularCategoriesRef.current.scrollLeft >
                        popularCategoriesRef.current.scrollWidth -
                            2 * popularCategoriesRef.current.clientWidth
                    ) {
                        popularCategoriesRef.current.scrollTo({
                            left:
                                popularCategoriesRef.current.scrollWidth -
                                2 * popularCategoriesRef.current.clientWidth,
                            behavior: 'smooth',
                        });
                    }
                }
            }}
            onMouseDown={(e) => {
                if (e.target.closest(`.${classes.popularCategoriesWrapper}`)) {
                    setIsDraggingPopularCategories(true);
                    setStartX(e.clientX);
                    setScrollLeft(popularCategoriesRef.current.scrollLeft);
                } else {
                    setIsDraggingPopularCategories(false);
                }
            }}
            onMouseMove={(e) => {
                if (!isDraggingPopularCategories) return;
                e.preventDefault();
                const x = e.clientX;
                const walk = (x - startX) * 0.7;
                popularCategoriesRef.current.scrollLeft = scrollLeft - walk;
            }}
        >
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
                    }
                }}
            >
                <div className={classes.headerTop}>
                    <Container>
                        <div className={classes.headerTopWrapper}>
                            {' '}
                            <div className={classes.headerTopLeft}>
                                <Link to={'/'} className={classes.otherLinks}>
                                    Недвежимость
                                </Link>
                                <Link to={'/'} className={classes.otherLinks}>
                                    Авто
                                </Link>
                            </div>
                            <div className={classes.headerTopRight}>
                                <Message />
                                <Store />
                                <Search />
                                <Favourite />
                                <Notification />
                            </div>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className={classes.header}>
                        <div className={classes.headerLeft}>
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
                                    <div
                                        className={classes.lines}
                                        ref={linesRef}
                                    >
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

                                <div
                                    className={classes.cross}
                                    ref={searchCrossRef}
                                >
                                    {searchText && (
                                        <CrossIcon
                                            onClick={() => {
                                                setSearchText('');
                                                searchInputRef.current.value =
                                                    '';
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
                                    <div
                                        className={
                                            classes.locationDropdownRegion
                                        }
                                    >
                                        Ваш регион
                                    </div>
                                    <div
                                        className={
                                            classes.locationDropdownSelects
                                        }
                                    >
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
                        </div>
                        <div className={classes.headerRight}>
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
                </Container>
            </header>
            <main>
                <Container>
                    <div className={classes.sectionWrapper}>
                        {' '}
                        <section className={classes.popularCategoriesSection}>
                            <div className={classes.popularCategoriesText}>
                                Популярные категории
                            </div>
                            <div
                                className={classes.popularCategoriesWrapper}
                                ref={popularCategoriesRef}
                            >
                                <div className={classes.popularCategoriesBlock}>
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                </div>
                                <div className={classes.popularCategoriesBlock}>
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                </div>{' '}
                                <div className={classes.popularCategoriesBlock}>
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                </div>{' '}
                                <div className={classes.popularCategoriesBlock}>
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                </div>{' '}
                                <div className={classes.popularCategoriesBlock}>
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                </div>
                                <div className={classes.popularCategoriesBlock}>
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                </div>
                                <div className={classes.popularCategoriesBlock}>
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                </div>{' '}
                                <div className={classes.popularCategoriesBlock}>
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                </div>{' '}
                                <div className={classes.popularCategoriesBlock}>
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                </div>{' '}
                                <div className={classes.popularCategoriesBlock}>
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                    <PopularCategory
                                        text={'Недвижимость'}
                                        src={
                                            '/src/images/popular-categories.svg'
                                        }
                                    />
                                </div>
                            </div>
                        </section>
                        <section>
                            <Link>
                                <div className={classes.categoryBanner}>
                                    <div
                                        className={
                                            classes.categoryBannerWrapper
                                        }
                                    >
                                        <div
                                            className={
                                                classes.categoryBannerLeft
                                            }
                                        >
                                            <div
                                                className={
                                                    classes.categoryBannerTop
                                                }
                                            >
                                                <div
                                                    className={
                                                        classes.categoryBannerTitle
                                                    }
                                                >
                                                    Путешествуй!
                                                </div>
                                                <div
                                                    className={
                                                        classes.categoryBannerDescr
                                                    }
                                                >
                                                    Бронируй квартиры в Беларуси
                                                    онлайн
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    classes.categoryBannerBottom
                                                }
                                            >
                                                <button
                                                    className={
                                                        classes.categoryBannerBtn
                                                    }
                                                >
                                                    Перейти
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                classes.categoryBannerRight
                                            }
                                        >
                                            <div
                                                className={
                                                    classes.categoryBannerImg
                                                }
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </section>
                    </div>
                </Container>
            </main>
        </div>
    );
}
