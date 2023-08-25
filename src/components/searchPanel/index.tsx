import React from 'react';
import classNames from "classnames";
import Block from "components/common/block";
import Spacer from "../common/spacer";
import {BsPlusLg, BsSortDown, BsSearch} from "react-icons/bs";
import styles from './SearchPanel.module.scss';
const SearchPanel = () => {
    return (
        <Block>
            <div className={styles.container}>
                <div className={styles.button_container}>
                    <BsSearch/>
                </div>
                <Spacer/>
                <div className={classNames(styles.button_container, styles.filter)}>
                    <BsSortDown/>
                </div>
                <div className={classNames(styles.button_container, styles.add)}>
                    <BsPlusLg/>
                </div>
            </div>
        </Block>
    );
};

export default SearchPanel;