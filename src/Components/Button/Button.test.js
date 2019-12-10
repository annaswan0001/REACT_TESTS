import React from "react";
import { findByAttr, checkProps } from "../../utils/utils";
import Button from "./Button";
import { shallow } from "enzyme";
import "../../setupTests.js";

describe("Render button", () => {
  describe("Checking proptypes", () => {
    it("Should not throw the warning", () => {
      const expectedProps = {
        buttonText: "Button",
        emitEvent: () => {}
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Button renders", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn()
      const props = {
        buttonText: "Button",
        emitEvent: mockFunc
      };
      wrapper = shallow(<Button {...props} />);
    });
    test("Render a Button", () => {
      const button = findByAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    test("it should emit collback on click event", ()=>{
        const button = findByAttr(wrapper, "buttonComponent");
        button.simulate('click');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1)
    })
  });
});
