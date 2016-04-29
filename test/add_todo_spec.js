import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddTodo from '../src/components/add_todo';

describe('AddTodo', () => {
  it('has an input field to add todos', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper.find('input').length).to.equal(1);
  })

  it('has placeholder text: Add Todo', () => {
    const wrapper = shallow(<AddTodo />);
    const placeholder = wrapper.find('input').node.props.placeholder;

    expect(placeholder).to.equal('Add Todo');
  })
})


