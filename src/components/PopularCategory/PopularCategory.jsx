import { Link } from 'react-router-dom';
import classes from './PopularCategory.module.css';

export default function PopularCategory({ text, src }) {
    return (
        <Link
            to={'/'}
            className={classes.wrapper}
            onMouseDown={(e) => e.preventDefault()}
        >
            <img src={src} className={classes.img} draggable={false} />
            <div className={classes.category}>{text}</div>
        </Link>
    );
}
