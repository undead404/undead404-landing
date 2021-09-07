import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.css';
export default function MyHeader(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Typography.Title className={styles.root}>
      {t("Hi! I'm Vitalii, Vitalii Perehonchuk")}
    </Typography.Title>
  );
}
