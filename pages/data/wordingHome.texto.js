
import imagensleep from '../../public/img/sueño.png';
import imagencaminar from '../../public/img/caminar.png';
import imagencardio from '../../public/img/cardiaco.png';
import imagencalorias from '../../public/img/calorias.png';

const ButtonsHome = [
  {
    id: 1,
    image: imagensleep,
    name: "Sleep",
    url: "/sleep",
  },
  {
    id: 2,
    image: imagencaminar,
    name: "Steps",
    url: "/caminar",
  },
  {
    id: 3,
    image: imagencardio,
    name: "Heart rate",
    url: "/cardiaco",
  },
  {
    id: 4,
    image: imagencalorias,
    name: "Calories",
    url: "/calories",
  },
 
];

export default ButtonsHome;
