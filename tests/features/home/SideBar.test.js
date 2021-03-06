import React from 'react';
import { shallow } from 'enzyme';
import { SideBar } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SideBar />);
  expect(renderedComponent.find('.Sidebar').length).toBe(1);
});
