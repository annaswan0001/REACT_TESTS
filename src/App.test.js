import React from 'react'
import {mount} from 'enzyme'
// import App from './App'
import {App} from './App'
import './setupTests'
import {findByAttr, testStore} from './utils/utils'
import {Provider} from 'react-redux'



const setUp =  (initialState = {}) =>{
  
    const store  = testStore(initialState)
    const wrapper = mount(<Provider store={store}><App /></Provider>)
    return wrapper
}

describe("render App",()=>{
    
    let wrapper 
    beforeEach(()=>{
        const initialState = {
            posts:[{
                title:"sdf",
                body:"dfs"
            },
            {
                title:"sdf",
                body:"dfs"
            },
            {
                title:"sdf",
                body:"dfs"
            }]
        }
        wrapper = setUp(initialState)
        
    })

    it("Should render without errors", ()=>{
        const component = findByAttr(wrapper, "appComponent" )
        expect(component.length).toBe(1)
    })

    it("Should update state correct", ()=>{
        const component = wrapper.childAt(0) // child of provider
        const classInstance = component.instance();
        classInstance.example_method() 
        const newState = classInstance.state.hideBtn
        expect(newState).toBe(true)
    })


    it("should update value correct", ()=>{
        const component =wrapper.childAt(0);
        const classInstance =  component.instance();
        const newValue = classInstance. example_method_updateValue(7);
        expect(newValue).toBe(0)
    })
})