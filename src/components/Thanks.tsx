import { Card, Image } from 'antd';
import { useTranslation } from 'react-i18next';

import drummer from '../assets/drummer.gif';

const image = <Image src={drummer} preview={false} width={480} />;

export default function Thanks(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Card cover={image} title={t('Thank you for scrolling this far!')}>
      <Card.Meta description={t('Have a nice day')} />
    </Card>
  );
}
