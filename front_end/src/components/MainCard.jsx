// main페이지에 사용하는 카드
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import SubmitButton from './SubmitButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MainCard = () => {
  return (
    <Card sx={{ maxWidth: 350, margin: '0 auto' }}>
      <CardContent sx={{paddingBottom: 0}}>
=======
=======
>>>>>>> c421a960b56740ed674a459d776dba36234e78ee
import * as React from "react";
import SubmitButton from "./SubmitButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const MainCard = () => {
  return (
    <Card sx={{ maxWidth: 350, margin: "0 auto" }}>
      <CardContent sx={{ paddingBottom: 0 }}>
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> c421a960b56740ed674a459d776dba36234e78ee
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Kakao
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
          풀스택 개발자
        </Typography>
        <Typography variant="body2">
<<<<<<< HEAD
<<<<<<< HEAD
          디자인에 재능없는 프엔 어때보여<br />"웃자~ 웃어~"
        </Typography>
      </CardContent>
      <CardActions sx={{paddingBottom: 2}}>
=======
=======
>>>>>>> c421a960b56740ed674a459d776dba36234e78ee
          디자인에 재능없는 프엔 어때보여
          <br />
          "웃자~ 웃어~"
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingBottom: 2 }}>
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> c421a960b56740ed674a459d776dba36234e78ee
        <SubmitButton size="small">GitHub Link</SubmitButton>
      </CardActions>
    </Card>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}

export default MainCard;
=======
};

export default MainCard;
>>>>>>> main
=======
}

export default MainCard;
>>>>>>> c421a960b56740ed674a459d776dba36234e78ee
