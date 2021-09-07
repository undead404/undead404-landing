import { Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { SocialIcon } from 'react-social-icons';

const video = (
  <div>
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      height="315"
      src="https://www.youtube.com/embed/yvUav1CkEcI"
      title="YouTube video player"
      width="560"
    />
  </div>
);
export default function Necrophag(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Card
      cover={video}
      title={t('You may check my primitive thrash metal band')}
    >
      <Card.Meta
        title="Necrophag"
        description={
          <>
            <SocialIcon
              target="_blank"
              title="Necrophag @ Facebook"
              url="https://www.facebook.com/Necrophag666/"
            />
            <SocialIcon
              target="_blank"
              title="Necrophag @ Instagram"
              url="https://www.instagram.com/necrophag_band/"
            />
            <SocialIcon
              target="_blank"
              title="Necrophag @ Youtube"
              url="https://www.youtube.com/channel/UCbqMwC4I-7jt5fYXjIgbR8A"
            />
          </>
        }
      />
    </Card>
  );
}
