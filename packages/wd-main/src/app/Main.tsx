import React from 'react';
import Flexible from 'wd-flexible';
import calculate from 'wd-common/utils/calculate';
import CommonComponent from 'wd-common/components/CommonComponent';

export default function Main() {
  return (
    <div>
      <h1>Hey! I'm the "Main" project</h1>
      <p>
        I'm using the "Flexible" project which can be ran separately.
        <br/><br/>
        We both use the "Common" project.
        <br/><br/>
        Here is the "Flexible" project":
      </p>
      <CommonComponent text="CommonComponentInMain"/>
      <div>
        Calculate using number: {calculate(1)}
      </div>
      <div style={{border: '1px solid black', padding: 20}}>
        <Flexible/>
      </div>
    </div>
  );
}
