import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Homepage from './Homepage';

Enzyme.configure({ adapter: new Adapter() });

describe('Homepage', () => {

  it('Jest Setup', () => {
    const foo = true;
    expect(foo).toBe(true);
  })

  it('should show text', () => {
    const wrapper = shallow(<Homepage/>);
    const myName = <h1>grahamfalconer.com</h1>
    expect(wrapper).toContainReact(myName)
  })
});