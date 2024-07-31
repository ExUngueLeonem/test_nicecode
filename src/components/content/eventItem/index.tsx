import React, {FC} from 'react';
import {IEvent} from "data/IEvent";
import ContentItemWrapper from "../contentItemWrapper";
import styles from './EventItem.module.scss';
import moment from "moment";

interface IProps {
    item: IEvent
}

const EventItem: FC<IProps> = ({item}) => {
    const date = moment(item.date).format("DD.MM.YYYY");
    const time = moment(item.date).format("hh:mm");
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
                        {date}
                    </div>
                    <div className={styles.date}>
                        {time}
                    </div>
                </div>
            </div>
        </ContentItemWrapper>
    );
};

export default EventItem;