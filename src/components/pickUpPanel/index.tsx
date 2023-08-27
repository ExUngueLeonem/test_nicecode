import React from 'react';
import {observer} from "mobx-react-lite";
import {clientStore} from "store/clientStore";
import Spacer from "../common/spacer";
import styles from './PickUpPanel.module.scss';

const PickUpPanel = () => {
    const isPickUp = clientStore.isPickUp;
    const count = clientStore.checkedClientsCount;
    const clients = clientStore.clients
    const picKUpHandler = (bool: boolean) => clientStore.setIsPickUp(bool);
    const onAllPickHandler = (checked: boolean) => {
        clientStore.setAllClientsChecked(checked)
    }

    return (
        <div className={styles.container}>
            {isPickUp ?
                <>
                    <div>
                        <input
                            className={styles.clickable}
                            type={"checkbox"}
                            onChange={e => onAllPickHandler(e.target.checked)}/>
                    </div>
                    <div> Все</div>
                    {count ? <div className={styles.count}>{count}</div> : <></>}
                    <Spacer/>
                    <div className={styles.clickable}>Действия</div>
                    <div onClick={() => picKUpHandler(false)} className={styles.clickable}>Отменить</div>
                </>
                :
                <>
                    <div className={styles.client_length}> {clients.length} </div>
                    <Spacer/>
                    <div onClick={() => picKUpHandler(true)} className={styles.clickable}> Выбрать</div>
                </>
            }
        </div>
    );
};

export default observer(PickUpPanel);