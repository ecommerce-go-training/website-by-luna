import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Announce from 'components/Announce';
import Collapse from 'components/Collapse';

import './style.scss';

function Shipping() {
  return (
    <div>
      <Announce />
      <Header />
      <div className='shipping__container'>
        <div className='grid__1--4'>
          <p>
            <Link to='/faq' className='link__page'>
              FAQ
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              sizing
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page active'>
              shipping & returns
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              term & conditions
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              privacy policy
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page'>
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
          <div className='shipping__content'>
            <h2>Shipping</h2>
            <p className='shipping__page'>
              Home /<span> Shipping</span>
            </p>
            <div className='content'>
              <p>
                Domestic shipping will be shipped via
                <b> VIETTELPOST</b>
              </p>
              <p>
                International shipping will be shipped via
                <b> EMS/VIETNAMPOST.</b>
              </p>
              <p>
                A shipping confirmation with tracking will be sent after the
                order has been shipped. We offer compliment international
                shipping on all purchases over $500.
              </p>
              <p>
                For customers within HoChiMinh City, to get the same day
                shipping services, we encourage you to contact us via{' '}
                <b>Instagram Direct Messenger/ Facebook Messenger </b> or
                hotline <b>(+84 986 491 486)</b>
              </p>
              <br />
              <p>
                For purchases under $500, our shipping charges are as below:
              </p>
            </div>
            <Collapse title='VIEW MORE SHIPPING' className={'collapse-garment'}>
              <p>
                Domestic shipping will be shipped via
                <b> VIETTELPOST</b>
              </p>
              <p>
                International shipping will be shipped via
                <b> EMS/VIETNAMPOST.</b>
              </p>
              <p>
                A shipping confirmation with tracking will be sent after the
                order has been shipped. We offer compliment international
                shipping on all purchases over $500.
              </p>
              <p>
                For customers within HoChiMinh City, to get the same day
                shipping services, we encourage you to contact us via{' '}
                <b>Instagram Direct Messenger/ Facebook Messenger </b> or
                hotline <b>(+84 986 491 486)</b>
              </p>
              <br />
              <p>
                For purchases under $500, our shipping charges are as below:
              </p>
            </Collapse>
            <table className='table__size'>
              <tr>
                <td></td>
                <td>service</td>
                <td>delivery time</td>
                <td>cost</td>
              </tr>
              <tr>
                <td className='type-ship'>
                  <p>comectic shipping</p>
                </td>
                <td>viettelpost</td>
                <td>2 - 5 business days</td>
                <td>free shipping</td>
              </tr>
              <tr>
                <td className='type-ship'>
                  <p>international shipping</p>
                </td>
                <td>
                  vietnampost
                  <br />
                  standard shipping
                </td>
                <td>2 weeks - 1 month</td>
                <td>20 usd</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  ems/dhl
                  <br />
                  express shipping
                </td>
                <td>3 - 10 business days</td>
                <td>30 usd</td>
              </tr>
            </table>
            <div className='table__mobile'>
              <div className='table__mobile--title'>
                <p>Domestic shipping</p>
              </div>
              <table>
                <tr>
                  <td>Service</td>
                  <td>viettelpost</td>
                </tr>
                <tr>
                  <td>delivery time</td>
                  <td>2 - 5 business days</td>
                </tr>
                <tr>
                  <td>cost</td>
                  <td>free shipping</td>
                </tr>
              </table>
              <div className='table__mobile--title'>
                <p>International shipping</p>
              </div>
              <table>
                <tr>
                  <td>Service</td>
                  <td>
                    vietnampost
                    <br />
                    standard shipping
                  </td>
                </tr>
                <tr>
                  <td>delivery time</td>
                  <td>2 weeks - 1 month</td>
                </tr>
                <tr>
                  <td>cost</td>
                  <td>20 usd</td>
                </tr>
              </table>
              <table>
                <tr>
                  <td>Service</td>
                  <td>
                    ems/dhl
                    <br />
                    express shipping
                  </td>
                </tr>
                <tr>
                  <td>delivery time</td>
                  <td>3 - 10 business days</td>
                </tr>
                <tr>
                  <td>cost</td>
                  <td>30 usd</td>
                </tr>
              </table>
            </div>
            <p>
              Orders will be processed and hand to our carrier from 1 - 3
              business days. Then we will send you your shipping confirmation
              along with the tracking number. Dear Pika won`t be held
              responsible for unforeseen delays caused by weather conditions,
              pandemic, holiday occur or customs.
            </p>
            <p className='shipping__page'>
              Home /<span> Return</span>
            </p>

            <div className='content'>
              <h2>Return</h2>
              <p>
                <p>RETURN POLICY:</p>
                Any full-price, unworn and unwashed items may be returned for
                refund within 14 days of receiving your order (not included sale
                items). Purchases made using a gift card or store credit are
                eligible for exchange or store credit only.Please note that
                original shipping fees are not refundable.
                <br />
                Your account will be credited your refund or any difference in
                your exchange within 3 business days of receipt, less shipping
                charges.
                <p>
                  Please note that it may take up to an additional 10 days for
                  the refund to show up on your account statement, depending on
                  your credit issuer’s processing time.
                </p>
                We reserve the right to refuse any return that does not comply
                with the conditions stated above.Exchanges are available for the
                same style in a different size or colour, If you want to
                exchange for a different style, we suggest you to request a
                returns then order a different style on our website
                <p>
                  <p>HOW TO RETURN TO US</p>
                  Making ever been easier! Please follow below steps to lodge
                  your return:
                </p>
                <p>
                  1/ Enter your order number on the page link{' '}
                  <b>MAKE A RETURN</b> in the bottom navigation.
                </p>
                <p>
                  2/ Once you’ve entered the returns portal ll need your order
                  number and email address associated with your order and reason
                  for return.
                </p>
                <p>
                  3/ Once in the returns portal, follow the steps all the way
                  through to completion. You will then receive an email
                  notification with the address of where to send your return
                  back to.
                </p>
                4/ You will e email communication once the Dear José Returns
                team receive your parcel and again when we have processed your
                return.
                <p>
                  Please ensure your return is sent via a trusted courier
                  company, we recommend a prepaid and traceable postal service.
                  Dear Pika is not liable for the loss of garments being
                  returned, nor do we refund shipping charges. If you are unsure
                  on the rate you should be charged when shipping back your
                  return, please contact our team as well be more than happy to
                  help point you in the right direction.
                </p>
              </p>
            </div>
            <Collapse title='RETURN POLICY' className={'collapse-garment'}>
              <p>
                Any full-price, unworn and unwashed items may be returned for
                refund within 14 days of receiving your order (not included sale
                items). Purchases made using a gift card or store credit are
                eligible for exchange or store credit only.Please note that
                original shipping fees are not refundable.
                <br />
                Your account will be credited your refund or any difference in
                your exchange within 3 business days of receipt, less shipping
                charges.
                <p>
                  Please note that it may take up to an additional 10 days for
                  the refund to show up on your account statement, depending on
                  your credit issuer’s processing time.
                </p>
                We reserve the right to refuse any return that does not comply
                with the conditions stated above.Exchanges are available for the
                same style in a different size or colour, If you want to
                exchange for a different style, we suggest you to request a
                returns then order a different style on our website
              </p>
            </Collapse>
            <Collapse
              title='HOW TO RETURN TO US'
              className={'collapse-garment'}
            >
              <p>
                Making ever been easier! Please follow below steps to lodge your
                return:
              </p>
              <p>
                1/ Enter your order number on the page link <b>MAKE A RETURN</b>{' '}
                in the bottom navigation.
              </p>
              <p>
                2/ Once you’ve entered the returns portal ll need your order
                number and email address associated with your order and reason
                for return.
              </p>
              <p>
                3/ Once in the returns portal, follow the steps all the way
                through to completion. You will then receive an email
                notification with the address of where to send your return back
                to.
              </p>
              4/ You will e email communication once the Dear José Returns team
              receive your parcel and again when we have processed your return.
              <p>
                Please ensure your return is sent via a trusted courier company,
                we recommend a prepaid and traceable postal service. Dear Pika
                is not liable for the loss of garments being returned, nor do we
                refund shipping charges. If you are unsure on the rate you
                should be charged when shipping back your return, please contact
                our team as well be more than happy to help point you in the
                right direction.
              </p>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
