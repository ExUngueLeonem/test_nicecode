import React from 'react';
import Layout from "layout";
import Block from "components/common/block";
import UserInfo from "components/userInfo";
import SearchPanel from "components/searchPanel";
import ContentPanel from "components/contentPanel";
import ControlContent from "components/controlPanel/controlContent";
import styles from './HomePage.module.scss';
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
                    <ControlContent/>
                    <ContentPanel/>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;