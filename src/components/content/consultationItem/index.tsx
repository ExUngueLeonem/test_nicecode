import React, {FC} from 'react';
import {IConsultation} from "data/IConsultation";
import ContentItemWrapper from "../contentItemWrapper";
import {BsCameraVideoFill} from "react-icons/bs";
import styles from './ConsultationItem.module.scss';

interface IProps {
    item: IConsultation
}

const ConsultationItem: FC<IProps> = ({item}) => {
    return (
        <ContentItemWrapper>
            <div className={styles.image_container}>
                <BsCameraVideoFill/>
            </div>

            <div className={styles.content_container}>
                <div>
                    {item.type}
                </div>
                <div className={styles.info_container}>
                    <div className={styles.date}>
                        {item.date}
                    </div>
                    <div className={styles.status}>
                        {item.status !== "confirmed" && "Не подтверждена"}
                    </div>
                </div>
            </div>
        </ContentItemWrapper>
    );
};

export default ConsultationItem;