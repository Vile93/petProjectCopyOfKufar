import { Link } from 'react-router-dom';
import classes from './Mainpage.module.css';
import bigLogo from '/src/images/logo/logo-big.svg';
import SearchIcon from '/src/images/icons/search.svg?react';
import CrossIcon from '/src/images/icons/cross.svg?react';
import PlusIcon from '/src/images/icons/plus.svg?react';
import { useRef, useState } from 'react';
import Message from '/src/images/icons/headerIcons/message.svg?react';
import Favourite from '/src/images/icons/headerIcons/favourite.svg?react';
import Notification from '/src/images/icons/headerIcons/notification.svg?react';
import SaveSearch from '/src/images/icons/headerIcons/search.svg?react';
import Store from '/src/images/icons/headerIcons/store.svg?react';
import Close from '/src/images/icons/close.svg?react';
import Container from '../../components/Container/Container';
import PopularCategory from '../../components/PopularCategory/PopularCategory';
import Swiper from '../../components/Swiper/Swiper';
import SwiperBlock from '../../components/SwiperBlock/SwiperBlock';
import Banner from '../../components/Banner/Banner';
import HeaderLocationDropdown from '../../components/HeaderLocationDropdown/HeaderLocationDropdown';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import Offer from '../../components/Offer/Offer';
import Pagination from '../../components/Pagination/Pagination';
import SeoLink from '../../components/SeoLink/SeoLink';
import Footer from '../../components/Footer/Footer';

