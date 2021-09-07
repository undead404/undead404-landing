import { Card, Carousel, Image } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Pets.module.css';

import kusia from '../assets/kusia.jpg';
import lasagna from '../assets/lasagna.jpg';
import luna from '../assets/luna.jpg';
import simba from '../assets/simba.jpeg';
import siriCotelette from '../assets/siri_cotelette.jpeg';

function usePets() {
  const { t } = useTranslation();
  const pets = useMemo(
    () =>
      [
        {
          name: t('Kusia'),
          photo: kusia,
        },
        {
          name: t('Lasagna'),
          photo: lasagna,
        },
        {
          name: t('Luna'),
          photo: luna,
        },
        {
          name: t('Simba'),
          photo: simba,
        },
        {
          name: t('Siri & Kotlieta'),
          photo: siriCotelette,
        },
      ].map((pet) => ({
        ...pet,
        image: (
          <div key={pet.name} className={styles.photoWrapper}>
            <Image className={styles.photo} src={kusia} />
          </div>
        ),
      })),
    [t],
  );
  return pets;
}

export default function Pets(): JSX.Element {
  const { t } = useTranslation();
  const pets = usePets();
  const carousel = useMemo(
    () => (
      <Carousel autoplay dotPosition="bottom">
        {pets.map((pet) => (
          <Card cover={pet.image} key={pet.name} title={pet.name} />
        ))}
      </Carousel>
    ),
    [pets],
  );
  return (
    <Card cover={carousel} title={t('And a gallery of my pets')}>
      <Card.Meta description={t('Also part of the family!')} />
    </Card>
  );
}
