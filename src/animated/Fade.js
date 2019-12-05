import React from 'react'
import { Transition } from 'react-transition-group';

const duration = 1000;

const Fade = props => {
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
    // welcome to animation land. we're gonna animate the component based
    // upon the state set in the App component then do a bit of a fade in effect
    // on everything using the Transition component from react-transition-group.

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
          {props.children}
        </div>
      )}
    </Transition>
  )
}

export default Fade