import React from 'react'
import { Transition } from 'react-transition-group';

const duration = 1000;

const withFade = Component => props => {
  const animationProps = {
    duration: 1
  }

  const style = {
    transitionDuration: `${animationProps.duration}s`,
    transitionDelay: `${props.animationDelay}s`,
    transitionProperty: `opacity`,
    opacity: 0,
  }

  const transitionStyle = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting: {opactiy: 0},
    exited: {opacity: 0}
  }

  return (
    <Transition
      in={props.displayed} 
      timeout={{duration}}
    >
      {state => (
        <div
          className={props.className}
          style={{
            ...style,
            ...transitionStyle[state]
          }}
        >
          <Component
            {...props}
            transitionState={state}
            animationProps={animationProps}
          />
        </div>
      )}
    </Transition>
  )
}

export default withFade