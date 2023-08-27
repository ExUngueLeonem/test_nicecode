import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import Spacer from "components/common/spacer";
import {BsPlusCircle} from "react-icons/bs";
import styles from './ControlContent.module.scss';

interface IProps {
    button: {
        text: string;
        onClick: (arg?: any) => void
    }
}

const ControlContent: FC<IProps> = ({button}) => {
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
            <div className={styles.item} onClick={button.onClick}>
                {button && button.text}
                <div className={styles.icon}>
                <BsPlusCircle/>
                </div>
            </div>
        </div>
    );
};

export default ControlContent;