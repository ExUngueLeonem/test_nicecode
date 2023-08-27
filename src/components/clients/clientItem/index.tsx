import React, {FC} from 'react';
import Block from "../../common/block";
import styles from './ClientItem.module.scss';
import {clientStore, IClientStore} from "store/clientStore";
import {observer} from "mobx-react-lite";

interface IProps {
    item: IClientStore
}

const ClientItem: FC<IProps> = ({item}) => {
    const isPickUp = clientStore.isPickUp
    const checkBoxHandler = (checked: boolean) => {
        clientStore.setClientChecked(item.id, checked)
    }
    return (
        <div className={styles.container}>
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
                    <div>
                        icon
                    </div>
                </div>

            </Block>
        </div>
    );
};

export default observer(ClientItem);