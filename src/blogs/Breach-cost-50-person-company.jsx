// ../blogs/Breach-cost-50-person-company.jsx
import React from 'react';
import './Internal-Blog.css';

export default function Blog() {
  return (
    <div className="breach-article-wrapper">
    
      <div className="breach-article-content">
        <section>
          <p className='text'>
            You’ve seen the headlines about multi-million-dollar breaches. Useful as a cautionary tale, but not for budgeting.
            If you’re a ~50-person company, here’s a straightforward way to estimate impact.
          </p>
        </section>
        <section>
          <h2  className="sub-heading-bold" >The four buckets of cost</h2>
          <h3  className="sub-heading" >1) Downtime</h3>
          <p className='text'>
            What does an hour of outage cost you? Add lost revenue + paid salaries for idle teams + penalties/SLA credits
            (if applicable). Multiply by realistic downtime (even a day or two is common if backups aren’t clean).
          </p>
          <h3  className="sub-heading" >2) Recovery & cleanup</h3>
          <p className='text'>
            Forensics, incident response hours, overtime for IT, new hardware, and time to rebuild systems.
            If backups were exposed, assume more time and cloud costs.
          </p>
          <h3  className="sub-heading" >3) Business impact</h3>
          <p className='text'>
            Delayed deals, churn from spooked customers, and potential price concessions to keep accounts.
            Even one slipped quarter hurts small companies.
          </p>
          <h3  className="sub-heading" >4) Legal & communications</h3>
          <p className='text'>
            Outside counsel, notifications, credit monitoring (if PII involved), PR support, and time spent with insurers.
          </p>
        </section>
        <section>
          <h2  className="sub-heading-bold" >A quick back-of-the-napkin model</h2>
          <ul>
             <li className='text'>Hourly burn (salaries + overhead for the org): estimate a blended rate × number of employees affected.</li>
             <li className='text'>Revenue at risk: average daily bookings × days delayed.</li>
             <li className='text'>External help: set a placeholder for IR/forensics (many providers offer retainers; that saves money during an emergency).</li>
             <li className='text'>Customer impact: estimate churn or discounts on your top 10 accounts if data is involved.</li>
          </ul>
          <p className='text'>
            This won’t be perfect, but it gives you a number to compare against preventive spend like EDR, backups, and 24/7 monitoring.
          </p>
        </section>
        <section>
          <h2  className="sub-heading-bold" >What actually moves the needle before a breach</h2>
          <ul>
             <li className='text'>MFA and SSO: prevents the majority of straightforward account-takeover incidents.</li>
             <li className='text'>EDR + logging: turns “we think something happened” into “here’s what happened and when.”</li>
             <li className='text'>Immutable backups: snapshot retention with tested restores.</li>
             <li className='text'>Least privilege: reduce blast radius when credentials leak.</li>
             <li className='text'>Runbooks + practice: people freeze without a script. Tabletop once a quarter.</li>
          </ul>
        </section>
        <section>
          <h2  className="sub-heading-bold" >Insurance is not a plan</h2>
          <p className='text'>
            Cyber insurance can help, but it’s not instant recovery. Most carriers now require MFA, EDR, and basic hygiene
            to issue or renew a policy. Treat it as a financial backstop, not a substitute for controls.
          </p>
        </section>
      </div>
    </div>
  );
}