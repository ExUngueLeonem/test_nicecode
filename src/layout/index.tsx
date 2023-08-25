import React, {FC, ReactNode} from 'react';
import styles from './Layout.module.scss';

interface IProps {
    children: ReactNode
}

const Layout: FC<IProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
            </div>
            <div className={styles.space}>
                <div className={styles.content_container}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;