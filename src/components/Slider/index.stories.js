import Slider from '.';
import React from 'react';

import image1 from 'assets/images/image1.png';
import image2 from 'assets/images/image2.png';
import image3 from 'assets/images/image3.png';
import image4 from 'assets/images/image4.png';

export default {
  type: 'Components/Slider',
  component: Slider
};

const Template = args => <Slider {...args} />;

const dataSlider = Template.bind({});
dataSlider.args = {
  data: [
    image1,
    image2,
    image3,
    image4,
    image2,
    image4,
    image1,
    image3,
    image4,
    image3,
    image1
  ]
};

export { dataSlider };
