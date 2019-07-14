import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Join from '@sections/Join';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar scrollable />
    <Header />
    <About />
    <Join />
    <Team />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;