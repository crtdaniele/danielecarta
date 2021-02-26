export default function images(name) {
  const imageList = {
    InfoDanieleCarta: require('../../src/assets/img/info-daniele-carta.jpg'),
  };
  let image = imageList;
  name.split('.').forEach((name) => {
    image = image[name];
  });
  return image;
}
