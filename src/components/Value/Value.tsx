import React from 'react';

import styled from 'styled-components';

interface ValueProps {
  value: string;
}

const Value: React.FC<ValueProps> = ({value}) => {
  return <StyledValue>2.5</StyledValue>;
};

const StyledValue = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

export default Value;
