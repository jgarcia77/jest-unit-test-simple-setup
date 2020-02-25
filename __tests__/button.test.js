import React from 'react';
import { shallow } from 'enzyme';
import Button from '../button';
import renderer from 'react-test-renderer';

describe("When component is mounted", () => {
    it("Then it should contain a button", () => {
        const wrapper = shallow(<Button text="Click Me !" onClick={() => {}} />);
        const button = wrapper.find('button');

        expect(button.exists()).toEqual(true);
    });

    it("And it should match snapshot", () => {
        const json = renderer.create(<Button text="Click Me !" onClick={() => {}} />);
        
        expect(json).toMatchSnapshot();
    });
});