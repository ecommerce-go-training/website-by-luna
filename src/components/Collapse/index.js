import React from 'react';

import plus from 'assets/images/plus.png';
import minus from 'assets/images/minus.png';

import './style.scss';

function Collapse() {
  return (
    <div>
      <img src={plus} alt='extend' />
      <img src={minus} alt='collapse' />
    </div>
  );
}

export default Collapse;
