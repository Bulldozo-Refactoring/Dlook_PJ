import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SubmitButton = styled(Button)({
    margin: '0 auto',
    padding: '10px 20px',
    fontSize: 18,
    lineHeight: 1.8,
    backgroundColor: '#D0D3FF',
    borderColor: '#424874',
    borderRadius: 15,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont'
    ].join(','),
    '&:hover': {
      backgroundColor: '#D0D3FF',
      borderColor: '#424874',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#D0D3FF',
      borderColor: '#424874',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  export default SubmitButton;