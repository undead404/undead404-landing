import { Card, Image } from "antd";
import familyPhoto from "../assets/family.jpeg";

const family = (
  <Card
    cover={<Image src={familyPhoto} preview={false} width={480} />}
    title="And here's my tiny family"
  >
    <Card.Meta description="Me and my lovely wife Anna" />
  </Card>
);

export default family;
