import React from 'react';
import styles from './UserInfo.module.scss'
import userImg from 'assets/images/mock/user.png'
import {BsThreeDots} from "react-icons/bs";

const UserInfo = () => {
    return (
        <div className={styles.container}>
            <div
                className={styles.user_image}
                style={{backgroundImage: `url(${userImg})`}}
            >
            </div>
            <div className={styles.content}>
                Рожков Денис Петрович
                30 лет, муж
            </div>
            <div className={styles.button_container}>
                <BsThreeDots/>
            </div>
        </div>
    );
};

export default UserInfo;