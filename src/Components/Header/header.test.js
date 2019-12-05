import React from 'react';
import {shallow} from 'enzyme'
import Header from './Header'
import '../../setupTests.js'

const setUp=(props={})=>{
    const component = shallow(<Header {...props}/>);
    return component
}

const findByAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)// can be added to utils
    return wrapper
};

describe("Header component", ()=>{
    let component 
    beforeEach(()=>{
        component = setUp()
    })

    it("should render without errors",()=>{
       const wrapper = findByAttr(component, 'headerComponent')
       expect(wrapper.length).toBe(1)
    })

    it("shouild render img",()=>{
        const img = component.find(`[data-test='logoImg']`)
        expect(img.length).toBe(1)
    })
})
