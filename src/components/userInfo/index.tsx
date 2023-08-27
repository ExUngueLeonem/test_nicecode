import React from 'react';
import {clientStore} from "store/clientStore";
import {BsThreeDots} from "react-icons/bs";
import styles from './UserInfo.module.scss'
import {observer} from "mobx-react-lite";

const UserInfo = () => {
    const item = clientStore.activeClient
    return (
        <div className={styles.container}>
            <div
                className={styles.user_image}
                style={{backgroundImage: `url(${item?.image})`}}
            >
            </div>
            <div className={styles.content}>
                <div className={styles.name}>
                    {item?.name}
                </div>
                <div>
                    {item?.age}
                    {item?.sex === "male" && " муж."}
                    {item?.sex === "female" && " жен."}
                </div>
            </div>
            <div className={styles.button_container}>
                <BsThreeDots/>
            </div>
        </div>
    );
};

export default observer(UserInfo);