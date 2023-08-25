import React from 'react';
import Layout from "layout";
import styles from './HomePage.module.scss';
import Block from "components/common/block";
import UserInfo from "../../components/userInfo";
import ControlPanel from "../../components/controlPanel";
import ContentPanel from "../../components/contentPanel";
const HomePage = () => {
    return (
        <Layout>
            <div className={styles.content_layout}>

                <div className={styles.left_panel}>
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
                    <ControlPanel/>
                    <ContentPanel/>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;