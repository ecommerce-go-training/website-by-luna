import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import './style.scss';

const Announcement = () => {
  const [deliveryLable, setDeliveryLable] = useState('');

  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Announce'
  });

  useEffect(() => {
    const deliveryLabelVietnam = setInterval(() => {
      setDeliveryLable(t('freeShipInVietnam'));
    }, 2000);

    const deliveryLabelInternal = setInterval(() => {
      setDeliveryLable(t('internationalShip'));
    }, 4500);

    return () => clearInterval(deliveryLabelVietnam, deliveryLabelInternal);
  }, [t]);

  return (
    <div className='announce'>
      <div className='announce__header'>{deliveryLable}</div>
    </div>
  );
};

export default Announcement;
