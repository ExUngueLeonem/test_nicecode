import React from 'react';
import styles from './VideoItem.module.scss';
import ContentItemWrapper from "../contentItemWrapper";
import mockImage from 'assets/images/mock/video.png';

const VideoItem = () => {
    return (
        <ContentItemWrapper>
            <div
                className={styles.image_container}
                style={{backgroundImage: `url(${mockImage})`}}
            >
            </div>

            <div className={styles.content_container}>
                <div>
                    Крабик, ходьба в бок в приседе с двумя резинками Кра…
                </div>
                <div className={styles.info_container}>
                    <div>
                        Астахова Е.В.
                    </div>
                    <div className={styles.date}>
                        15.01.2019, 12:30-13:00
                    </div>
                </div>
            </div>
        </ContentItemWrapper>
    );
};

export default VideoItem;