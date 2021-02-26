import React from 'react';
import { Img } from '../../../_shared/theme/components';
import { Div } from '../../../_shared/components';
import InfoDanieleCarta from '../../assets/img/info-daniele-carta.jpg';
import ogImage from '../../assets/img/ogImage.png';
import Meta from '../../../_shared/theme/components/meta';

const Me = () => {
  return (
    <Div>
      <Meta ogImage={ogImage} />
      <Div>
        <Img fullWidth={true} src={InfoDanieleCarta} />
      </Div>
    </Div>
  );
};

export default Me;
