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
                    <div><input type={"checkbox"} onChange={e => onAllPickHandler(e.target.checked)}/> Все</div>
                    <div>{count}</div>
                    <Spacer/>
                    <div> Действия</div>
                    <div onClick={() => picKUpHandler(false)}> Отменить</div>
                </>
                :
                <>
                    <div> {clients.length} </div>
                    <Spacer/>
                    <div onClick={() => picKUpHandler(true)}> Выбрать</div>
                </>
            }
        </div>
    );
};

export default observer(PickUpPanel);