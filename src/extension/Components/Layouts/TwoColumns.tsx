import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LayoutContainer = styled('div')(
  ({ theme }) => `
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
  `
);

const LeftSide = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  width: '30%',
  maxWidth: '400px',
  background: theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    width: '25%',
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const RightContent = styled('div')(
  ({ theme }) => `
    flex: 1;
    display: flex;
    justify-content: center;
    max-height: 100%;
    overflow: auto;
    background: transparent;
`
);

interface TwoColumnsProps extends React.PropsWithChildren<{}> {
  left?: React.ReactNode;
}

export function TwoColumns({ left, children }: TwoColumnsProps) {
  return (
    <LayoutContainer>
      <LeftSide>
        <Typography> Two Column Layout - LeftSide </Typography>
        {left !== undefined && left}
      </LeftSide>
      <RightContent>
        <Container maxWidth="md">
          <Typography> Two Column Layout - RightSide </Typography>
          {children}
        </Container>
      </RightContent>
    </LayoutContainer>
  );
}
