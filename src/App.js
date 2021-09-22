import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  { id: 1, name: 'peach', img: 'https://www.starkbros.com/images/dynamic/5250-960x960.jpg' },
  {
    id: 2,
    name: 'apple',
    img: 'https://www.growingmarijuanablog.com/wp-content/uploads/2020/10/How-to-Smoke-Weed-with-an-Apple-scaled.jpg',
    rating: 4.2,
  },
  {
    id: 3,
    name: 'melon',
    img: 'https://westernnews.media.clients.ellingtoncms.com/img/photos/2018/06/29/Cantaloupe.jpeg',
    rating: 3.8,
  },
  {
    id: 4,
    name: 'banana',
    img: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1492113437/cheats/2016/05/09/china-outlaws-online-banana-eating/160509-china-bananas-cheat_pfuv1z',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'grape',
    img: 'https://www.registerguard.com/storyimage/CK/20180509/ENTERTAINMENTLIFE/180508210/AR/0/AR-180508210.jpg',
    rating: 5.0,
  },
];

function Food({ name, img, rating }) {
  return (
    <li>
      <h2>l like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={img} width="300" height="300" alt={name} />
    </li>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <ul>
      {foodILike.map((food) => (
        <Food key={food.id} name={food.name} img={food.img} rating={food.rating} />
      ))}
    </ul>
  );
}

export default App;
