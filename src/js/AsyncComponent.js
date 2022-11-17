import React from "react";
const AsyncComponent = (promise) => {
    let Component = React.lazy(promise);
    return (
      <React.Suspense fallback={<div>loading...</div>}>
        <Component />
      </React.Suspense>
    )
}
export default AsyncComponent