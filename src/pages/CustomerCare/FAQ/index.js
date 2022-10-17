import React from 'react';
import { Link } from 'react-router-dom';
import Collapse from 'components/Collapse';
import Header from 'components/Header';
import Announce from 'components/Announcement';

import './style.scss';

const FAQ = () => {
  return (
    <div>
      <Announce />
      <Header />
      <div className='faq__container'>
        <div className='grid__1--4'>
          <p>
            <Link to='/faq' className='link__page active'>
              FAQ
            </Link>
          </p>
          <p>
            <Link to='/size' className='link__page '>
              sizing
            </Link>
          </p>
          <p>
            <Link to='/ship' className='link__page '>
              shipping & returns
            </Link>
          </p>
          <p>
            <Link to='/term' className='link__page '>
              term & conditions
            </Link>
          </p>
          <p>
            <Link to='/policy' className='link__page '>
              privacy policy
            </Link>
          </p>
          <p>
            <Link to='/garment' className='link__page '>
              garment care
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              make a return
            </Link>
          </p>
        </div>
        <div className='grid__3--4'>
          <h2>FAQ</h2>
          <p className='faq__page'>
            Home /<span>FAQ</span>
          </p>
          <Collapse
            className={'collapse-faq'}
            title='WHAT CURRENCY IS USED ONLINE?'
          >
            <p>All prices are charged in USD and VNĐ.</p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='WHAT PAYMENT METHODS DO YOU ACCEPT?'
          >
            <p>
              We are currently accepting the below methods as payment:
              <br />* Visa
              <br />* Mastercard
              <br />* Paypal
            </p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='WILL I BE CHARGED ADDITIONAL TAXES OR DUTY?'
          >
            <p>
              All international packages may be subject to duties and taxes. The
              limits for duty-free packages are established by your local
              customs authorities. Duties and taxes are the responsibility of
              the customer and we recommend you please check your local customs
              website for estimated costs.
            </p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='HOW DO I KNOW IF MY ORDER HAS BEEN SHIPPED?'
          >
            <p>
              We will send you a `shipping confirmation` email as soon as your
              order has been sent. This email will also contain your tracking
              number.
            </p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='CAN I CHANGE MY DELIVERY ADDRESS?'
          >
            <p>
              Provided the item has not been collected by our courier, we will
              do our best to update your preferred address, but we cannot
              guarantee.
            </p>
            <p>
              Please contact us as soon as possible at contact@dearjose.com.Once
              the item is shipped, unfortunately we are unable to change the
              delivery address at that point.
            </p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='DO I HAVE TO PAY FOR MY RETURN?'
          >
            <p>
              Yes, customers are responsible for the cost of shipping returns
              back to us.
            </p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='WHAT I DO IF I RECEIVE A FAULTY ITEM?'
          >
            <p>
              We aim to provide you with products of the highest standard and
              quality. If you have received a product with a manufacturing
              fault, please contact us as soon as you receive your order. This
              way we can guide you through the returns process and help resolve
              the problem. Please provide our team with images of the damage,
              defect or fault for a preliminary assessment.
            </p>
            <p>
              If the product is confirmed to have a manufacturing fault, we will
              replace the product or refund the price of the product to your
              original payment method at your request. If the product is found
              not to have a defect or deemed out of warranty, we will ship the
              product back to you.
            </p>
            <p>
              It does not constitute a defect, if in our reasonable opinion, the
              product has, following the sale to you, become of unacceptable
              quality due to fair wear and tear, misuse or failure to use in
              accordance with care for instructions. Please see our full Returns
              Policy for more information.
            </p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='CAN I CHANGE/CANCEL AN ORDER?'
          >
            <p>
              Unfortunately, we are not able to change or cancel an order once
              placed. Please make sure you choose your items carefully and add
              the correct shipping before placing your order. If you have any
              urgent changes please contact our team via contact@gmail.. We pack
              and ship orders daily so cannot guarantee your requests can be
              made.
            </p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='WHAT HAPPENS IF NOBODY IS ABLE TO SIGN FOR MY ORDER?'
          >
            <p>
              The delivery company will leave a card to say they called were
              unable to deliver and that they will try again the following
              working day. If the 2nd delivery attempt is unsuccessful, they
              will leave a card asking you to contact them and rearrange a
              delivery at a time or address you will be available.
            </p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='WHEN WILL I RECEIVE MY REFUND?'
          >
            <p>
              Our warehouse team will to process all returns within 3-5 working
              days of receiving them.We will send you a `Refund Notification`
              email to confirm that we have refunded your card. Please note:
              that refunds can take up to 10 days to credit on your account
              statement, depending on your card issuer, which is beyond our
              control.
            </p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='DOES “FREE SHIPPING” INCLUDE CUSTOMS, DUTIES, AND/OR TAXES REQUIRED BY MY COUNTRY'
          >
            <p>
              We do not cover the cost of customs, duties and taxes that are
              regulated and issue by our government. Unfortunately, these fees
              are beyond our control and we are unable to cover these charges.
              If the customer refuses the delivery due to the import duties and
              fees, taxes and any other charges and fees, the package will
              either be destroyed or returned to it’s sender, in those cases,
              any additional fee occurred will be the responsibility of the
              customer and original order will NOT be refundable. All applicable
              customs and import duties and fees, taxes and any other charges
              and fees are the responsibility of the customer (even if you
              refuse any shipments upon delivery). If your order does require
              these additional charges, they must be paid by you in order for
              your package to clear customs.
            </p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='HOW LONG WILL IT TAKE TO SEND OUT MY EXCHANGE ITEMS?'
          >
            <p>
              Our warehouse team will process all returns within 3-5 working
              days of receiving them, although it can take longer during busy
              periods such as holidays and sale.
            </p>
          </Collapse>
          <Collapse
            className={'collapse-faq'}
            title='WILL I BE CHARGED TAX OR DUTY ON MY REPLACEMENT ITEM?'
          >
            <p>
              We mark all replacement shipments as ‘exchange’ or ‘replacement’
              with ‘no commercial value’, on the basis taxes would have been
              paid on the original order. In the unlikely event the your local
              authorities request taxes on the replacement item, we recommend
              that you dispute these charges with them directly.
            </p>
            <p>
              If we’ve not answered your question above, please email
              contact@dearjose.com Our office hours are 10am – 6pm (ICT) Monday
              - Friday.
            </p>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
