import React from 'react';
import { withSiteData } from 'react-static';

import { Container } from '../components';

export default withSiteData(() => (
  <div>
    <Container>
      Test
    </Container>
  </div>
));

