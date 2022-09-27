import React from 'react';
import { Link } from 'react-router-dom';
import Collapse from 'components/Collapse';
import Header from 'components/Header';
import Announce from 'components/Announce';

import './style.scss';

function Policy() {
  return (
    <div>
      <Announce />
      <Header />
      <div className='policy__container'>
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
            <Link to='/size' className='link__page '>
              shipping & returns
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              term & conditions
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page active'>
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
          <div className='policy__content'>
            <h2>Privacy policy</h2>
            <p className='policy__page'>
              Home /<span>Privacy policy</span>
            </p>
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
          <Collapse
            className={'collapse-policy'}
            title='personal information we collect'
          >
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
          <Collapse
            className={'collapse-policy'}
            title='HOW DO WE USE YOUR PERSONAL INFORMATION?'
          >
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
          <Collapse
            className={'collapse-policy'}
            title='SHARING YOUR PERSONAL INFORMATION'
          >
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
          <Collapse
            className={'collapse-policy'}
            title='BEHAVIOURAL ADVERTISING'
          >
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
          <Collapse className={'collapse-policy'} title='DATA RETENTION'>
            <p>
              When you place an order through the Site, we will maintain your
              Order Information for our records unless and until you ask us to
              delete this information.
            </p>
          </Collapse>
          <Collapse className={'collapse-policy'} title='CHANGES'>
            <p>
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal or regulatory reasons.
            </p>
          </Collapse>
          <Collapse className={'collapse-policy'} title='CONTACT US'>
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
        </div>
      </div>
    </div>
  );
}

export default Policy;
