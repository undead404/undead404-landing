import { Card, Carousel, Image } from "antd";
import { CSSProperties } from "react";
import kusia from '../assets/kusia.jpg';
import lasagna from '../assets/lasagna.jpg';
import luna from '../assets/luna.jpg';
import simba from '../assets/simba.jpeg';
import siriCotelette from "../assets/siri_cotelette.jpeg";

const wrapperStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center'
}

const imageStyle: CSSProperties = {
    maxWidth: '480px',
}

const carousel = (
  <Carousel autoplay dotPosition="bottom">
  <Card cover={<div style={wrapperStyle}><Image src={kusia} style={imageStyle} /></div>} title="Kusia"></Card>
    <Card cover={<div style={wrapperStyle}><Image src={lasagna} style={imageStyle} /></div>} title="Lasagna"></Card>
    <Card cover={<div style={wrapperStyle}><Image src={luna} style={imageStyle} /></div>} title="Luna"></Card>
    <Card cover={<div style={wrapperStyle}><Image src={simba} style={imageStyle} /></div>} title="Simba"></Card>
    <Card cover={<div style={wrapperStyle}><Image src={siriCotelette} style={imageStyle} /></div>} title="Siri & Kotlieta"></Card>
  </Carousel>
);

const pets = (
  <Card cover={carousel} title="And a gallery of my pets">
    <Card.Meta description="Also part of the family!" />
  </Card>
);

export default pets;
