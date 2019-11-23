import React from 'react';
import calculate from 'wd-common/utils/calculate';
import CommonComponent from 'wd-common/components/CommonComponent';

export default function Flexible() {
  return (
    <div>
      <h1>Hey! I'm the "Flexible" project</h1>
      <p>
        I can be a dependency of "Main" project or ran independently.
        <br/><br/>
        We both use the "Common" project.
      </p>
      <CommonComponent text="CommonComponentInFlexible"/>
      <div>
        Calculate using string: {calculate('str')}
      </div>
    </div>
  );
}
