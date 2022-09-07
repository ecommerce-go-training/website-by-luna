import React, { useState, useEffect } from 'react';
import './style.scss';

function Announce() {
  const [deliveryState, setDeliveryState] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setDeliveryState('MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TRONG NƯỚC');
    }, 3000);

    const interval2 = setInterval(() => {
      setDeliveryState('MIỄN PHÍ VẬN CHUYỂN QUỐC TẾ CHO ĐƠN HÀNG TRÊN $500');
    }, 6000);

    return () => clearInterval(interval, interval2);
  }, []);

  return (
    <div className='App'>
      <div className='delivery__header--info'>
        {deliveryState}
        <p></p>
      </div>
    </div>
  );
}

export default Announce;
