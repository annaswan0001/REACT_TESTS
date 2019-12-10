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
})