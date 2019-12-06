import React from "react";
import { shallow } from "enzyme";
import { findByAttr, checkProps} from "../../utils/utils.js";
import Headline from "./Headline";
import "../../setupTests.js";



const setUp = props => {
  const wrapper = shallow(<Headline {...props} />);
  return wrapper;
};

describe("Headline render", () => {

  describe("checkingPropTypes", ()=>{
        test("it should not throw a worning", ()=>{
            const expectedProps = {
                name : "test name",
                desc : "test desk",
                tempArr :[{
                    fName: "Test fname",
                    lName: "Test lName",
                    email:"34", 
                    age: 24,
                    onlineStatus: false
                }]
            }
            const propsError = checkProps(Headline, expectedProps)
            expect(propsError).toBeUndefined()
        })
  })



  describe("render with props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Hello",
        desc: "dshfhsfhkdhj"
      };
      wrapper = setUp(props);
    });
    test("render without errors", () => {
      const component = findByAttr(wrapper, "HeadLineComponent");
      expect(component.length).toBe(1);
    });
    test("render header", () => {
      const header = findByAttr(wrapper, "header");
      expect(header.length).toBe(1);
    });
    test("render desc", () => {
      const component = findByAttr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });
  
  
  
  
  describe("render withOUT props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    test("render without errors without props", () => {
      const desc = findByAttr(wrapper, "HeadLineComponent");
      expect(desc.length).toBe(0);
    });
  });
});
