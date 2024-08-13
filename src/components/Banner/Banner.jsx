import { Link } from 'react-router-dom';
import classes from './Banner.module.css';

export default function Banner() {
    return (
        <Link to={'/'}>
            <div className={classes.categoryBanner}>
                <div className={classes.categoryBannerWrapper}>
                    <div className={classes.categoryBannerLeft}>
                        <div className={classes.categoryBannerTop}>
                            <div className={classes.categoryBannerTitle}>
                                Путешествуй!
                            </div>
                            <div className={classes.categoryBannerDescr}>
                                Бронируй квартиры в Беларуси онлайн
                            </div>
                        </div>
                        <div className={classes.categoryBannerBottom}>
                            <button className={classes.categoryBannerBtn}>
                                Перейти
                            </button>
                        </div>
                    </div>
                    <div className={classes.categoryBannerRight}>
                        <div className={classes.categoryBannerImg}></div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
