import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {clientStore} from "store/clientStore";
import {Outlet} from "react-router-dom";
import Layout from "layout";
import UserInfo from "components/userInfo";
import ClientItem from "components/clients/clientItem";
import SearchPanel from "components/searchPanel";
import PickUpPanel from "components/pickUpPanel";
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
                    <PickUpPanel/>
                    <div className={styles.clients_container}>
                        <div className={styles.scroll_container}>
                            {clients && clients.map(item =>
                               <ClientItem key={item.id} item={item}/>
                            )}
                        </div>
                    </div>
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