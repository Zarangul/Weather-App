import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function FavoriteCards({ cards }) {
  return (
    <div className="chars">
      {cards?.map((item) => {
        return <Card className="char">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{fontSize: '32px'}}>
              {Math.round(item.main?.temp - 273.15) + "°C"}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{marginTop: '20px'}}>
              {item.weather[0]?.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Humidity: {item.main?.humidity}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>;
      })}
    </div>
  );
}
