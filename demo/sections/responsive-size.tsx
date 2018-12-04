import React from 'react';

import { Resizer } from '../../src';

export const ResponsiveSize = () => (
  <div>
    <h2>responsive size demo</h2>
    <Resizer.Container className="container">
      <Resizer.Section className="section" defaultSize={400}>
        default is responsive.
      </Resizer.Section>
      <Resizer.Bar size={10} className="bar" />
      <Resizer.Section className="section" disableResponsive>
        this one is not responsive.<br/>
        (resize browser to see the difference)
      </Resizer.Section>
      <Resizer.Bar size={10} className="bar" />
      <Resizer.Section className="section"/>
    </Resizer.Container>
  </div>
);
