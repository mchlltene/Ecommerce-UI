import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';


const Home = () => {
  return(
    <div className="container">
      <Header />
      <div class="head-card">
      <Card image={'https://i.ebayimg.com/images/g/o~kAAOSwk99g3xbN/s-l140.jpg'}  />
      <Card image={'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/788/0378892_PE556222_S4.jpg'}/>
      <Card image={'https://ikea.azureedge.net/images/680x680/1/variantimages/49193733/0.jpg'}/>
      </div>
    </div >
  );
}

export default Home;
