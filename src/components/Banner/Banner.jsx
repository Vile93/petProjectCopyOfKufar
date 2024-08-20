import { Link } from 'react-router-dom';
import styled from 'styled-components';
import classes from './Banner.module.css';
const Wrapper = styled.div`
    ${(props) =>
        props.$defaultBackground
            ? `background:${(props) => props.$defaultBackground}`
            : ''}
    &:before {
        background: ${(props) => props.$background};
    }
`;
export default function Banner({ background, defaultBackground }) {
    return (
        <Link to={'/'}>
            <Wrapper
                className={classes.categoryBannerWrapper}
                $background={background}
                $defaultBackground={defaultBackground}
            >
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
            </Wrapper>
        </Link>
    );
}
