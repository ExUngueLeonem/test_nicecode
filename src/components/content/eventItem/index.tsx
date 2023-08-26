import React from 'react';
import styles from './EventItem.module.scss';
import ContentItemWrapper from "../contentItemWrapper";
import mockImage from 'assets/images/mock/video.png';

const EventItem = () => {
    return (
        <ContentItemWrapper>
            <div
                className={styles.image_container}
                style={{backgroundImage: `url(${mockImage})`}}
            >
            </div>

            <div className={styles.content_container}>
                <div>
                    Тяга резинки в шаге со сгибанием локтя под 90 градусов
                </div>
                <div className={styles.info_container}>
                    <div>
                        Вебинар
                    </div>
                    <div className={styles.date}>
                        15.01.2019
                    </div>
                    <div className={styles.date}>
                        12:30-13:00
                    </div>
                </div>
            </div>
        </ContentItemWrapper>
    );
};

export default EventItem;