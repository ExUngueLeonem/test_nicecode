import React, {FC, ReactNode} from 'react';
import styles from './Block.module.scss'

interface IProps {
    children: ReactNode;
}
const Block: FC<IProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Block;