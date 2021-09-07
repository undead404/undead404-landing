import { Card, Image, Typography } from 'antd';

import ymhScreenshot from '../assets/ymh.png';

const wrappedDescription = (
  <Typography.Text>
    100 albums you must hear before you die. See{' '}
    <Typography.Link href="https://you-must-hear.surge.sh/tag" target="_blank">
      Tags
    </Typography.Link>{' '}
    for lists by genres!
  </Typography.Text>
);
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
const wrappedTitle = (
  <Typography.Link href="https://you-must-hear.surge.sh" target="_blank">
    You Must Hear
  </Typography.Link>
);

export default function YouMustHear(): JSX.Element {
  return (
    <Card
      cover={wrappedScreenshot}
      title="You may visit most recent of my personal projects"
    >
      <Card.Meta title={wrappedTitle} description={wrappedDescription} />
    </Card>
  );
}
