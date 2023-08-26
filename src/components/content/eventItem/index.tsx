import React, {FC} from 'react';
import {IEvent} from "data/IEvent";
import ContentItemWrapper from "../contentItemWrapper";
import styles from './EventItem.module.scss';

interface IProps {
    item: IEvent
}

const EventItem: FC<IProps> = ({item}) => {
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
                        {item.type === "webinar" && "Вебинар"}
                        {item.type === "ne webinar" && "не вебинар)"}
                    </div>
                    <div className={styles.date}>
                        {item.date}
                    </div>
                    <div className={styles.date}>
                        {item.date}
                    </div>
                </div>
            </div>
        </ContentItemWrapper>
    );
};

export default EventItem;