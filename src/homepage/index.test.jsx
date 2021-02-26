import React from 'react';
import { shallow } from 'enzyme';
import { Div, Title, ExternalLink } from '../_shared/theme/components';
import HomePage from './index';

describe('Homepage Components', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Div />);
    expect(wrapper).toBeTruthy();
  });

  it('Renders correctly title', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(Title)).toBeTruthy();
  });

  it('Check if title is correct', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(Title).render().text()).toEqual('Daniele Carta');
  });

  it('Check if click on external link', () => {
    const wrapper = shallow(<HomePage />);
    const linkedinLink = wrapper.find(ExternalLink).at(0).prop('href');
    expect(linkedinLink).toEqual(
      'https://www.linkedin.com/in/daniele-carta-lugano/'
    );
  });
});
