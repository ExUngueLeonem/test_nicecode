import React from 'react';
import Layout from "layout";
import Block from "components/common/block";
import UserInfo from "components/userInfo";
import SearchPanel from "components/searchPanel";
import styles from './HomePage.module.scss';
import {Outlet} from "react-router-dom";
const HomePage = () => {
    return (
        <Layout>
            <div className={styles.content_layout}>

                <div className={styles.left_panel}>
                    <SearchPanel/>
                    <Block>
                        asdasd
                    </Block>
                    <Block>
                        asdasd
                    </Block>
                    <Block>
                        asdasd
                    </Block>
                    <Block>
                        asdasd
                    </Block>
                </div>
                <div className={styles.right_panel}>
                    <UserInfo/>
                    <Outlet/>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;