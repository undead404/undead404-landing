import { Card, Image } from "antd";
import drummer from "../assets/drummer.gif";

const thanks = (
  <Card
    cover={<Image src={drummer} preview={false} width={480} />}
    title="Thank you for scrolling this far!"
  >
    <Card.Meta description="Have a nice day" />
  </Card>
);

export default thanks;
