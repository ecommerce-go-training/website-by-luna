import React from 'react';

import brand from 'assets/images/brand.svg';

import './style.scss';

function Brand() {
  return (
    <div className='brand__container'>
      <div className='grid__1--4'>
        <p>
          Brand /
          <br />
          <span>Our Brand</span>
        </p>
      </div>
      <div className='grid__3--4'>
        <img src={brand} alt='' />
        <div className='brand__story'>
          <div className='brand__story--title'>The modern romantic women.</div>
          <div className='brand__story--content'>
            <p>
              Dear Meow is a contemporary fashion brand with a romantic, fresh
              and liberal style. The brand name is like the opening word of a
              sweet love letter with the desire to blow a new breath into the
              wardrobe of Vietnamese women through trendy and pretty designs.
            </p>
            <p>
              Dear Meow`s inspiration comes from love, spring and fairy tales.
              Our silhouette is defined by versatility and still able to respond
              to changing trends and seasons. We are detailed and thoughtful in
              the manufacturing process to ensure that the clothing is not only
              affordable, but can stand the test of time.
            </p>
            <p>
              Dear Meow`s products are created by the most skilled craftsmen in
              Saigon and are loved by thousands of customers in Vietnam and
              Southeast Asia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
