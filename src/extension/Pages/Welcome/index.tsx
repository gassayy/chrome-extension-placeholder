import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { SingleColumn } from '../../Components/Layouts';
import { OptionRoutes } from '../routes';
import MasksIcon from '@mui/icons-material/Masks';
import { Typography } from '@mui/material';

const ButtonGroup = styled('div')(
  ({ theme }) => `
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  width: 180px;
`
);

const Content = styled('div')(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(1)} ${theme.spacing(0)}`,
  },
}));

const IFrame = styled('iframe')(({ theme }) => ({
  border: 'none',
  width: '100%',
  minHeight: '500px',
}));

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <SingleColumn>
      <Content>
        <Typography>
          <MasksIcon sx={{ fontSize: 40 }} /> Cyber Matrix
        </Typography>
        <IFrame src="./policy.html" />
        <ButtonGroup>
          <Button color="secondary" onClick={() => window.close()}>
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => navigate(OptionRoutes.SetupPath)}
          >
            Agree
          </Button>
        </ButtonGroup>
      </Content>
    </SingleColumn>
  );
}
