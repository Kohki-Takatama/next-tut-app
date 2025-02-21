'use client';

import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('../components/header'), {
  loading: () => <p>Loading Header...</p>,
  ssr: false,
});

export default DynamicHeader;
