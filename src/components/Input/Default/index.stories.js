import DefaulInput from '.';
import React from 'react';

export default {
  type: 'Components/Input',
  component: DefaulInput
};

const Template = args => <DefaulInput {...args} />;

const username = Template.bind({});
username.args = {
  name: 'username',
  placeholder: 'username',
  className: ''
};

const pass = Template.bind({});
pass.args = {
  name: 'password',
  type: 'password',
  placeholder: 'password',
  className: ''
};

export { pass, username };
