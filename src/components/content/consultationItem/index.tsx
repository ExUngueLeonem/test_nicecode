import React from 'react';
import styles from './ConsultationItem.module.scss';
import {BsCameraVideoFill} from "react-icons/bs";
import ContentItemWrapper from "../contentItemWrapper";

const ConsultationItem = () => {
    return (
        <ContentItemWrapper>
            <div className={styles.image_container}>
                <BsCameraVideoFill/>
            </div>

            <div className={styles.content_container}>
                <div>
                    Online консультация
                </div>
                <div className={styles.info_container}>
                    <div className={styles.date}>
                        15.01.2019, 12:30-13:00
                    </div>
                    <div className={styles.status}>
                        Не подтверждена
                    </div>
                </div>
            </div>
        </ContentItemWrapper>
    );
};

export default ConsultationItem;