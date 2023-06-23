// main페이지에 사용하는 카드 - 스타일 컴포넌트로 바꿀지 고민중
import SubmitButton from 'app/components/SubmitButton';

import { Card, CardActions, CardContent, Typography } from '@mui/material';

const MainCard = () => {
  return (
    <Card sx={{ maxWidth: 350, margin: '0 auto' }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Kakao
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
          풀스택 개발자
        </Typography>
        <Typography variant="body2">
          디자인에 재능없는 프엔 어때보여
          <br />
          "웃자~ 웃어~"
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingBottom: 2 }}>
        <SubmitButton size="small">GitHub Link</SubmitButton>
      </CardActions>
    </Card>
  );
};

export default MainCard;
