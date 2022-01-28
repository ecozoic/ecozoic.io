import * as React from 'react';

import Container from '../components/container';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Title from '../components/title';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="all posts" />
      <Container>
        <Title>COMING SOON</Title>
      </Container>
    </Layout>
  );
};

export default IndexPage;
