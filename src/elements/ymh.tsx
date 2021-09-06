import { Card, Image, Typography } from "antd";
import ymhScreenshot from "../assets/ymh.png";

const ymh = (
  <Card
    cover={
      <Typography.Link href="https://you-must-hear.surge.sh" target="_blank">
        <Image
          alt="You Must Hear"
          preview={false}
          src={ymhScreenshot}
          width={480}
        />
      </Typography.Link>
    }
    title="You may visit most recent of my personal projects"
  >
    <Card.Meta
      title={
        <Typography.Link href="https://you-must-hear.surge.sh" target="_blank">
          You Must Hear
        </Typography.Link>
      }
      description={
        <Typography.Text>
          100 albums you must hear before you die. See{" "}
          <Typography.Link
            href="https://you-must-hear.surge.sh/tag"
            target="_blank"
          >
            Tags
          </Typography.Link>{" "}
          for lists by genres!
        </Typography.Text>
      }
    />
  </Card>
);

export default ymh;
