import React from 'react';
import { Step, Icon } from 'semantic-ui-react';
import { useHistory, useLocation } from 'react-router-dom';

const StepCard = (props) => {
  const { name, icon, title, completed } = props.step
  const history = useHistory();
  const location = useLocation();


  const handleStepChange = () => {
    history.push(`/${name}`)
  }

  return(
    <Step
      completed={completed}
      active={location.pathname.includes(name)}
      onClick={() => handleStepChange()}
    >
      <Icon name={icon} />
      <Step.Content>
        <Step.Title>{title}</Step.Title>
      </Step.Content>
    </Step>
  )
}

export default StepCard;
