import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {clientStore, IClientStore} from "store/clientStore";
import classNames from "classnames";
import Block from "../../common/block";
import {LiaTelegram} from "react-icons/lia";
import {IoWarningOutline} from "react-icons/io5";
import styles from './ClientItem.module.scss';

interface IProps {
    item: IClientStore
}

const ClientItem: FC<IProps> = ({item}) => {
    const isPickUp = clientStore.isPickUp
    const checkBoxHandler = (checked: boolean) => {
        clientStore.setClientChecked(item.id, checked)
    }
    return (
        <div className={classNames(styles.container, {[styles.active]: item.status === "message"} )}>
            <Block>
                <div className={styles.content_container}>
                    <div>
                        {isPickUp && <input type={"checkbox"} checked={item.checked} onChange={(e) => checkBoxHandler(e.target.checked)}/>}
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

            </Block>
        </div>
    );
};

export default observer(ClientItem);