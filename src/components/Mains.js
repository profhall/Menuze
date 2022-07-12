import React from "react";
import Input from "./Input";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
// import imgs from `../media/menu-items/`


export default function Mains({ meals }) {


  return (
    <section className="mains">
      
      {meals.map((meal, index) => (
        <Card sx={{ maxWidth: 345 }} key={index}>
        <CardHeader
          title={meal.name}
          subheader={`$ ${meal.price}`}
        />
       <CardMedia
          component={meal.img?"img":""}
          height="194"
          image={meal.img}
          alt={meal.name}
        /> 
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {meal.description }
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
        ))}
    </section>

  );
}



{/* {meals.map((meal, index) => (
        
        <article className="menu-item" key={index}>
          <h3 className="mains-name">{meal.name}</h3>
          <strong className="mains-price">${meal.price}</strong>
          <p className="mains-description">{meal.description }</p>
          <img style={{width:'95%'}} src={meal.img}/>
        </article>
      ))} */}
