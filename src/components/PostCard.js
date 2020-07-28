import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    marginBottom: '1.5rem',
  },
}));

const PostCard = ({ name }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        }
        titleTypographyProps={{ variant: 'h4' }}
        title={name}
        subheaderTypographyProps={{ variant: 'h6' }}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="h5" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

// PostCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   imgUrl: PropTypes.string.isRequired,
//   datePosted: PropTypes.any,
//   content: PropTypes.string.isRequired,
// };

export default PostCard;
