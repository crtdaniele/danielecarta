import React from 'react';
import { Div, Img } from '../../_shared/theme/components';
import InfoDanieleCarta from '../../assets/img/info-daniele-carta.jpg';
import ogImage from '../../assets/img/ogImage.png';
import Meta from '../../_shared/theme/components/meta';

const Me = () => {
  return (
    <>
      <Meta ogImage={ogImage} />
      <Div>
        <Img fullWidth={true} src={InfoDanieleCarta} />
      </Div>
    </>
  );
};

export default Me;
