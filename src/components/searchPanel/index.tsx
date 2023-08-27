import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {clientStore} from "store/clientStore";
import classNames from "classnames";
import Block from "components/common/block";
import Spacer from "../common/spacer";
import {BsPlusLg, BsSortDown, BsSearch} from "react-icons/bs";
import {LiaTimesSolid} from "react-icons/lia";
import styles from './SearchPanel.module.scss';

const SearchPanel = () => {
    const [isOpened, setIsOpened] = useState(false);
    const filterString = clientStore.filterString
    const onChangeFilterStringHandler = (value: string) => {
        clientStore.setFilterString(value)
    }
    const openSearchHandler = () => setIsOpened(true)
    const closeSearchHandler = () => {
        clientStore.setFilterString("");
        setIsOpened(false);
    }
    return (
        <Block>
            <div className={styles.container}>
                {isOpened ?
                    <>
                        <div className={styles.search_input}>
                            <div className={styles.button_container}>
                                <BsSearch/>
                            </div>
                            <input
                                type={"text"}
                                value={filterString}
                                placeholder={"Поиск..."}
                                onChange={e => onChangeFilterStringHandler(e.target.value)}
                            />
                        </div>
                        <div
                            className={classNames(styles.button_container, styles.add)}
                            onClick={() => closeSearchHandler()}
                        >
                            <LiaTimesSolid/>
                        </div>
                    </>

                    :
                    <>
                        <div
                            className={styles.button_container}
                            onClick={() => openSearchHandler()}
                        >
                            <BsSearch/>
                        </div>
                        <Spacer/>
                        <div className={classNames(styles.button_container, styles.filter)}>
                            <BsSortDown/>
                        </div>
                        <div className={classNames(styles.button_container, styles.add)}>
                            <BsPlusLg/>
                        </div>
                    </>
                }
            </div>
        </Block>
    );
};

export default observer(SearchPanel);