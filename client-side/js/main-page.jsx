import React, {Fragment} from "react";
import { Link } from "react-router";

import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan,
  Section,
  SignupInline, SignupModal,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";

import Header from "./components/Header.jsx"
import About from "./components/About.jsx"
import PricingTable from "./components/PricingTable.jsx"

const brandName = "Company X";
const brand = <span>{brandName}</span>;


const businessAddress = (
  <address>
    <strong>{brandName}</strong><br />
    1337 Market Street, Suite 1337<br />
    San Francisco, CA 94103<br />
    +1 (123) 456-7890
  </address>
);

const pricingPlan1 = {
  name: "Personal",
  description: "Describe your plans with easy-to-use pricing tables. Each plan provides callbacks to handle visitor clicks.",
  price: "$99",
  features: {
    "Describe pricing plans as JSON": true,
    "Features can be active/inactive": true,
    "Works on mobile": true,
    "Custom callbacks": true,
    "Extra Feature 1": false,
    "Extra Feature 2": false,
  }
};

const pricingPlan2 = Object.assign({}, pricingPlan1, {
  price: "$499",
  name: "Startup",
  features: Object.assign({}, pricingPlan1.features, {
    "Extra Feature 1": true,
  }),
});

const pricingPlan3 = Object.assign({}, pricingPlan2, {
  price: "$999",
  name: "Enterprise",
  features: Object.assign({}, pricingPlan2.features, {
    "Extra Feature 2": true,
  }),
});

const sampleCode = `<Page>
  <Hero><h1>{ /* Content */ }</h1></Hero>
  <Section heading="Hello!">
    <HorizontalSplit padding="md"> { /* Content */ } </HorizontalSplit>
  </Section>
  <Section>
    <Team>
      <TeamMember name="Link" title="Co-founder" imageUrl="img/link.jpg"> { /* Description */ } </TeamMember>
      <TeamMember name="Yoshi" title="Co-founder" imageUrl="img/yoshi.jpg"> { /* Description */ } </TeamMember>
    </Team>
  </Section>
  <Section>
    <PricingTable>
      <PricingPlan {... pricingPlan1} />
      <PricingPlan {... pricingPlan2} />
      <PricingPlan {... pricingPlan3} />
    </PricingTable>
    <SignupInline onSubmit={onSignupCallback}/>
  </Section>
</Page>
`;

const PayStripe = () => {
  let email = document.querySelector("input[type='email']").value

  Stripe.StripeHandler.open({
    name: "Stripe Integration Included",
    description: "Like this? Donate $5 <3",
    panelLabel: "Donate {{amount}}",
    email: email,
    amount: 500,
  });
}

class MainPage extends React.Component {
 render(){
   return(
     <Page>
       <Header/>
       <About/>
       <PricingTable/>
     </Page>
   )
 }
}

export default (props) => {
  return <MainPage />
}
