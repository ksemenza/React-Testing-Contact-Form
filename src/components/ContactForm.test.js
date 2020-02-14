import React from 'react'
import {render, getByLabelText, getByTestId} from '@testing-library/react'
import ContactForm from './ContactForm'
import 'mutationobserver-shim'


test('Required Input', () => {
 const {getByTestId} = render(<ContactForm/>);
 const firstName =getByTestId('required-input')


expect(firstName).toBeInTheDocument()

  });


test('Forms Value Inputs', () => {
    const {getByTestId} = render(<ContactForm/>)
    const formCheck = getByTestId('contact-form')

    expect(formCheck).toHaveFormValues({
        firstName:'',
        lastName:''
    })
})