export default function Mainpage() {
    const linesRef = useRef();
    const searchIconRef = useRef();
    const searchInputRef = useRef();
    const searchCrossRef = useRef();
    const locationDropdownRef = useRef();
    const popularCategoriesRef = useRef();
    const newsBannersRef = useRef();
    const [searchText, setSearchText] = useState('');
    const testArr = [];
    testArr.length = 40;
    testArr.fill(null);
    return (
        <div
            className={classes.wrapper}
            onClick={(e) => {
                if (
                    !e.target.closest(
                        `.${locationDropdownRef.current.classList[0]}`
                    )
                ) {
                    locationDropdownRef.current.classList.add('unactive');
                }
            }}
        >
            <Swiper
                swiperRef={popularCategoriesRef}
                closestElement={classes.popularCategoriesWrapper}
            >
                <Swiper
                    swiperRef={newsBannersRef}
                    closestElement={classes.newsBanners}
                >
                    <header
                        onClick={(e) => {
                            if (
                                !e.target.closest(`.${classes.searchIcon}`) &&
                                !e.target.closest(`.${classes.searchInput}`)
                            ) {
                                searchIconRef.current.classList.remove(
                                    classes.active
                                );
                                searchInputRef.current.classList.remove(
                                    classes.active
                                );
                                searchCrossRef.current.classList.add(
                                    classes.hide
                                );
                            }

                            if (
                                !e.target.closest(`.${classes.locationWrapper}`)
                            ) {
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
                                        <Link
                                            to={'/'}
                                            className={classes.otherLinks}
                                        >
                                            Недвежимость
                                        </Link>
                                        <Link
                                            to={'/'}
                                            className={classes.otherLinks}
                                        >
                                            Авто
                                        </Link>
                                    </div>
                                    <div className={classes.headerTopRight}>
                                        <Message />
                                        <Store />
                                        <SaveSearch />
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
                                    <div
                                        className={classes.categoriesBtnWrapper}
                                    >
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
                                                <span
                                                    className={classes.line}
                                                ></span>
                                                <span
                                                    className={classes.line}
                                                ></span>
                                                <span
                                                    className={classes.line}
                                                ></span>
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
                                    <HeaderLocationDropdown
                                        locationWrapperRef={locationDropdownRef}
                                    />
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
                                    <button className={classes.loginBtn}>
                                        Войти
                                    </button>
                                </div>
                            </div>
                        </Container>
                    </header>
                    <main>
                        <Container>
                            <div
                                className={`${classes.sectionWrapper} ${classes.popularCategories}`}
                            >
                                <section
                                    className={`${classes.popularCategoriesSection}`}
                                >
                                    <div
                                        className={
                                            classes.popularCategoriesText
                                        }
                                    >
                                        Популярные категории
                                    </div>
                                    <SwiperBlock
                                        wrapperRef={popularCategoriesRef}
                                        classNames={
                                            classes.popularCategoriesWrapper
                                        }
                                    >
                                        <div
                                            className={
                                                classes.popularCategoriesBlock
                                            }
                                        >
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
                                        <div
                                            className={
                                                classes.popularCategoriesBlock
                                            }
                                        >
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
                                        <div
                                            className={
                                                classes.popularCategoriesBlock
                                            }
                                        >
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
                                        <div
                                            className={
                                                classes.popularCategoriesBlock
                                            }
                                        >
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
                                        <div
                                            className={
                                                classes.popularCategoriesBlock
                                            }
                                        >
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
                                        <div
                                            className={
                                                classes.popularCategoriesBlock
                                            }
                                        >
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
                                        <div
                                            className={
                                                classes.popularCategoriesBlock
                                            }
                                        >
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
                                        <div
                                            className={
                                                classes.popularCategoriesBlock
                                            }
                                        >
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
                                        <div
                                            className={
                                                classes.popularCategoriesBlock
                                            }
                                        >
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
                                        <div
                                            className={
                                                classes.popularCategoriesBlock
                                            }
                                        >
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
                                    </SwiperBlock>
                                </section>
                                <section>
                                    <div className={classes.banner}>
                                        {' '}
                                        <Banner
                                            background={
                                                'linear-gradient(90deg, #e8f5ff, #ffebce)'
                                            }
                                        />
                                    </div>
                                </section>
                            </div>
                            <div
                                className={`${classes.sectionWrapper} ${classes.newsBannersWrapper}`}
                            >
                                <section>
                                    <SwiperBlock
                                        classNames={classes.newsBanners}
                                        wrapperRef={newsBannersRef}
                                    >
                                        <NewsBanner />
                                        <NewsBanner />
                                        <NewsBanner />
                                        <NewsBanner />
                                        <NewsBanner />
                                        <NewsBanner />
                                        <NewsBanner />
                                        <NewsBanner />
                                        <NewsBanner />
                                    </SwiperBlock>
                                </section>
                                <section>
                                    <div className={classes.banner}>
                                        {' '}
                                        <Banner
                                            background={
                                                'linear-gradient(90deg, #d6f2e6, #7fd5b1)'
                                            }
                                            /*  defaultBackground={'#d6f2e6;'} */
                                        />
                                    </div>
                                </section>
                            </div>
                            <div
                                className={`${classes.sectionWrapper} ${classes.filter}`}
                            >
                                <section>
                                    <form>
                                        <div className={classes.filterWrapper}>
                                            <div
                                                className={
                                                    classes.filterPriceWrapper
                                                }
                                            >
                                                <div
                                                    className={
                                                        classes.filterPriceText
                                                    }
                                                >
                                                    Цена
                                                </div>
                                                <div
                                                    className={
                                                        classes.filterPriceInputs
                                                    }
                                                >
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        placeholder="От"
                                                    />
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        placeholder="До"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    classes.filterStateWrapper
                                                }
                                            >
                                                <div
                                                    className={
                                                        classes.filterStateText
                                                    }
                                                >
                                                    Состояние
                                                </div>
                                                <div
                                                    className={
                                                        classes.filterStateButtons
                                                    }
                                                >
                                                    <button
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        className={`${classes.filterStateType} ${classes.active}`}
                                                    >
                                                        Любое
                                                    </button>
                                                    <button
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        className={
                                                            classes.filterStateType
                                                        }
                                                    >
                                                        Новое
                                                    </button>
                                                    <button
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        className={
                                                            classes.filterStateType
                                                        }
                                                    >
                                                        Б/у
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    classes.filterElectionsWrapper
                                                }
                                            >
                                                <div
                                                    className={`${classes.divisionLine} ${classes.filterElectionLine}`}
                                                ></div>
                                                <div
                                                    className={
                                                        classes.filterElectionWrapper
                                                    }
                                                >
                                                    <label>
                                                        <input type="checkbox" />
                                                        <div
                                                            className={
                                                                classes.filterElectionText
                                                            }
                                                        >
                                                            Только с фото
                                                        </div>
                                                    </label>
                                                </div>
                                                <div
                                                    className={
                                                        classes.filterElectionWrapper
                                                    }
                                                >
                                                    <label>
                                                        <input type="checkbox" />
                                                        <div
                                                            className={
                                                                classes.filterElectionText
                                                            }
                                                        >
                                                            Только с фото
                                                        </div>
                                                    </label>
                                                </div>{' '}
                                                <div
                                                    className={
                                                        classes.filterElectionWrapper
                                                    }
                                                >
                                                    <label>
                                                        <input type="checkbox" />
                                                        <div
                                                            className={
                                                                classes.filterElectionText
                                                            }
                                                        >
                                                            Только с фото
                                                        </div>
                                                    </label>
                                                </div>
                                                <div
                                                    className={`${classes.divisionLine} ${classes.filterElectionLine}`}
                                                ></div>
                                            </div>
                                            <div
                                                className={classes.filterSticky}
                                            >
                                                <button
                                                    className={
                                                        classes.filterSaveSearch
                                                    }
                                                >
                                                    <SaveSearch />
                                                    Сохранить поиск
                                                </button>
                                                <button
                                                    className={
                                                        classes.filterSearch
                                                    }
                                                >
                                                    Показать 10 объявлений
                                                </button>
                                            </div>
                                            <button
                                                className={
                                                    classes.filterResetSearch
                                                }
                                            >
                                                <Close />
                                                Сбросить фильтры
                                            </button>
                                        </div>
                                    </form>
                                </section>
                                <section className={classes.offers}>
                                    <h1 className={classes.offersTitle}>
                                        Все объявления в Брестской области
                                    </h1>
                                    <div className={classes.offersTypes}>
                                        <button
                                            className={`${classes.offersType} ${classes.active}`}
                                        >
                                            По новизне
                                        </button>
                                        <button className={classes.offersType}>
                                            По новизне
                                        </button>
                                        <button className={classes.offersType}>
                                            По новизне
                                        </button>
                                    </div>

                                    <div className={classes.offersWrapper}>
                                        {testArr.map((el, i) => (
                                            <Offer key={i} />
                                        ))}
                                    </div>
                                    <button className={classes.offersAllBtn}>
                                        Смотреть все объявления
                                    </button>
                                    <Pagination />
                                </section>
                            </div>
                        </Container>
                        <div
                            className={`${classes.divisionLine} ${classes.divisionLinePagination}`}
                        ></div>
                        <Container>
                            <section className={classes.seoLinks}>
                                <SeoLink />
                                <SeoLink />
                                <SeoLink />
                            </section>
                        </Container>
                    </main>
                    <Footer />
                </Swiper>
            </Swiper>
        </div>
    );
}
