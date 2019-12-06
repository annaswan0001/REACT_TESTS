import checkPropTypes from 'check-prop-types';

export const findByAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)// can be added to utils
    return wrapper
};

export const checkProps = (component, expectedProps) =>{
    const propsError =  checkPropTypes(component.propTypes, expectedProps, "props", component.name) // see chech-prop-types-library
    return propsError
}