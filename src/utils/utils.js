export const findByAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)// can be added to utils
    return wrapper
};