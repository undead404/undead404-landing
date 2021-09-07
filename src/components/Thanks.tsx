import { Card, Image } from 'antd';

import drummer from '../assets/drummer.gif';

const image = <Image src={drummer} preview={false} width={480} />;

export default function Thanks(): JSX.Element {
  return (
    <Card cover={image} title="Thank you for scrolling this far!">
      <Card.Meta description="Have a nice day" />
    </Card>
  );
}
