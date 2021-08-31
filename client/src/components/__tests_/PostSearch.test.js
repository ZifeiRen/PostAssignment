import React from 'react';
import { mount } from 'enzyme'; 
import PostSearch from '../posts/PostSearch'

let wrapped;

beforeEach(() => {
    wrapped = mount(<PostSearch />)
})

it('has a input', () => {
    expect(wrapped.find('input').length).toEqual(1)
})

it('has a input that users can type in', () => {
    wrapped.find('input').simulate('change', {
        target: { value: 'new input' }
    })
    wrapped.update();

    expect(wrapped.find('input').prop('value')).toEqual('new input')
})


