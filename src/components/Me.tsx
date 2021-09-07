import { Card, Image } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import myFace from '../assets/me.jpg';

export default function Me(): JSX.Element {
  const { t } = useTranslation();
  const image = useMemo(
    () => <Image alt={t('My face')} preview={false} src={myFace} width={480} />,
    [t],
  );
  return (
    <Card cover={image} title={t('Nice to meet you!')}>
      <Card.Meta
        title={t('I am a software engineer, 4 years of experience')}
        description={t(
          'JavaScript, React, TypeScript, Redux, Vue, Node.js, etc, that kind of stuff',
        )}
      />
    </Card>
  );
}
