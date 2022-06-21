import React from 'react'
import {
  StateLifecycle,
  HandlingEvent,
  ConditionalRendering,
  ListKeys,
  LiftingStateUp,
} from "../components/main-concepts";


const MainConcepts = () => {
  return (
    <>
      <StateLifecycle />
      <HandlingEvent />
      <ConditionalRendering />
      <ListKeys />
      <LiftingStateUp />
    </>
  )
}

export default MainConcepts;
