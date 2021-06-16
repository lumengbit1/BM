import React from 'react';
import 'jest-styled-components';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherWidget from '../components/WeatherWidget';

Enzyme.configure({ adapter: new Adapter() });

describe('render snapshop testing', () => {
  it('1.renders correctly', () => {
    const wrapper = shallow(<WeatherWidget />);

    expect(wrapper).toMatchSnapshot();
  });

  it('2.weatherRecords props is undefined', () => {
    const wrapper = shallow(<WeatherWidget weatherRecords={undefined} />);

    expect(wrapper.html()).toBe(null)
  });

  it('3.loading props is true', () => {
    const wrapper = shallow(<WeatherWidget loading={true} />);

    expect(wrapper.text()).toBe('Loading...')
  });
})