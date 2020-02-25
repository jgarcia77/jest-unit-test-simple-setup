import React from 'react';
import { shallow } from 'enzyme';
import Button from '../button';

describe("When component is mounted", () => {
    it("Then is should contain a button", () => {
        const wrapper = shallow(<Button text="Click Me !" onClick={() => {}} />);
        const button = wrapper.find('button');

        expect(button.exists()).toEqual(true);
    });
});