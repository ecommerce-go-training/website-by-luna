import React, { useState, useEffect } from 'react';
import './style.scss';

function Announce() {
  const [deliveryState, setDeliveryState] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setDeliveryState('MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TRONG NƯỚC');
    }, 2000);

    const interval2 = setInterval(() => {
      setDeliveryState('MIỄN PHÍ VẬN CHUYỂN QUỐC TẾ CHO ĐƠN HÀNG TRÊN $500');
    }, 4500);

    return () => clearInterval(interval, interval2);
  }, []);

  return (
    <div className='Announce'>
      <div className='Announce__header'>{deliveryState}</div>
    </div>
  );
}

export default Announce;
