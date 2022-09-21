import React from 'react';
import { Link } from 'react-router-dom';
import Collapse from 'components/Collapse';
import Header from 'components/Header';
import Announce from 'components/Announce';

import './style.scss';

function FAQ() {
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
            <Link to='/' className='link__page '>
              sizing
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
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
            <Link to='/' className='link__page '>
              privacy policy
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
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
          <div className='faq__content'>
            <p>
              Pikameow website (www.pikameow.com) places cookies on your
              computer or handheld device, which is normal practice for all
              websites.
            </p>
            <p>
              Pikameow does not disclose personal information to third parties
              without your consent. Any changes to Pikameow privacy policy will
              be displayed here. This Privacy Policy describes how your personal
              information is collected, used, and shared when you visit or make
              a purchase from pikameow.com(the `Site`)
            </p>
          </div>
          <Collapse title='personal information we collect'>
            <p>
              When you visit the Site, we automatically collect certain
              information about your device, including information about your
              web browser, IP address, time zone, and some of the cookies that
              are installed on your device. Additionally, as you browse the
              Site, we collect information about the individual web pages or
              products that you view, what websites or search terms referred you
              to the Site, and information about how you interact with the Site.
              We refer to this automatically-collected information as “Device
              Information”.
            </p>
            <p>
              We collect Device Information using the following technologies:{' '}
              <br />- “Cookies” are data files that are placed on your device or
              computer and often include an anonymous unique identifier. For
              more information about cookies, and how to disable cookies, visit
              http://www.allaboutcookies.org.
              <br />- “Log files” track actions occurring on the Site, and
              collect data including your IP address, browser type, Internet
              service provider, referring/exit pages, and date/time stamps.
              <br />- “Web beacons”, “tags”, and “pixels” are electronic files
              used to record information about how you browse the Site.
              Additionally when you make a purchase or attempt to make a
              purchase through the Site, we collect certain information from
              you, including your name, billing address, shipping address,
              payment information (including credit card numbers), email
              address, and phone number. We refer to this information as “Order
              Information”.
            </p>
            <p>
              When we talk about “Personal Information” in this Privacy Policy,
              we are talking both about Device Information and Order
              Information.
            </p>
          </Collapse>
          <Collapse title='HOW DO WE USE YOUR PERSONAL INFORMATION?'>
            <p>
              We use the Order Information that we collect generally to fulfill
              any orders placed through the Site (including processing your
              payment information, arranging for shipping, and providing you
              with invoices and/or order confirmations). Additionally, we use
              this Order Information to:
              <br />- Communicate with you;
              <br />- Screen our orders for potential risk or fraud;
              <br />- When in line with the preferences you have shared with us,
              provide you with information or advertising relating to our
              products or services.
            </p>
            <p>
              We use the Device Information that we collect to help us screen
              for potential risk and fraud (in particular, your IP address), and
              more generally to improve and optimize our Site (for example, by
              generating analytics about how our customers browse and interact
              with the Site, and to assess the success of our marketing and
              advertising campaigns).
            </p>
          </Collapse>
          <Collapse title='SHARING YOUR PERSONAL INFORMATION'>
            <p>
              We share your Personal Information with third parties to help us
              use your Personal Information, as described above. For example, we
              use Bigcommerce to power our online store--you can read more about
              how Bigcommerce uses your Personal Information here:
              https://www.bigcommerce.com/privacy/. We also use Google Analytics
              to help us understand how our customers use the Site -- you can
              read more about how Google uses your Personal Information here:
              https://www.google.com/intl/en/policies/privacy/.
            </p>
            <p>
              Finally, we may also share your Personal Information to comply
              with applicable laws and regulations, to respond to a subpoena,
              search warrant or other lawful request for information we receive,
              or to otherwise protect our rights.
            </p>
          </Collapse>
          <Collapse title='BEHAVIOURAL ADVERTISING'>
            <p>
              As described above, we use your Personal Information to provide
              you with targeted advertisements or marketing communications we
              believe may be of interest to you. For more information about how
              targeted advertising works, you can visit the Network Advertising
              Initiative’s (“NAI”) educational page at
              http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            </p>
            <p>
              You can opt out of targeted advertising by using the links below:
              - Facebook: https://www.facebook.com/settings/?tab=ads - Google:
              https://www.google.com/settings/ads/anonymous - Bing:
              https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance’s opt-out portal at:
              http://optout.aboutads.info/.
            </p>
            <p>
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance’s opt-out portal at:
              http://optout.aboutads.info/.
            </p>
          </Collapse>
          <Collapse title='DATA RETENTION'>
            <p>
              When you place an order through the Site, we will maintain your
              Order Information for our records unless and until you ask us to
              delete this information.
            </p>
          </Collapse>
          <Collapse title='CHANGES'>
            <p>
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal or regulatory reasons.
            </p>
          </Collapse>
          <Collapse title='CONTACT US'>
            <p>
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us by e‑mail at contact@dearjose.com or by mail using the
              details provided below:
            </p>
            <p>
              <b>PIKAMEOW</b>
            </p>
            <p>19B LE THI RIENG, DISTRICT 1, HOCHIMINH CITY, 70000, VIETNAM.</p>
          </Collapse>
          <Collapse title='WHAT CURRENCY IS USED ONLINE?'>
            <p>All prices are charged in USD and VNĐ.</p>
          </Collapse>
          <Collapse title='WHAT PAYMENT METHODS DO YOU ACCEPT?'>
            <p>
              We are currently accepting the below methods as payment:
              <br />* Visa
              <br />* Mastercard
              <br />* Paypal
            </p>
          </Collapse>
          <Collapse title='WILL I BE CHARGED ADDITIONAL TAXES OR DUTY?'>
            <p>
              All international packages may be subject to duties and taxes. The
              limits for duty-free packages are established by your local
              customs authorities. Duties and taxes are the responsibility of
              the customer and we recommend you please check your local customs
              website for estimated costs.
            </p>
          </Collapse>
          <Collapse title='HOW DO I KNOW IF MY ORDER HAS BEEN SHIPPED?'>
            <p>
              We will send you a `shipping confirmation` email as soon as your
              order has been sent. This email will also contain your tracking
              number.
            </p>
          </Collapse>
          <Collapse title='CAN I CHANGE MY DELIVERY ADDRESS?'>
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
          <Collapse title='DO I HAVE TO PAY FOR MY RETURN?'>
            <p>
              Yes, customers are responsible for the cost of shipping returns
              back to us.
            </p>
          </Collapse>
          <Collapse title='WHAT I DO IF I RECEIVE A FAULTY ITEM?'>
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
          <Collapse title='CAN I CHANGE/CANCEL AN ORDER?'>
            <p>
              Unfortunately, we are not able to change or cancel an order once
              placed. Please make sure you choose your items carefully and add
              the correct shipping before placing your order. If you have any
              urgent changes please contact our team via contact@gmail.. We pack
              and ship orders daily so cannot guarantee your requests can be
              made.
            </p>
          </Collapse>
          <Collapse title='WHAT HAPPENS IF NOBODY IS ABLE TO SIGN FOR MY ORDER?'>
            <p>
              The delivery company will leave a card to say they called were
              unable to deliver and that they will try again the following
              working day. If the 2nd delivery attempt is unsuccessful, they
              will leave a card asking you to contact them and rearrange a
              delivery at a time or address you will be available.
            </p>
          </Collapse>
          <Collapse title='WHEN WILL I RECEIVE MY REFUND?'>
            <p>
              Our warehouse team will to process all returns within 3-5 working
              days of receiving them.We will send you a `Refund Notification`
              email to confirm that we have refunded your card. Please note:
              that refunds can take up to 10 days to credit on your account
              statement, depending on your card issuer, which is beyond our
              control.
            </p>
          </Collapse>
          <Collapse title='DOES “FREE SHIPPING” INCLUDE CUSTOMS, DUTIES, AND/OR TAXES REQUIRED BY MY COUNTRY'>
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
          <Collapse title='HOW LONG WILL IT TAKE TO SEND OUT MY EXCHANGE ITEMS?'>
            <p>
              Our warehouse team will process all returns within 3-5 working
              days of receiving them, although it can take longer during busy
              periods such as holidays and sale.
            </p>
          </Collapse>
          <Collapse title='WILL I BE CHARGED TAX OR DUTY ON MY REPLACEMENT ITEM?'>
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
}

export default FAQ;
