import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Announce from 'components/Announce';
import Collapse from 'components/Collapse';

import './style.scss';

function Garment() {
  return (
    <div>
      <Announce />
      <Header />
      <div className='garment__container'>
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
            <Link to='/' className='link__page active'>
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
          <div className='garment__content'>
            <h2>Garment Care</h2>
            <p className='garment__page'>
              Home /<span> Garment care</span>
            </p>
            <p>
              Indicated below are general care instructions according to fabric.
              For safe results, always test laundering on a small or hidden area
              of the garment first. Please note that these are general
              recommendations. For more accurate guidelines, please follow the
              specific care instructions indicated on the garment label.
            </p>
            <div className='content'>
              <h3>NATURAL FABRICS</h3>
              <p>
                Natural Fibers are derived from materials produced by plants and
                animals that are spun into filament, thread or rope to be woven,
                knitted or bound.
              </p>
              <p>
                <b>Cotton</b>
                <br /> Machine wash in cold water, normal wash cycle. Tumble dry
                on low setting.
              </p>
              <p>
                <b>Linen</b>
                <br />
                Machine wash in warm water, gentle wash cycle. Tumble dry on
                cool, remove when still slightly damp.
              </p>
              <p>
                <b>Cashmere</b>
                <br />
                Hand wash in lukewarm water. Do not wring, squeeze, or twist.
                Lay flat to dry, away from direct heat or sunlight.
              </p>
              <p>
                <b>Mohair</b>
                <br />
                Dry clean is highly recommended. Otherwise, hand wash in
                lukewarm water. Lay flat to dry.
              </p>
              <p>
                <b>Wool</b>
                <br />
                Hand wash in lukewarm water. Do not wring, squeeze, or twist.
                Lay flat to dry, away from direct heat or sunlight.
              </p>
              <p>
                <b>Silk</b>
                <br />
                Dry clean is highly recommended. Hand wash in lukewarm water. Do
                not wring, squeeze, or twist. Lay flat to dry. Iron inside-out
                on low setting.
                <p>
                  Please note that pilling is a natural process that
                  occasionally may occur in woolen fibres. Washing your clothes
                  inside out will help prevent pilling and investing in an
                  electric de-pillerwill help safely remove them. However, if
                  left alone, these will eventually pull away on their own.
                </p>
              </p>
            </div>
            <Collapse title='NATURAL FABRICS' className={'collapse-garment'}>
              <p>
                Natural Fibers are derived from materials produced by plants and
                animals that are spun into filament, thread or rope to be woven,
                knitted or bound.
              </p>
              <p>
                <b>Cotton</b>
                <br /> Machine wash in cold water, normal wash cycle. Tumble dry
                on low setting.
              </p>
              <p>
                <b>Linen</b>
                <br />
                Machine wash in warm water, gentle wash cycle. Tumble dry on
                cool, remove when still slightly damp.
              </p>
              <p>
                <b>Cashmere</b>
                <br />
                Hand wash in lukewarm water. Do not wring, squeeze, or twist.
                Lay flat to dry, away from direct heat or sunlight.
              </p>
              <p>
                <b>Mohair</b>
                <br />
                Dry clean is highly recommended. Otherwise, hand wash in
                lukewarm water. Lay flat to dry.
              </p>
              <p>
                <b>Wool</b>
                <br />
                Hand wash in lukewarm water. Do not wring, squeeze, or twist.
                Lay flat to dry, away from direct heat or sunlight.
              </p>
              <p>
                <b>Silk</b>
                <br />
                Dry clean is highly recommended. Hand wash in lukewarm water. Do
                not wring, squeeze, or twist. Lay flat to dry. Iron inside-out
                on low setting.
                <p>
                  Please note that pilling is a natural process that
                  occasionally may occur in woolen fibres. Washing your clothes
                  inside out will help prevent pilling and investing in an
                  electric de-pillerwill help safely remove them. However, if
                  left alone, these will eventually pull away on their own.
                </p>
              </p>
            </Collapse>
            <div className='content'>
              <h3>SYNTHETIC FABRICS</h3>
              <p>
                Synthetic fabrics are textiles made from man-made materials
                rather than natural ones.
              </p>
              <p>
                <b>Denim</b>
                <br />
                Machine wash inside-out in warm water, gentle wash cycle. Lay
                flat to dry highly recommende.
              </p>
              <p>
                <b>Elastine</b>
                <br />
                Machine wash in mesh washing bag in cold water, gentle wash
                cycle. Lay flat to dry, or tumble dry on low setting. Iron on
                low setting. Dry clean is not recommended.
              </p>
              <p>
                <b>Modal</b>
                <br />
                Machine wash in cold water, normal wash cycle. Tumble dry on low
                setting, remove when slightly damp to reduce wrinkling.
              </p>
              <p>
                <b>Nylon</b>
                <br />
                Machine wash in cold water, according to cycle on garment label.
                Tumble dry on low setting, adding a dryer sheet will greatly
                reduce static. Iron when necessary on cool setting.
              </p>
              <p>
                <b>Neoprene</b>
                <br />
                Hand wash in lukewarm water. Lay flat to dry, do not tumble dry.
                Do not dry clean or expose to heat for extended periods of time.
              </p>
              <p>
                <b>Polyester</b>
                <br />
                Machine wash inside out in warm water, permanent press cycle.
                Tumble dry on low setting.
              </p>
              <p>
                <b>Polyamide</b>
                <br />
                Machine wash in cold water, normal wash cycle. Lay flat to dry.
                Iron inside-out on low setting.
              </p>
              <p>
                <b>Rayon</b>
                <br />
                Hand wash in cold water. Do not wring, squeeze, or twist. Lay
                flat to dry. Iron inside-out while still damp on low setting.
              </p>
              <p>
                <b>Satin</b>
                <br />
                Hand wash in cold water, or machine wash on gentle wash cycle.
                Do not wring, squeeze, or twist. Lay flat to dry. Iron
                inside-out on low setting with no steam.
              </p>
              <p>
                <b>Viscose</b>
                <br />
                Hand wash in cold water, or machine wash on gentle wash cycle.
                Do not wring, squeeze, or twist. Lay flat to dry. Iron
                inside-out while still damp on low setting
              </p>
            </div>
            <Collapse title='SYNTHETIC FABRICS' className={'collapse-garment'}>
              <p>
                Synthetic fabrics are textiles made from man-made materials
                rather than natural ones.
              </p>
              <p>
                <b>Denim</b>
                <br />
                Machine wash inside-out in warm water, gentle wash cycle. Lay
                flat to dry highly recommende.
              </p>
              <p>
                <b>Elastine</b>
                <br />
                Machine wash in mesh washing bag in cold water, gentle wash
                cycle. Lay flat to dry, or tumble dry on low setting. Iron on
                low setting. Dry clean is not recommended.
              </p>
              <p>
                <b>Modal</b>
                <br />
                Machine wash in cold water, normal wash cycle. Tumble dry on low
                setting, remove when slightly damp to reduce wrinkling.
              </p>
              <p>
                <b>Nylon</b>
                <br />
                Machine wash in cold water, according to cycle on garment label.
                Tumble dry on low setting, adding a dryer sheet will greatly
                reduce static. Iron when necessary on cool setting.
              </p>
              <p>
                <b>Neoprene</b>
                <br />
                Hand wash in lukewarm water. Lay flat to dry, do not tumble dry.
                Do not dry clean or expose to heat for extended periods of time.
              </p>
              <p>
                <b>Polyester</b>
                <br />
                Machine wash inside out in warm water, permanent press cycle.
                Tumble dry on low setting.
              </p>
              <p>
                <b>Polyamide</b>
                <br />
                Machine wash in cold water, normal wash cycle. Lay flat to dry.
                Iron inside-out on low setting.
              </p>
              <p>
                <b>Rayon</b>
                <br />
                Hand wash in cold water. Do not wring, squeeze, or twist. Lay
                flat to dry. Iron inside-out while still damp on low setting.
              </p>
              <p>
                <b>Satin</b>
                <br />
                Hand wash in cold water, or machine wash on gentle wash cycle.
                Do not wring, squeeze, or twist. Lay flat to dry. Iron
                inside-out on low setting with no steam.
              </p>
              <p>
                <b>Viscose</b>
                <br />
                Hand wash in cold water, or machine wash on gentle wash cycle.
                Do not wring, squeeze, or twist. Lay flat to dry. Iron
                inside-out while still damp on low setting
              </p>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Garment;
