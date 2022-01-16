import * as React from 'react'
import { Box, Stepper, Typography, Step, StepButton, Button, Paper } from '@mui/material'

export interface StepItemProps {
  label: string
  icon?: React.ReactNode
  item: React.ReactNode
}

export interface StepperBoxProps {
  steps: StepItemProps[]
  children?: React.ReactNode
}

interface CompletionBoxProps {
  reset: () => void
}

interface ContentBoxProps {
  steps: StepItemProps[]
  active: number
  completed: { [k: number]: boolean }
  done: () => void
  back: () => void
  next: () => void
  completedSteps: () => number
  total: () => number
}

function CompletionBox({ reset }: CompletionBoxProps) {
  return (
    <React.Fragment>
      <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={reset}>Reset</Button>
      </Box>
    </React.Fragment>
  )
}

function ContentBox({ steps, active, completed, done, back, next, completedSteps, total }: ContentBoxProps) {
  return (
    <React.Fragment>
      <Typography>Place Holder</Typography>
      <Box>{steps[active].item}</Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button color="inherit" disabled={active === 0} onClick={back} sx={{ mr: 1 }}>
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={next} sx={{ mr: 1 }}>
          Next
        </Button>
        {active !== total() &&
          (completed[active] ? (
            <Typography variant="caption" sx={{ display: 'inline-block' }}>
              Step {active + 1} already completed
            </Typography>
          ) : (
            <Button onClick={done}>{completedSteps() === total() - 1 ? 'Finish' : 'Complete Step'}</Button>
          ))}
      </Box>
    </React.Fragment>
  )
}

export function StepperBox(props: StepperBoxProps) {
  const { steps } = props
  const [active, setActive] = React.useState(0)
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({})

  const total = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLast = () => {
    return active === total() - 1
  }

  const hasCompletedAll = () => {
    return completedSteps() === total()
  }

  const next = () => {
    const nextStep = isLast() && !hasCompletedAll() ? steps.findIndex((step, i) => !(i in completed)) : active + 1
    setActive(nextStep)
  }
  const back = () => {
    setActive((prevActiveStep) => prevActiveStep - 1)
  }

  const moveToNext = (index: number) => () => {
    console.log(index)
    setActive(index)
  }

  const done = () => {
    const newCompleted = completed
    newCompleted[active] = true
    setCompleted(newCompleted)
    next()
  }

  const reset = () => {
    setActive(0)
    setCompleted({})
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={active}>
        {steps.map((item, index) => {
          return (
            <Step key={item.label}>
              <StepButton color="inherit" onClick={moveToNext(index)}>
                {item.label}
              </StepButton>
            </Step>
          )
        })}
      </Stepper>
      {hasCompletedAll() ? (
        <CompletionBox reset={reset} />
      ) : (
        <ContentBox
          steps={steps}
          active={active}
          completed={completed}
          done={done}
          back={back}
          next={next}
          completedSteps={completedSteps}
          total={total}
        />
      )}
    </Box>
  )
}
