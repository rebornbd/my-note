import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

import CounterOne from "./option-1/Counter";
import CounterTwo from "./option-2/Counter";

import styles from "../../../common/css/common.module.css";


export const RenderProp = () => {
  return (
    <div className={styles.container}>
      <h1>01: Render Props Example</h1>
      <div className={styles.innerContainer}>
        <CounterOne
          render={
            (count, incrementCount) => (
              <ClickCounter
                count={count}
                incrementCount={incrementCount}
              />
            )
          }
        />
        
        <CounterOne
          render={
            (count, incrementCount) => (
              <HoverCounter
                count={count}
                incrementCount={incrementCount}
              />
            )
          }
        />
      </div>

      <div className={styles.innerContainer}>
        <CounterTwo>
          {(count, incrementCount) => (
            <ClickCounter
              count={count}
              incrementCount={incrementCount}
            />
          )}
        </CounterTwo>

        <CounterTwo>
          {(count, incrementCount) => (
            <HoverCounter
              count={count}
              incrementCount={incrementCount}
            />
          )}
        </CounterTwo>
      </div>
    </div>
  )
}
