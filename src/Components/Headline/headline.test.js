import React from 'react';
import {shallow} from 'enzyme'
import {findByAttr} from '../../utils/utils.js'
import Headline from './Headline'
import '../../setupTests.js'

const setUp = (props)=>{
    const wrapper = shallow(<Headline {...props}/>)
    return wrapper
}

describe('Headline render', ()=>{
    describe('render with props', ()=>{
        let wrapper
        beforeEach(()=>{
            const props = {
                header:"Hello",
                desc:"dshfhsfhkdhj"
            }
            wrapper = setUp(props)
        })
        test('render without errors',()=>{
            const component = findByAttr(wrapper,'HeadLineComponent')
            expect(component.length).toBe(1)
        })
        test('render header',()=>{
            const header = findByAttr(wrapper,'header')
            expect(header.length).toBe(1)
        })
        test('render desc',()=>{
            const component = findByAttr(wrapper,'desc')
            expect(component.length).toBe(1)
        })

    })
    describe('render withOUT props', ()=>{
        let wrapper
        beforeEach(()=>{
            wrapper = setUp()
        })
        test('render without errors without props',()=>{
            const desc = findByAttr(wrapper,'HeadLineComponent')
            expect(desc.length).toBe(0)
        })

    })
  
} )