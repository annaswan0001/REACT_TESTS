import React from 'react';
import {shallow} from 'enzyme'
import Header from './Header'
import '../../setupTests.js'


describe("Header component", ()=>{


    it("should render without errors",()=>{
       const component= shallow(<Header/>)
    //    console.log(component.debug())
       const wrapper = component.find(`[data-test='headerComponent']`)
       expect(wrapper.length).toBe(1)
    })

    it("shouild render img",()=>{
        const component= shallow(<Header/>)
        const img = component.find(`[data-test='logoImg']`)
        expect(img.length).toBe(1)
    })
})
