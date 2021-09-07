import { Card, Image, Typography } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import ymhScreenshot from '../assets/ymh.png';

const wrappedScreenshot = (
  <Typography.Link href="https://you-must-hear.surge.sh" target="_blank">
    <Image
      alt="You Must Hear"
      preview={false}
      src={ymhScreenshot}
      width={480}
    />
  </Typography.Link>
);

export default function YouMustHear(): JSX.Element {
  const { t } = useTranslation();
  const wrappedDescription = useMemo(
    () => (
      <Typography.Text>
        {t('100 albums you must hear before you die. See ')}
        <Typography.Link
          href="https://you-must-hear.surge.sh/tag"
          target="_blank"
        >
          {t('Tags')}
        </Typography.Link>
        {t(' for lists by genres!')}
      </Typography.Text>
    ),
    [t],
  );
  const wrappedTitle = useMemo(
    () => (
      <Typography.Link href="https://you-must-hear.surge.sh" target="_blank">
        {t('You Must Hear')}
      </Typography.Link>
    ),
    [t],
  );
  return (
    <Card
      cover={wrappedScreenshot}
      title={t('You may visit most recent of my personal projects')}
    >
      <Card.Meta title={wrappedTitle} description={wrappedDescription} />
    </Card>
  );
}
