import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {clientStore} from "store/clientStore";
import {Outlet} from "react-router-dom";
import Layout from "layout";
import Block from "components/common/block";
import UserInfo from "components/userInfo";
import SearchPanel from "components/searchPanel";

import styles from './HomePage.module.scss';

const HomePage = () => {
    const clients = clientStore.clients

    useEffect(() => {
        clientStore.fetchClients()
            .finally(/*TODO loading*/)
    }, [])

    /*TODO получение юзера*/

    return (
        <Layout>
            <div className={styles.content_layout}>
                <div className={styles.left_panel}>
                    <SearchPanel/>
                    {clients && clients.map(item =>
                        <Block key={item.id}>
                            {item.name}
                        </Block>
                    )}
                </div>
                <div className={styles.right_panel}>
                    <UserInfo/>
                    <Outlet/>
                </div>
            </div>
        </Layout>
    );
};

export default observer(HomePage);