import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
import PromotionIcon from '/src/images/promotion.svg?react';
import Container from '../Container/Container';
import styled from 'styled-components';
import { useState } from 'react';

const Lang = styled.div`
    &:before {
        ${(props) =>
            !props.$isBel
                ? '    transform: translateY(-50%) translateX(calc(50% - 3px));'
                : 'transform: translateY(-50%) translateX(calc(-50% + 3px));'};
    }
`;

export default function Footer({ isBY }) {
    const [isBelLang, setIsBelLang] = useState(isBY);

    return (
        <footer className={classes.wrapper}>
            <Container>
                {' '}
                <div className={classes.promo}>
                    <Link to={'/'} className={classes.link}>
                        <PromotionIcon />
                        <div className={classes.promoText}>
                            Онлайн-бронирование
                        </div>
                    </Link>
                    <Link to={'/'} className={classes.link}>
                        <PromotionIcon />
                        <div className={classes.promoText}>Отели</div>
                    </Link>
                    <Link to={'/'} className={classes.link}>
                        <PromotionIcon />
                        <div className={classes.promoText}>
                            Услуги продвижения
                        </div>
                    </Link>
                </div>
                <div className={classes.flexWrapper}>
                    {' '}
                    <div className={classes.info}>
                        Этот учебный проект создан исключительно в
                        образовательных целях и не предназначен для замены
                        официального сайта &quot;Kufar&quot;. Он не является
                        реальной платформой для публикации актуальных
                        объявлений.
                    </div>
                    <Lang className={classes.lang} $isBel={isBelLang}>
                        <div
                            className={classes.langBY}
                            onClick={() => setIsBelLang(true)}
                            style={{ color: isBelLang ? '#fff' : '#808080' }}
                        >
                            BY
                        </div>
                        <div
                            className={classes.langRU}
                            onClick={() => setIsBelLang(false)}
                            style={{ color: !isBelLang ? '#fff' : '#808080' }}
                        >
                            RU
                        </div>
                    </Lang>
                </div>
            </Container>
        </footer>
    );
}
