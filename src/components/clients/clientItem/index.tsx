import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {clientStore, IClientStore} from "store/clientStore";
import classNames from "classnames";
import {LiaTelegram} from "react-icons/lia";
import {IoWarningOutline} from "react-icons/io5";
import styles from './ClientItem.module.scss';

interface IProps {
    item: IClientStore
}

const ClientItem: FC<IProps> = ({item}) => {
    const isPickUp = clientStore.isPickUp;
    const activeClientId = clientStore.activeClientId
    const checkBoxHandler = (checked: boolean) => {
        clientStore.setClientChecked(item.id, checked)
    }

    const setActiveClientHandler = (id: string) => {
        clientStore.setActiveClientId(id)
    }

    console.log(item.id, activeClientId)
    return (
        <div
            className={classNames(styles.container, {[styles.active_message]: item.status === "message"} )}
            onClick={() => setActiveClientHandler(item.id)}
        >
            <div className={classNames(styles.content_container, {[styles.active]: item.id === activeClientId})}>
                <div>
                    {isPickUp && <input type={"checkbox"} checked={item.checked}
                                        onChange={(e) => checkBoxHandler(e.target.checked)}/>}
                </div>

                <div
                    className={styles.image_container}
                    style={{backgroundImage: `url(${item.image})`}}
                >
                </div>
                <div>
                    {item.name}
                </div>
                <div className={styles.icon}>
                    {item.status === "message" && <LiaTelegram className={styles.message}/>}
                    {item.status === "warning" && <IoWarningOutline className={styles.warning}/>}
                </div>
            </div>
        </div>
    );
};

export default observer(ClientItem);