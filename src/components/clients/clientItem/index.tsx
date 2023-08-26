import React, {FC} from 'react';
import Block from "../../common/block";
import {IClient} from "data/IClient";
import styles from './ClientItem.module.scss';

interface IProps {
    item: IClient
}

const ClientItem: FC<IProps> = ({item}) => {
    return (
        <div className={styles.container}>
            <Block>
                <div className={styles.content_container}>

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

export default ClientItem;