import { Card, Carousel, Image } from 'antd';

import styles from './Pets.module.css';

import kusia from '../assets/kusia.jpg';
import lasagna from '../assets/lasagna.jpg';
import luna from '../assets/luna.jpg';
import simba from '../assets/simba.jpeg';
import siriCotelette from '../assets/siri_cotelette.jpeg';
const pets = [
  {
    name: 'Kusia',
    photo: kusia,
  },
  {
    name: 'Lasagna',
    photo: lasagna,
  },
  {
    name: 'Luna',
    photo: luna,
  },
  {
    name: 'Simba',
    photo: simba,
  },
  {
    name: 'Siri & Kotlieta',
    photo: siriCotelette,
  },
].map((pet) => ({
  ...pet,
  image: (
    <div key={pet.name} className={styles.photoWrapper}>
      <Image className={styles.photo} src={kusia} />
    </div>
  ),
}));

const carousel = (
  <Carousel autoplay dotPosition="bottom">
    {pets.map((pet) => (
      <Card cover={pet.image} key={pet.name} title={pet.name} />
    ))}
  </Carousel>
);

export default function Pets(): JSX.Element {
  return (
    <Card cover={carousel} title="And a gallery of my pets">
      <Card.Meta description="Also part of the family!" />
    </Card>
  );
}
