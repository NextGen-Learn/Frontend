// Button.stories.jsx
import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }, // действие, которое будет вызвано при клике
    className: { control: 'text' }, // позволяет редактировать className в панели управления
  },
};

// Шаблон для создания истории
const Template = (args) => <Button {...args} />;

// Основные варианты кнопок
export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  className: 'primary', // вы можете добавить класс для стилизации
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  onClick: () => {}, // не вызываем действие для отключенной кнопки
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  text: 'Custom Class Button',
  className: 'my-custom-class',
};
