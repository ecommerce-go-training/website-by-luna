import Collapse from '.';
import React from 'react';

export default {
  type: 'Components/Collapse',
  component: Collapse
};

const Template = args => <Collapse {...args} />;

const info = Template.bind({});
info.args = {
  title: 'How do you feel?',
  children: [
    'Happy ',
    'Sad ',
    'Yomost ',
    'Địa chỉ: Ký túc xá khu A: Đường Tạ Quang Bửu, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ Chí Minh.'
  ]
};

export { info };
