import { Card, CardMedia, Container } from "@mui/material";
import React from "react";

const Content = () => {
  return (
    <Container>
      <Card className="top" sx={{height:300 }}>
        <CardMedia
          component="img"
          image="https://media.npr.org/assets/img/2014/04/07/istock_000017744369medium_wide-e08364493518a4650db7c3513b340cac55e3b21a.jpg"
        />
      </Card>
      
    </Container>
  );
};

export default Content;
