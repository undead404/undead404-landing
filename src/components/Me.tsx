import { Card, Image } from 'antd';

import myFace from '../assets/me.jpg';

const image = <Image alt="My face" preview={false} src={myFace} width={480} />;

export default function Me(): JSX.Element {
  return (
    <Card cover={image} title="Nice to meet you!">
      <Card.Meta
        title="I am a software engineer, 4 years of experience"
        description="JavaScript, React, TypeScript, Redux, Vue, Node.js, etc, that kind of stuff"
      />
    </Card>
  );
}
