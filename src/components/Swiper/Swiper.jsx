import { useEffect, useState } from 'react';
import classes from './Swiper.module.css';
export default function Swiper({ swiperRef, children, closestElement }) {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState();
    const [scrollLeft, setScrollLeft] = useState();

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.scrollLeft = swiperRef.current.clientWidth;
        }
    }, []);
    return (
        <div
            className={classes.wrapper}
            onMouseUp={() => {
                if (isDragging) {
                    setIsDragging(false);
                    if (
                        swiperRef.current.scrollLeft <
                        swiperRef.current.clientWidth
                    ) {
                        swiperRef.current.scrollTo({
                            left: swiperRef.current.clientWidth,
                            behavior: 'smooth',
                        });
                    }
                    if (
                        swiperRef.current.scrollLeft >
                        swiperRef.current.scrollWidth -
                            2 * swiperRef.current.clientWidth
                    ) {
                        swiperRef.current.scrollTo({
                            left:
                                swiperRef.current.scrollWidth -
                                2 * swiperRef.current.clientWidth,
                            behavior: 'smooth',
                        });
                    }
                }
            }}
            onMouseDown={(e) => {
                if (e.target.closest(`.${closestElement}`)) {
                    setIsDragging(true);
                    setStartX(e.clientX);
                    setScrollLeft(swiperRef.current.scrollLeft);
                } else {
                    setIsDragging(false);
                }
            }}
            onMouseMove={(e) => {
                if (!isDragging) return;
                e.preventDefault();
                const x = e.clientX;
                const walk = (x - startX) * 0.7;
                swiperRef.current.scrollLeft = scrollLeft - walk;
            }}
        >
            {children}
        </div>
    );
}
