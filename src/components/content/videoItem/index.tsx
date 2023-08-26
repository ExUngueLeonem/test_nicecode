import React, {FC} from 'react';
import {IVideo} from "data/IVideo";
import ContentItemWrapper from "../contentItemWrapper";
import styles from './VideoItem.module.scss';

interface IProps {
    item: IVideo;
}

const VideoItem: FC<IProps> = ({item}) => {

    return (
        <ContentItemWrapper>
            <div
                className={styles.image_container}
                style={{backgroundImage: `url(${item.image})`}}
            >
            </div>

            <div className={styles.content_container}>
                <div>
                    {item.text}
                </div>
                <div className={styles.info_container}>
                    <div>
                        {item.authorName}
                    </div>
                    <div className={styles.date}>
                        {item.date}
                    </div>
                </div>
            </div>
        </ContentItemWrapper>
    );
};

export default VideoItem;