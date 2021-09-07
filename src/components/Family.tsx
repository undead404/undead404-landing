import { Card, Image } from 'antd';

import familyPhoto from '../assets/family.jpeg';

const image = <Image src={familyPhoto} preview={false} width={480} />;

export default function Family(): JSX.Element {
  return (
    <Card cover={image} title="And here's my tiny family">
      <Card.Meta description="Me and my lovely wife Anna" />
    </Card>
  );
}
