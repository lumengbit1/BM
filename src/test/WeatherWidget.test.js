import React from 'react';
import 'jest-styled-components';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherWidget from '..//components/WeatherWidget';

Enzyme.configure({ adapter: new Adapter() });

describe('render snapshop testing', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<WeatherWidget />);

    expect(wrapper).toMatchSnapshot();
  });
})