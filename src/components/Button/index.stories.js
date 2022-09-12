import React from 'react';
import DefaulButton from './index';

export default {
  title: 'Components/Button',
  component: DefaulButton,
  argTypes: { onClick: { action: 'Execute something when clicked' } }
};

const Template = args => <DefaulButton {...args} />;

const logIn = Template.bind({});
logIn.args = {
  type: 'button',
  children: 'log in'
};

const signIn = Template.bind({});
signIn.args = {
  type: 'submit',
  children: 'sign in'
};

export { logIn, signIn };
