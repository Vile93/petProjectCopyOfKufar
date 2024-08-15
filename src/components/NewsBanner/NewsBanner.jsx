import { Link } from 'react-router-dom';
import classes from './NewsBanner.module.css';

export default function NewsBanner() {
    return (
        <Link to={'/'} draggable={false}>
            {' '}
            <div className={classes.wrapper}>
                <div className={classes.text}>Lorem ipsum dolor sit amet</div>
                <div className={classes.img}></div>
            </div>
        </Link>
    );
}
