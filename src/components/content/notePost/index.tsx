import React, {FC} from 'react';
import styles from './NotePost.module.scss';
import {BsThreeDots} from "react-icons/bs";
import {INote} from "data/INote";
import moment from "moment/moment";

interface IProps {
    item: INote
}

const NotePost: FC<IProps> = ({item}) => {
    const date = moment(item.date).format("DD.MM.YYYY")
    return (
        <div className={styles.container}>
            <div>
                <p>
                    <span className={styles.data}>{date} </span>
                    {item.text}
                </p>

                <div className={styles.image_container} style={{backgroundImage: `url(${item.image})`}}>
                </div>
            </div>
            <div className={styles.button_container}>
                <BsThreeDots/>
            </div>
        </div>
    );
};

export default NotePost;