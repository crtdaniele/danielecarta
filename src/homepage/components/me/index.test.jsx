import React from 'react';
import { shallow } from 'enzyme';
import { Div, Img } from '../../../_shared/theme/components';

jest.mock('../../../../__tests__/mock/images.js', () => jest.fn());

describe('Me Components', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Div />);
    expect(wrapper).toBeTruthy();
  });

  it('Renders correctly Img Components', () => {
    const wrapper = shallow(<Div />).first();
    expect(wrapper.find(Img)).toBeTruthy();
  });
});
