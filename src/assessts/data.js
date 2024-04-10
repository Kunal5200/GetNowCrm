import lock from "@/icons/lock.png";
import support from "@/icons/support.png";
import fraud from "@/icons/fraud.png";
import mobileImage1 from "@/backgroundImages/E-commerce-shoping-cart.png";
import mobileImage2 from "@/backgroundImages/extensive-reporting.png";
import mobileImage3 from "@/backgroundImages/recurring-billing.png";
export const data = {
  secured: [
    {
      img: lock.src,
      title: "Secured Transactions",
      description:
        "Advanced measures and compliances to secure networks, Applications, Accounts etc.",
    },
    {
      img: support.src,
      title: "Best In Industry Support ",
      description:
        "24x7 available email, phone and chat based support to help you in your every step.",
    },
    {
      img: fraud.src,
      title: "Fraud & Risk Prevention",
      description:
        "Pre-screening of transaction with advanced functionalties to process legitmate transactions.",
    },
  ],
  credit: [
    {
      img: mobileImage1.src,
      title: "Navigate customers through sales funnels with",
      heading: "E-commerce Credit Card Processing",
      description:
        "SpellCRM helps merchants to accept credit cards payment online with secure e-commerce payment gateways and Merchant services that make accepting electronic payments quick, easy and safe. Increase online sales by accepting credit cards, debit cards and ACH payments on your website.",
      bgColor: "rgb(0, 131, 255)",
      titleColor: "#121921",
      className: "bannerCredit1",
    },
    {
      img: mobileImage2.src,
      title: "Business Intelligence Reports & Customized Reports",
      heading: "Extensive Reporting",
      description:
        "Our advanced historical reporting feature makes it easy for you to get all the information you need to make strategic decisions based on real facts and sound data. Report on progress for any time interval, accurately measure performance, and gain insights to improve your business.",
      bgColor: "rgb(248, 145, 1)",
      titleColor: "#ffffff",
      className: "bannerCredit2",
    },
    {
      img: mobileImage3.src,
      title: "Smart Recurring Billing Option for Growing Businesses",
      heading: "Recurring Billing",
      description:
        "Easily manage and automate subscriptions billing with SpellCRM.Try now for free! Events & Webhooks. Hosted pages. Dunning Management. Get Real Time Metrics. Powerful APIs. Subscription Billing. Services: Automated Billing, Recurring Billing, Failed Payment Control, Global Payment Gateways, Secure Data Storage.",
      bgColor: "rgb(255, 49, 51)",
      titleColor: "#ffffff",
      className: "bannerCredit3",
    },
  ],
};
