import { Box, Center, Container, useMediaQuery } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react'
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <Container maxWidth="container.lg" minHeight="69.7vh">
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout