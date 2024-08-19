import { useEffect, useRef, useState } from 'react';
import classes from './Pagination.module.css';
import ArrowLeft from '/src/images/icons/arrowLeft.svg?react';

export default function Pagination() {
    const [startNumOfPage, setStartNumOfPage] = useState(1);
    const [activePage, setActivePage] = useState(1);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isGreaterFour, setIsGreaterFour] = useState(false);
    const arrowLeftRef = useRef();
    const arrowRightRef = useRef();
    const firstWrapperRef = useRef();
    const secondWrapperRef = useRef();
    const sixPageRef = useRef();
    const firstPageRef = useRef();
    const fourPageRef = useRef();
    const activePageRef = useRef();
    function arrowHandler(isLeft) {
        if (isLeft) {
            numClickHandler(activePage - 1);
        } else {
            numClickHandler(activePage + 1);
        }
    }
    function numClickHandler(e) {
        const value = typeof e === 'number' ? e : +e.target.innerText;
        if (value === 4) {
            setStartNumOfPage(1);
            setIsGreaterFour(false);
            setIsDisabled(false);
            setActivePage(value);

            [...firstWrapperRef.current.children].forEach((page) => {
                page.classList.remove(classes.active);
            });
            fourPageRef.current.classList.add(classes.active);
            sixPageRef.current.classList.add(classes.show);

            return;
        } else {
            sixPageRef.current.classList.remove(classes.show);
        }

        if (value < 4) {
            setIsGreaterFour(false);
            setStartNumOfPage(1);
            setActivePage(value);
            [...firstWrapperRef.current.children].forEach((page) => {
                page.classList.remove(classes.active);
            });
            firstWrapperRef.current.children[value - 1].classList.add(
                classes.active
            );

            if (value === 1) {
                setIsDisabled(true);
            } else {
                setIsDisabled(false);
            }
            return;
        }

        setIsGreaterFour(true);
        setStartNumOfPage(value);
        setActivePage(value);
        [...secondWrapperRef.current.children].forEach((page) => {
            page.classList.remove(classes.active);
        });
        activePageRef.current.classList.add(classes.active);
    }
    useEffect(() => {
        if (firstWrapperRef.current) {
            firstWrapperRef.current.children[0].classList.add(classes.active);
        }
    }, []);
    return (
        <div className={classes.wrapper}>
            <button
                className={`${classes.circle} ${classes.ArrowLeft}`}
                onClick={() => arrowHandler(true)}
                ref={arrowLeftRef}
                disabled={isDisabled}
            >
                <ArrowLeft />
            </button>{' '}
            <div
                className={classes.numsOfPage}
                ref={firstWrapperRef}
                style={{ display: !isGreaterFour ? 'flex' : 'none' }}
            >
                <div
                    className={`${classes.numOfPage}`}
                    onClick={numClickHandler}
                    ref={firstPageRef}
                >
                    {startNumOfPage}
                </div>
                <div className={classes.numOfPage} onClick={numClickHandler}>
                    {startNumOfPage + 1}
                </div>
                <div className={classes.numOfPage} onClick={numClickHandler}>
                    {startNumOfPage + 2}
                </div>
                <div
                    className={classes.numOfPage}
                    onClick={numClickHandler}
                    ref={fourPageRef}
                >
                    {startNumOfPage + 3}
                </div>
                <div className={classes.numOfPage} onClick={numClickHandler}>
                    {startNumOfPage + 4}
                </div>

                <div
                    className={`${classes.numOfPage} ${classes.sixNumOfPage}`}
                    onClick={numClickHandler}
                    ref={sixPageRef}
                >
                    6
                </div>
            </div>
            <div
                className={classes.numsOfPage}
                style={{ display: isGreaterFour ? 'flex' : 'none' }}
                ref={secondWrapperRef}
            >
                <div className={classes.numOfPage} onClick={numClickHandler}>
                    1
                </div>
                <div className={`${classes.numOfPage} ${classes.ellipsis}`}>
                    ...
                </div>
                <div className={classes.numOfPage} onClick={numClickHandler}>
                    {startNumOfPage - 2}
                </div>
                <div className={classes.numOfPage} onClick={numClickHandler}>
                    {startNumOfPage - 1}
                </div>
                <div
                    className={`${classes.numOfPage}`}
                    onClick={numClickHandler}
                    ref={activePageRef}
                >
                    {startNumOfPage}
                </div>
                <div className={classes.numOfPage} onClick={numClickHandler}>
                    {startNumOfPage + 1}
                </div>
                <div className={classes.numOfPage} onClick={numClickHandler}>
                    {startNumOfPage + 2}
                </div>
            </div>
            <button
                className={`${classes.circle} ${classes.ArrowRight}`}
                onClick={() => arrowHandler(false)}
                ref={arrowRightRef}
            >
                <ArrowLeft />
            </button>{' '}
        </div>
    );
}
