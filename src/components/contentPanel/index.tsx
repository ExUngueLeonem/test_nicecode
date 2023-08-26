import React, {FC, ReactNode} from 'react';
import styles from './ContentPanel.module.scss';

interface IProps {
    children: ReactNode;
}

const ContentPanel: FC<IProps> = ({children}) => {
    return (
        <div className={styles.container}>
            <div  className={styles.scroll_container}>
                {children}
            </div>
        </div>
    );
};

export default ContentPanel;