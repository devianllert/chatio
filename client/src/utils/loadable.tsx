import React, {
  lazy,
  Suspense,
  ReactElement,
  ComponentType,
} from 'react';

const loadable = (importFunc: () => Promise<{ default: ComponentType }>, { fallback = null }): Function => {
  const LazyComponent: ComponentType = lazy(importFunc);

  return (props: object): ReactElement => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
