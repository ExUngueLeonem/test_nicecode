import React, {FC, ReactNode} from 'react';
import styles from './ContentItemWrapper.module.scss';

interface IProps {
    children: ReactNode;
}

const ContentItemWrapper: FC<IProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default ContentItemWrapper;