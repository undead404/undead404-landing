import { Card, Image } from 'antd';
import { useTranslation } from 'react-i18next';

import familyPhoto from '../assets/family.jpeg';

const image = <Image src={familyPhoto} preview={false} width={480} />;

export default function Family(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Card cover={image} title={t("And here's my tiny family")}>
      <Card.Meta description={t('Me and my lovely wife Anna')} />
    </Card>
  );
}
