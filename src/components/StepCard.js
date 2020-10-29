import React from 'react';
import { Step, Icon } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';

const StepCard = (props) => {
  const { name, icon, title, completed } = props.step
  const location = useLocation();

  return(
    <Step
      completed={completed}
      active={location.pathname.includes(name)}
    >
      <Icon name={icon} />
      <Step.Content>
        <Step.Title>{title}</Step.Title>
      </Step.Content>
    </Step>
  )
}

export default StepCard;
