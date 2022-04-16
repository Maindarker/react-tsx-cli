import React, { Suspense, Component } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
export default class MyCompnent extends Component {
  constructor(props){
    super(props);
    console.log(1)
  }
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </div>
    );
  }
}