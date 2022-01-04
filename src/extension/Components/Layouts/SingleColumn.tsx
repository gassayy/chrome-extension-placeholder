import { styled, Paper, Typography } from '@mui/material';

const Container = styled('div')(
  ({ theme }) => `
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing(4)};
    height: 100%;
    width: 100%;
`
);

const Content = styled('div')(`
    width: 900px;
    max-height: 90%;
    `);

interface SingleColumnProps extends React.PropsWithChildren<{}> {
  haveFooter?: boolean;
}

export function SingleColumn({
  haveFooter = true,
  children,
}: SingleColumnProps) {
  return (
    <Container>
      <Content>
        <Paper variant="outlined">
          <Typography> Single Column Layout </Typography>
          {children}
        </Paper>
      </Content>
    </Container>
  );
}
