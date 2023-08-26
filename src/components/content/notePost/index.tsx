import React from 'react';
import styles from './NotePost.module.scss';
import {BsThreeDots} from "react-icons/bs";
import mockImage from 'assets/images/mock/content.png'
const NotePost = () => {
    return (
        <div className={styles.container}>
            <div>
                <p>
                    <span className={styles.data}>20.12.2019 </span>

                    Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях,
                    снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани
                    ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и
                    сухожилиях.
                </p>

                <div className={styles.image_container} style={{backgroundImage: `url(${mockImage})`}}>

                </div>
            </div>
            <div className={styles.button_container}>
                <BsThreeDots/>
            </div>
        </div>
    );
};

export default NotePost;