import { Link } from 'react-router-dom';
import classes from './SeoLink.module.css';
import ArrowLeft from '/src/images/icons/arrowLeft.svg?react';
import { useRef } from 'react';
export default function SeoLink() {
    const arrowRef = useRef();
    const bottomRef = useRef();
    return (
        <div className={classes.seoLinkWrapper}>
            <div className={classes.top}>
                <div className={classes.title}>
                    Популярные модели Apple iPhone
                </div>
                <div
                    className={classes.arrow}
                    onClick={(e) => {
                        arrowRef.current.classList.toggle(classes.active);
                        bottomRef.current.classList.toggle(classes.active);
                    }}
                    ref={arrowRef}
                >
                    {' '}
                    <ArrowLeft />{' '}
                </div>
            </div>
            <div className={classes.bottom} ref={bottomRef}>
                <Link className={classes.tag}>iPhone</Link>{' '}
                <Link className={classes.tag}>iPhone</Link>{' '}
                <Link className={classes.tag}>iPhone</Link>{' '}
                <Link className={classes.tag}>iPhone</Link>{' '}
                <Link className={classes.tag}>iPhone</Link>{' '}
                <Link className={classes.tag}>iPhone</Link>{' '}
                <Link className={classes.tag}>iPhone</Link>{' '}
                <Link className={classes.tag}>iPhone</Link>{' '}
                <Link className={classes.tag}>iPhone</Link>{' '}
                <Link className={classes.tag}>iPhone</Link>{' '}
            </div>
        </div>
    );
}
