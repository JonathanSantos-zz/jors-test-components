import React from 'react';
import { Button } from '../components';

const Template = (args) => <Button {...args} />;

export default {
  component: Button,
  title: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Clique em mim',
};
