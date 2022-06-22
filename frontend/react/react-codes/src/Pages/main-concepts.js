import React from 'react'
import {
  StateLifecycle,
  HandlingEvent,
  ConditionalRendering,
  ListKeys,
  LiftingStateUp,
  Context
} from "../components/main-concepts";


const MainConcepts = () => {
  return (
    <>
      <StateLifecycle />
      <HandlingEvent />
      <ConditionalRendering />
      <ListKeys />
      <LiftingStateUp />
      <Context />
    </>
  )
}

export default MainConcepts;
