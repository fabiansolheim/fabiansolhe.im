import { Box, Center, Container, useMediaQuery } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react'
import Header from '../Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ( {children}: Props) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <Container maxWidth="container.lg" minHeight="69.7vh">
        <Header />
        {children}
      </Container>
    </>
  );
};

export default Layout