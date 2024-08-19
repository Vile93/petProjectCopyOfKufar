import { Link } from 'react-router-dom';
import classes from './Offer.module.css';

export default function Offer() {
    return (
        <Link>
            <div className={classes.wrapper}>
                <div className={classes.top}>
                    <div className={classes.img}></div>
                </div>
                <div className={classes.bottom}>
                    <div className={classes.price}>600 р</div>
                    <div className={classes.title}>Rtx 3060</div>
                    <div className={classes.location}>
                        Брестская, Барановичи
                    </div>
                    <div className={classes.date}>12 авг., 05:30</div>
                </div>
            </div>
        </Link>
    );
}
