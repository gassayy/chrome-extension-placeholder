import { Paper, Grid } from '@mui/material'
interface SingleColumnProps extends React.PropsWithChildren<{}> {
  haveFooter?: boolean
}

export function SingleColumn({ haveFooter = true, children }: SingleColumnProps) {
  return (
    <Grid container direction="column">
      <Paper variant="outlined">{children}</Paper>
    </Grid>
  )
}
