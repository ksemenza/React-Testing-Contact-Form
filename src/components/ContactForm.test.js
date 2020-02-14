import React from 'react'
import {render, getByLabelText, getByTestId, getByDisplayValue, fireEvent, getByText, wait, queryByTestId, getByPlaceholderText} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { mount } from 'enzyme';
import enzymeConfig from '../enzymeConfig'
import ContactForm from './ContactForm'
import 'mutationobserver-shim'


test('Required Input', () => {
 const {getByTestId} = render(<ContactForm/>);
 const firstName =getByTestId('fname')
expect(firstName).toBeInTheDocument()

  });

test('Forms Value Inputs', () => {
    const {getByTestId} = render(<ContactForm/>)
    const formCheck = getByTestId('contact-form')

    expect(formCheck).toHaveFormValues({
        firstName:'',
        lastName:'',
        email:''
    })
})

test('Button Specs', () => {
    const {getByTestId} = render(<ContactForm/>)
    const submitBtn = getByTestId('submit-btn')

    expect(submitBtn).toHaveAttribute('type', 'submit')
    expect(submitBtn).not.toHaveAttribute('type', 'reset')
    expect(submitBtn).not.toHaveAttribute('disabled')
})



  test('clicking on button trigger focus on input', () => {
    const { getByPlaceholderText, getByTestId } = render(<ContactForm />)
    const fnameInput = getByTestId('fname')
    const lnameInput = getByTestId('lname')
    fireEvent.click(getByTestId('fname'));
    fireEvent.click(getByTestId('lname'));
    expect(fnameInput).toBe(getByPlaceholderText('bill'));
    expect(lnameInput).toBe(getByPlaceholderText('luo'));
  });

  it('Should capture firstname correctly onSubmit', function() {
      const component = mount(<ContactForm/>)
      const input = component.find('input').at(0);

      input.instance().value='hello'
      input.simulate('change');
    
      
  })