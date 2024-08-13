import { useEffect, useState } from 'react';
import classes from './SwiperBlock.module.css';
import ArrowLeft from '/src/images/icons/bigArrowLeft.svg?react';

export default function SwiperBlock({ wrapperRef, children, classNames }) {
    const [isArrowLeftHide, setIsArrowLeftHide] = useState(true);
    const [isArrowRightHide, setIsArrowRightHide] = useState(false);

    return (
        <div className={classes.swiperWrapper}>
            <div
                className={classes.swiperShadow}
                style={{
                    display: isArrowLeftHide ? 'none' : 'block',
                }}
            ></div>
            <div
                className={classes.swiperShadow}
                style={{
                    display: isArrowRightHide ? 'none' : 'block',
                }}
            ></div>
            {!isArrowLeftHide && (
                <div
                    className={classes.arrowLeft}
                    onClick={() => {
                        wrapperRef.current.scrollTo({
                            left: wrapperRef.current.clientWidth,
                            behavior: 'smooth',
                        });
                    }}
                >
                    <ArrowLeft />
                </div>
            )}
            {!isArrowRightHide && (
                <div
                    className={classes.arrowRight}
                    onClick={() => {
                        wrapperRef.current.scrollTo({
                            left:
                                wrapperRef.current.scrollWidth -
                                2 * wrapperRef.current.clientWidth,
                            behavior: 'smooth',
                        });
                    }}
                >
                    <ArrowLeft />
                </div>
            )}
            <div className={classes.wrapper}>
                <div
                    className={classNames ? classNames : ''}
                    ref={wrapperRef}
                    onScroll={() => {
                        if (
                            wrapperRef.current.scrollLeft + 40 >
                            wrapperRef.current.scrollWidth -
                                2 * wrapperRef.current.clientWidth
                        ) {
                            setIsArrowRightHide(true);
                        } else {
                            setIsArrowRightHide(false);
                        }
                        if (
                            wrapperRef.current.scrollLeft - 40 <
                            wrapperRef.current.clientWidth
                        ) {
                            setIsArrowLeftHide(true);
                        } else {
                            setIsArrowLeftHide(false);
                        }
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
