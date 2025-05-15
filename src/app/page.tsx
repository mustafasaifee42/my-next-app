'use client'

import { SimpleBarGraph } from '@undp/data-viz';

export default function Home() {
  return (
    <SimpleBarGraph
      data={[
        {
          label: '2020 Q1',
          size: 3
        },
        {
          label: '2020 Q2',
          size: 8
        },
        {
          label: '2020 Q3',
          size: 11
        },
        {
          label: '2020 Q4',
          size: 19
        },
        {
          label: '2021 Q1',
          size: 3
        },
        {
          label: '2022 Q2',
          size: 8
        },
        {
          label: '2023 Q3',
          size: 11
        },
        {
          label: '2024 Q4',
          size: 19
        }
      ]}
    />
  );
}
