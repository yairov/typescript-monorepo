import React from 'react';

export interface CommonComponentProps {
  text: string;
}

const CommonComponent = ({text}: CommonComponentProps) => {
  return (
    <div>
      hey! I'm a div that's being used in both projects! {text}
    </div>
  );
};

export default CommonComponent;
