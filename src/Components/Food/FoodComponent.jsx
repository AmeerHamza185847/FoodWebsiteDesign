import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './Food.css';

export const FoodComponent = ({foodItem}) => {
  return (
    <div className='cardContainer'>
        <Card sx={{ maxWidth: 330, height:330, borderRadius: 3 }}>
            
      <CardMedia
      sx={{ maxWidth: 330 , height: 330, }}
        component="img"
        height="220"
        width="220"
        image={foodItem}
        alt="Paella dish"
      />
    </Card>
    </div>
  )
}




// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
    
// }
