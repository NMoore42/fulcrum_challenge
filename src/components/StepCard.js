import React from 'react';
import { Step, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const StepCard = (props) => {
  const { name, icon, title, state } = props.step
  const history = useHistory()

  const handleStepChange = () => {
    history.push(`/${name}`)
  }

  return(
    <Step
      completed={state.completed}
      active={props.active}
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
