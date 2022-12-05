import React from 'react';

import * as Resizer from '@column-resizer/react';

export const NestingDemo = () => (
  <section>
    <Resizer.Container className="h-[50vh] whitespace-nowrap">
      <Resizer.Section className="flex items-center justify-center bg-[#80808080]">
        <Resizer.Container vertical className="h-[50vh] whitespace-nowrap">
          <Resizer.Section className="flex items-center justify-center bg-[#80808080]" />
          <Resizer.Bar
            size={10}
            className="transition bg-[#808080CF] hover:bg-[#808080] cursor-col-resize"
          />
          <Resizer.Section className="flex items-center justify-center bg-[#80808080]" />
        </Resizer.Container>
      </Resizer.Section>
      <Resizer.Bar
        size={10}
        className="transition bg-[#808080CF] hover:bg-[#808080] cursor-col-resize"
      />
      <Resizer.Section className="flex items-center justify-center bg-[#80808080]">
        <Resizer.Container className="h-[50vh] whitespace-nowrap">
          <Resizer.Section className="flex items-center justify-center bg-[#80808080]" />
          <Resizer.Bar
            size={10}
            className="transition bg-[#808080CF] hover:bg-[#808080] cursor-col-resize"
          />
          <Resizer.Section className="flex items-center justify-center bg-[#80808080]" />
        </Resizer.Container>
      </Resizer.Section>
    </Resizer.Container>
  </section>
);
