import withLayout from "hocs/withLayout";
import React from "react";
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer';
const Clientlayout = (props) => {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
};

export default withLayout(Clientlayout);
