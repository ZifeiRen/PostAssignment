import React from 'react';
import { shallow } from 'enzyme';
import { Router, Route } from 'react-router-dom';
import App from '../App';
import Header from '../Header';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />)
})

it('show a Header component', () => {
    expect(wrapped.find(Header).length).toEqual(1)
})

it('show 4 Route component', () => {
    expect(wrapped.find(Route).length).toEqual(4)
})

it('show 1 Router component', () => {
    expect(wrapped.find(Router).length).toEqual(1)
})