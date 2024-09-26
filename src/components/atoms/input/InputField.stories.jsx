import React from 'react';

import InputField from './InputField';


export default {

  title: 'Components/InputField',

  component: InputField,

  argTypes: {

    placeholder: { control: 'text' },

    type: {

      control: {

        type: 'select',

        options: ['text', 'password', 'email'],

      },

    },

  },

};


const Template = (args) => <InputField {...args} />;


export const Default = Template.bind({});

Default.args = {

  placeholder: 'Enter your text here',

  type: 'text',

};


export const Password = Template.bind({});

Password.args = {

  placeholder: 'Enter your password',

  type: 'password',

};


export const Email = Template.bind({});

Email.args = {

  placeholder: 'Enter your email address',

  type: 'email',

};


export const Focused = Template.bind({});

Focused.args = {

  placeholder: 'Focused input',

  type: 'text',

};


// To demonstrate filled state, you can modify the component to accept a default value

export const Filled = Template.bind({});

Filled.args = {

  placeholder: 'Filled input',

  type: 'text',

  value: 'Sample text', // you may need to modify your InputField to support value prop

};
