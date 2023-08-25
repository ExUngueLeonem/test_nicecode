import React from 'react';
import {NavLink} from "react-router-dom";
import Spacer from "components/common/spacer";
import {BsPlusCircle} from "react-icons/bs";
import styles from './ControlContent.module.scss';

const ControlContent = () => {
    return (
        <div className={styles.container}>
            <NavLink to={"/notes"} className={styles.item}>
                Заметки
            </NavLink>
            <NavLink to={"/consultation"} className={styles.item}>
                Консультации
            </NavLink>
            <NavLink to={"/video"} className={styles.item}>
                Видео
            </NavLink>
            <NavLink to={"/events"} className={styles.item}>
                Мероприятия
            </NavLink>
            <Spacer/>
            <div className={styles.item}>
                Новая заметка
                <div className={styles.icon}>
                <BsPlusCircle/>
                </div>
            </div>
        </div>
    );
};

export default ControlContent;