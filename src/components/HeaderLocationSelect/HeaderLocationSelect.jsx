import { useRef } from 'react';
import classes from './HeaderLocationSelect.module.css';
import ArrowLeft from '/src/images/icons/arrowLeft.svg?react';

export default function HeaderLocationSelect() {
    const selectRef = useRef();
    return (
        <div className={classes.locationDropdownSelectWrapper}>
            <ArrowLeft className={classes.locationDropdownArrowDown} />
            <select className={classes.locationDropdownSelect} ref={selectRef}>
                <option value="test1">test1</option>
                <option value="test2">test2</option>
            </select>
        </div>
    );
}
