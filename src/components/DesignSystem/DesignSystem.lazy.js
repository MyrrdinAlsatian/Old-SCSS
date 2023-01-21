import React, { lazy, Suspense } from 'react';

const LazyDesignSystem = lazy(() => import('./DesignSystem'));

const DesignSystem = props => (
  <Suspense fallback={null}>
    <LazyDesignSystem {...props} />
  </Suspense>
);

export default DesignSystem;
