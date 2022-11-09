import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Announce from 'components/Announcement';
import Collapse from 'components/Collapse';

import './style.scss';

const Term = () => {
  return (
    <div>
      <Announce />
      <Header className='header white' />
      <div className='term__container'>
        <div className='grid__1--4'>
          <p>
            <Link to='/faq' className='link__page'>
              FAQ
            </Link>
          </p>
          <p>
            <Link to='/size' className='link__page'>
              sizing
            </Link>
          </p>
          <p>
            <Link to='/ship' className='link__page '>
              shipping & returns
            </Link>
          </p>
          <p>
            <Link to='/term' className='link__page active'>
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
          <div className='term__content'>
            <p>
              These terms set out the agreement for online trading between Dear
              José and the user of this website (’You’) Please read them
              carefully before proceeding with entering the website. You must
              accept these terms and conditions to access this website any
              further. This website is owned and operated by Pika Meow.
            </p>
            <br />
            <p>
              <p>
                <b>COMPANY INFORMATION</b>
              </p>
              Registered Business: Pika meow <br />
              Registered in Ho Chi Minh , Vietnam <br />
              Registered Address: 19B Le Thi Rieng, District 1, HCMC, Vietnam
              <br />
              Registered Business Number: 41A8046023. <br />
              Tax Registration Number: 8432006613
            </p>
            <br />
            <p>
              <p>
                <b>PLACING AN ORDER AND PAYMENT</b>
              </p>
              <p>
                By completing an online order, you are making an offer to
                purchase the product at the price on our website. Payment must
                be made at the time of submitting the online order. Payment can
                be made by Visa, MasterCard or PayPal only. You warrant that you
                are an authorised user of the credit card, PayPal account used
                to complete payment. Goods shall be delivered by a carrier of
                the company’s choosing but the company will attempt to comply
                with the customer’s selection.
              </p>

              <p>
                All online orders placed through this website are subject to
                confirmation and acceptance by Pika Meow. We will email you with
                confirmation of the receipt of your online order. Dear José may
                reject Your online order for any reason and refund any payment
                made by you, at any time prior to dispatch.
              </p>
              <p>
                Pika Meow’s prices may vary in the event of price changes or
                mistakes on this website without prior notice to you. If Dear
                José requests payment for increased prices, you may cancel the
                order. Notification of your wish to cancel the order in these
                circumstances must be received within seven (7) business days of
                the announcement of the increase.
              </p>
              <br />
            </p>
            <p>
              <p>
                <b>PRODUCT DESCRIPTIONS</b>
              </p>
              <p>
                At Pika Meow we ensure that our products are described as
                accurately as possible on our website.
              </p>
              <p>
                However images on our website have been provided for
                illustrative purposes only and we do not guarantee that these
                images will reproduce in the exact colour nor that any given
                image will reflect the full design or options involving to that
                product. Dear José reserves the right to rectify any error or
                oversight.
              </p>
              <br />
            </p>
            <p>
              <p>
                <b>PRE-ORDERS</b>
              </p>
              <p>
                Items available for preorder appear with the option to
                <b>’Preorder’</b> rather than <b>’Add to Cart’</b>; the
                estimated delivery window for each item is located on the
                product page beneath the description. When purchasing an item
                available for preorder, you will be charged immediately. Once
                your preordered item(s) ship, you will receive a shipping
                confirmation with tracking information. Pre orders and custom
                pieces are not eligible for refund, return or exchange unless
                received damaged or faulty.
              </p>
              <br />
            </p>
            <p>
              <p>
                <b>PROMOTIONAL CODES</b>
              </p>
              <p>
                Pika Meow occasionally has special offers that can be applied to
                your order by using a promotional code. In order to take
                advantage of these promotions, you must enter the promotional
                code in the space provided during the checkout process and hit
                the ’apply’ button. The value of the promotion will be applied
                to your order automatically. Please note, only one promotional
                code may be used per transaction. Unless otherwise specified
                each promotional code may only be used once per customer.
              </p>
              <br />
            </p>
            <p>
              <p>
                <b>WEBSITE SECURITY</b>
              </p>
              <p>
                http://dearjose.com is protected by SSL (
                <b>Secure Socket Layer</b>) encryption. SSL is a security device
                that ensures that any data, which you enter into a secure area
                of the website, is encrypted during transmission over the
                Internet. SSL utilises data encryption to create a secure
                environment for you to conduct your online transactions. In
                order for SSL to be effective, you must be using an SSL
                compliant browser.
              </p>
              <p>
                Pkia meow does not store or keep credit card numbers from online
                transactions. The last four numbers and the expiry date of your
                credit card number are kept for order verification and
                identification purposes only. In the event a credit card is used
                without the holder’s authorisation, the cardholder must notify
                their credit card provider in accordance with their reporting
                rules and procedures.
              </p>
              <br />
            </p>
            <p>
              <p>
                <b>LIMITATION OF LIABILITY</b>
              </p>
              <p>
                Pika meow has provided information on this website as accurately
                as possible. We take all precautions possible to keep the
                details of your orders and payment secure, but in the absence of
                negligence on our part, we cannot be held liable for any loss
                you may suffer if a third party acquires unauthorised access to
                any data you provide when accessing or ordering from the
                website.
              </p>
              <br />
            </p>
            <p>
              <p>
                <b>INTELLECTUAL PROPERTY</b>
              </p>
              <p>
                Pika meow owns the intellectual property in its garment designs,
                fabric designs and images. Dear José forbids the use of its
                designs and images for any purpose without prior written consent
                from Pika meow.
              </p>
              <br />
            </p>
            <p>
              <p>
                <b>WEBSITE AVAILABILITY</b>
              </p>
              <p>
                On the rare occasion, http://dearjose.com could require some
                down-time, either scheduled or unscheduled.Pika meow will try to
                ensure the amount of down-time is limited. Pika meow will not be
                held liable for any consequences during down-time.
              </p>
            </p>
            <p>
              <b>YOUR USE OF THE WEBSITE</b>
              <p>
                You agree that you will use this website in accordance with
                these terms and conditions and that you will not use this
                website for any unlawful purpose.
              </p>
              <p>
                You will not violate or attempt to violate the security of this
                website. You will not hack into this website, Pika Meow’s
                computer systems or the computer systems of other users of this
                website. Hacking means unauthorised access, malicious damage
                and/or interference.
              </p>
              <p>
                As you browse Pika Meow, advertising cookies will be placed on
                your computer so that we can personalise your shopping
                experience. By entering this website you agree to these terms
                and conditions. From time to time, this Agreement will be
                reviewed and may be revised. Dear José reserves the right to
                change this Agreement at any time. Any such changes will be
                posted on this website.
              </p>
              <br />
            </p>
            <p>
              <p>
                <b>TERMINATION</b>
              </p>
              <p>
                Pika meow reserves the right to terminate the agreement to
                supply products to you at any time before the products are
                dispatched. Dear José will not be liable to you for any expenses
                or damages whatsoever for terminating this Agreement.
              </p>
              <p>
                If the product has not been delivered to you prior to any
                termination of this Agreement, Pika Meow will refund any payment
                you have made prior to termination.
              </p>
              <p>
                Pika Meow may terminate the agreement under which you can use
                this website immediately without notice if you are in breach of
                our website term and conditions.
              </p>
              <br />
            </p>
            <p>
              <p>
                <b>FULL AGREEMENT</b>
              </p>
              <p>
                This Terms of Sale and Use of Website Agreement together with
                the other policies on this website are the entire agreement
                between us (Pika Meow) and the user (yourself).
              </p>
              <br />
            </p>
            <p>
              <p>
                <b>GOVERNING LAW</b>
              </p>
              <p>
                The laws of the Vietnam will govern these Terms of Use and any
                dispute of any sort that might arise, without regard to
                principles of conflict of law.
              </p>
              <p>
                The Web Site is provided from Vietnam and all servers that make
                it available reside in the Social Republic of Vietnam. The laws
                of other countries may differ regarding the access and use of
                the Web Site. We make no representations regarding the legality
                of this Web Site in any other country and it is your
                responsibility to ensure that your use complies with all
                applicable laws outside of the Social Republic of Vietnam.
              </p>
            </p>
          </div>
          <div className='term__collapse'>
            <h2>Term & Conditions</h2>
            <p className='term__page'>
              Home /<span> Term & Conditions</span>
            </p>
            <p>
              These terms set out the agreement for online trading between Dear
              José and the user of this website (’You’) Please read them
              carefully before proceeding with entering the website. You must
              accept these terms and conditions to access this website any
              further. This website is owned and operated by Pika Meow.
            </p>
            <br />
            <Collapse title='COMPANY INFORMATION'>
              <p>
                Registered Business: Pika meow <br />
                Registered in Ho Chi Minh , Vietnam <br />
                Registered Address: 19B Le Thi Rieng, District 1, HCMC, Vietnam
                <br />
                Registered Business Number: 41A8046023. <br />
                Tax Registration Number: 8432006613
              </p>
            </Collapse>
            <Collapse title='PLACING AN ORDER AND PAYMENT'>
              <p>
                By completing an online order, you are making an offer to
                purchase the product at the price on our website. Payment must
                be made at the time of submitting the online order. Payment can
                be made by Visa, MasterCard or PayPal only. You warrant that you
                are an authorised user of the credit card, PayPal account used
                to complete payment. Goods shall be delivered by a carrier of
                the company’s choosing but the company will attempt to comply
                with the customer’s selection.
              </p>

              <p>
                All online orders placed through this website are subject to
                confirmation and acceptance by Pika Meow. We will email you with
                confirmation of the receipt of your online order. Dear José may
                reject Your online order for any reason and refund any payment
                made by you, at any time prior to dispatch.
              </p>
              <p>
                Pika Meow’s prices may vary in the event of price changes or
                mistakes on this website without prior notice to you. If Dear
                José requests payment for increased prices, you may cancel the
                order. Notification of your wish to cancel the order in these
                circumstances must be received within seven (7) business days of
                the announcement of the increase.
              </p>
              <br />
            </Collapse>
            <Collapse title='PRODUCT DESCRIPTIONS'>
              <p>
                At Pika Meow we ensure that our products are described as
                accurately as possible on our website.
              </p>
              <p>
                However images on our website have been provided for
                illustrative purposes only and we do not guarantee that these
                images will reproduce in the exact colour nor that any given
                image will reflect the full design or options involving to that
                product. Dear José reserves the right to rectify any error or
                oversight.
              </p>
              <br />
            </Collapse>
            <Collapse title='PRE-ORDERS'>
              <p>
                Items available for preorder appear with the option to
                <b>’Preorder’</b> rather than <b>’Add to Cart’</b>; the
                estimated delivery window for each item is located on the
                product page beneath the description. When purchasing an item
                available for preorder, you will be charged immediately. Once
                your preordered item(s) ship, you will receive a shipping
                confirmation with tracking information. Pre orders and custom
                pieces are not eligible for refund, return or exchange unless
                received damaged or faulty.
              </p>
              <br />
            </Collapse>
            <Collapse title='PROMOTIONAL CODES'>
              <p>
                Pika Meow occasionally has special offers that can be applied to
                your order by using a promotional code. In order to take
                advantage of these promotions, you must enter the promotional
                code in the space provided during the checkout process and hit
                the ’apply’ button. The value of the promotion will be applied
                to your order automatically. Please note, only one promotional
                code may be used per transaction. Unless otherwise specified
                each promotional code may only be used once per customer.
              </p>
              <br />
            </Collapse>
            <Collapse title='WEBSITE SECURITY'>
              <p>
                http://dearjose.com is protected by SSL (
                <b>Secure Socket Layer</b>) encryption. SSL is a security device
                that ensures that any data, which you enter into a secure area
                of the website, is encrypted during transmission over the
                Internet. SSL utilises data encryption to create a secure
                environment for you to conduct your online transactions. In
                order for SSL to be effective, you must be using an SSL
                compliant browser.
              </p>
            </Collapse>
            <Collapse title='LIMITATION OF LIABILITY'>
              <p>
                Pika meow has provided information on this website as accurately
                as possible. We take all precautions possible to keep the
                details of your orders and payment secure, but in the absence of
                negligence on our part, we cannot be held liable for any loss
                you may suffer if a third party acquires unauthorised access to
                any data you provide when accessing or ordering from the
                website.
              </p>
              <br />
            </Collapse>
            <Collapse title='INTELLECTUAL PROPERTY'>
              <p>
                Pika meow owns the intellectual property in its garment designs,
                fabric designs and images. Dear José forbids the use of its
                designs and images for any purpose without prior written consent
                from Pika meow.
              </p>
              <br />
            </Collapse>
            <Collapse title='WEBSITE AVAILABILITY'>
              <p>
                On the rare occasion, http://dearjose.com could require some
                down-time, either scheduled or unscheduled.Pika meow will try to
                ensure the amount of down-time is limited. Pika meow will not be
                held liable for any consequences during down-time.
              </p>
            </Collapse>
            <Collapse title='YOUR USE OF THE WEBSITE'>
              <p>
                You agree that you will use this website in accordance with
                these terms and conditions and that you will not use this
                website for any unlawful purpose.
              </p>
              <p>
                You will not violate or attempt to violate the security of this
                website. You will not hack into this website, Pika Meow’s
                computer systems or the computer systems of other users of this
                website. Hacking means unauthorised access, malicious damage
                and/or interference.
              </p>
              <p>
                As you browse Pika Meow, advertising cookies will be placed on
                your computer so that we can personalise your shopping
                experience. By entering this website you agree to these terms
                and conditions. From time to time, this Agreement will be
                reviewed and may be revised. Dear José reserves the right to
                change this Agreement at any time. Any such changes will be
                posted on this website.
              </p>
              <br />
            </Collapse>
            <Collapse title='TERMINATION'>
              <p>
                Pika meow reserves the right to terminate the agreement to
                supply products to you at any time before the products are
                dispatched. Dear José will not be liable to you for any expenses
                or damages whatsoever for terminating this Agreement.
              </p>
              <p>
                If the product has not been delivered to you prior to any
                termination of this Agreement, Pika Meow will refund any payment
                you have made prior to termination.
              </p>
              <p>
                Pika Meow may terminate the agreement under which you can use
                this website immediately without notice if you are in breach of
                our website term and conditions.
              </p>
              <br />
            </Collapse>
            <Collapse title='FULL AGREEMENT'>
              <p>
                This Terms of Sale and Use of Website Agreement together with
                the other policies on this website are the entire agreement
                between us (Pika Meow) and the user (yourself).
              </p>
              <br />
            </Collapse>
            <Collapse title='GOVERNING LAW'>
              <p>
                The laws of the Vietnam will govern these Terms of Use and any
                dispute of any sort that might arise, without regard to
                principles of conflict of law.
              </p>
              <p>
                The Web Site is provided from Vietnam and all servers that make
                it available reside in the Social Republic of Vietnam. The laws
                of other countries may differ regarding the access and use of
                the Web Site. We make no representations regarding the legality
                of this Web Site in any other country and it is your
                responsibility to ensure that your use complies with all
                applicable laws outside of the Social Republic of Vietnam.
              </p>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;
