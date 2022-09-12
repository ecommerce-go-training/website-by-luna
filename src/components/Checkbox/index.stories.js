import DefaultCheckbox from '.';
import React from 'react';

export default {
  type: 'Components/Checkbox',
  component: DefaultCheckbox
};

const Template = args => <DefaultCheckbox {...args} />;

const check = Template.bind({});
check.args = {
  value: 'Male',
  className: 'default-checkbox__input',
  checked: false,
  children: 'Male'
};

export { check };
