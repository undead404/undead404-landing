import { Typography } from 'antd';

import styles from './Header.module.css';
export default function MyHeader(): JSX.Element {
  return (
    <Typography.Title className={styles.root}>
      Hi! I'm Vitalii, Vitalii Perehonchuk
    </Typography.Title>
  );
}
