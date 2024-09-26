import React from 'react';

import Logo from './Logo';


export default {

  title: 'Components/Logo',

  component: Logo,

};


const Template = (args) => <Logo {...args} />;


export const Default = Template.bind({});

Default.args = {

  className: '', // Вы можете также передать другие параметры, если они нужны

};


// Вы можете добавить больше историй, если хотите

export const CustomClassName = Template.bind({});

CustomClassName.args = {

  className: 'custom-class', // Пример для передачи кастомного класса

};