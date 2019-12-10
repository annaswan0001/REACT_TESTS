import React from 'react';
import ListItem from './ListItem'
import { shallow } from "enzyme";
import { findByAttr, checkProps} from "../../utils/utils.js";
import "../../setupTests.js";
import { isTSAnyKeyword } from '@babel/types';



describe("ListItem", ()=>{

    describe("Check propTypes", ()=>{

        it("Should not throw the warning", ()=>{
            const expectedProps = {
                title:"string",
                desc:"string"
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()

        })
    })

    describe("Component renders", ()=>{

        let wrapper
        beforeEach(()=>{
            const props = {
                title:"string",
                desc:"string"
            }
            wrapper = shallow(<ListItem {...props}/>)
        })
        it("Should render without error", ()=>{
            const listItem = findByAttr(wrapper,"listItemComponent")
            expect(listItem.length).toBe(1)
        })
        
        it("Shoul render a title",()=>{
            const title = findByAttr(wrapper, "componentTitle")
            expect(title.length).toBe(1)
        })

        it("Should render a desc", ()=>{
            const desc = findByAttr(wrapper, "componentDesc")
            expect(desc.length).toBe(1)
        }  )
    })


    describe("Should not render", ()=>{
        let wrapper 
        beforeEach(()=>{
            const props = {
                desc : "hello"
            }
        wrapper = shallow(<ListItem {...props}/>)
        })

        it("Should not render without title", ()=>{
            const listItem = findByAttr(wrapper,"listItemComponent")
            expect(listItem.length).toBe(0)
        })

    })
})