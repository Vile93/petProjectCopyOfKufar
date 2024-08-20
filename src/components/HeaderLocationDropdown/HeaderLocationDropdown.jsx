import classes from './HeaderLocationDropdown.module.css';
import LocationIcon from '/src/images/icons/location.svg?react';
import HeaderLocationSelect from '../HeaderLocationSelect/HeaderLocationSelect';
import { useEffect, useState } from 'react';

export default function HeaderLocationDropdown({ locationWrapperRef }) {
    const [locationText, setLocationText] = useState('Вся Беларусь');
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (locationWrapperRef.current) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (
                        mutation.type === 'attributes' &&
                        mutation.attributeName === 'class'
                    ) {
                        if (
                            locationWrapperRef.current.classList.contains(
                                'unactive'
                            )
                        ) {
                            setIsActive(false);
                        } else {
                            setIsActive(true);
                        }
                    }
                });
            });
            observer.observe(locationWrapperRef.current, { attributes: true });
        }
    }, [locationWrapperRef]);
    return (
        <div
            className={`${classes.location} ${'unactive'}`}
            ref={locationWrapperRef}
        >
            <div
                className={classes.locationWrapper}
                onClick={() =>
                    locationWrapperRef.current.classList.toggle('unactive')
                }
            >
                <LocationIcon />
                <div className={classes.location}>{locationText}</div>
            </div>

            <div
                className={classes.locationDropdown}
                style={{
                    display: isActive ? 'block' : 'none',
                }}
            >
                <div className={classes.locationDropdownRegion}>Ваш регион</div>
                <div className={classes.locationDropdownSelects}>
                    <HeaderLocationSelect />
                    <HeaderLocationSelect />
                </div>
                <button
                    className={classes.locationDropdownBtn}
                    onClick={() => {
                        locationWrapperRef.current.classList.add('unactive');
                    }}
                >
                    Выбрать
                </button>
            </div>
        </div>
    );
}
