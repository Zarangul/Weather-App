import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

import searchImage from "../../assets/img/search.png";
import FavoriteCards from "../FavoriteCards";

export const Weather = () => {
  const [city, setCity] = useState("london");
  const [items, setItems] = useState([]);

  useEffect(() => {
    document.title = "Weather";
  }, []);

  const { isLoading, data, isError, error } = useQuery("weatherdata", () => {
    const API_KEY = "d516ebc08145e84d400358cfff55f55f";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    return axios.get(URL);
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleClick = (wData) => {
    const isNot = items?.some((item) => item.name === wData.name);
    console.log(isNot);
    if (!isNot) {
      setItems([...items, wData]);
    }
    console.log(items);
  };
  return (
    <div className="w-main">
      <div className="input-field">
        <div className="input-box">
          <input type="text" value={city} onChange={handleInputChange} />
          <button onClick={() => console.log(data.data.name)}>
            <img
              src={searchImage}
              alt="searchImage"
              style={{ width: "25px" }}
            />
          </button>
        </div>
      </div>

      <Card className="char">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontSize: '32px'}}>
            {Math.round(data.data.main?.temp - 273.15) + "°C"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {data.data.weather[0]?.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{marginTop: '20px'}}>
            Humidity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.data.main?.humidity}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              handleClick(data.data);
            }}
          >
            Add to favorites
          </Button>
        </CardActions>
      </Card>

      <h2 style={{color: 'white'}}>Favorite List</h2>
      <FavoriteCards cards={items}/>
    </div>
  );
};
