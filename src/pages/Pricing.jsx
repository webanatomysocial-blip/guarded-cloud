import React from 'react';
import { Helmet } from 'react-helmet-async';
import "../css/Header.css";
import "../css/pricing.css";

const Pricing = () => {
  const plans = [
    {
      name: "Launch",
      price: "$x/month",
      description: "Best for startups and lean teams.",
      features: [
        "CSPM baseline & monthly reports",
        "MDR/XDR onboarding up to N endpoints",
        "Identity hardening (MFA, baseline conditional access)",
        "Firewall rule review (quarterly)",
        "Email security policy baseline",
        "Monthly executive summary"
      ],
      buttonText: "Get Started"
    },
    {
      name: "Growth",
      price: "$y/month",
      description: "For scaling orgs and multiple environments.",
      features: [
        "Everything in Launch, plus:",
        "Continuous CSPM with ticketing integration",
        "24/7 SOC with auto‑containment playbooks",
        "SSL Decryption pilot & expansion planning",
        "Vulnerability management with SLA tracking",
        "Quarterly tabletop exercise"
      ],
      buttonText: "Get Started",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "$z/month",
      description: "For complex, regulated environments.",
      features: [
        "Everything in Growth, plus:",
        "Custom SIEM/SOAR content (e.g., Microsoft Sentinel)",
        "Advanced DLP & data governance",
        "Dedicated TAM"
      ],
      buttonText: "Get Started"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing | Guarded Cloud</title>
        <meta
          name="description"
          content="Clear plans for every stage—transparent features, flexible billing, and a free security assessment."
        />
      </Helmet>

      <section className="pricing-section">
        <h2 className="main-heading">Pricing Plans</h2>
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.highlight ? "highlight" : ""}`}>
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="current-price"> Starting at {plan.price}</span>
                
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✔ {feature}</li>
                ))}
              </ul>
              <button className={`plan-button ${plan.highlight ? "highlight-btn" : ""}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Pricing;
