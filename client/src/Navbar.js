import React from "react";

import { Grid, Typography, makeStyles } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import BookIcon from "@material-ui/icons/Book";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import CreateIcon from "@material-ui/icons/Create";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
const useStyles = makeStyles((theme) => ({
  heading: {
    border: "solid 1px #333",
    borderRadius: "20px",
    padding: theme.spacing(1),
    width: "13rem"
  },
  selectedHeading: {
    border: "solid 1px #333",
    borderRadius: "20px",
    background: "black",
    color: "#fff",
    padding: theme.spacing(1),
    width: "13rem"
  },
  subHeadingIcon: {
    fontSize: "1rem"
  },
  container: {
    background: "#d3d3d3"
  }
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      className={classes.container}
    >
      <Grid item>
        <Typography variant="h4">Live Spaces</Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" spacing={1} alignItems="center">
          <Grid item>
            <CheckCircleIcon className={classes.subHeadingIcon} />
          </Grid>
          <Grid item>
            <Typography variant="h6">
              All NFTs on Cyber either belong to or were minted by their space
              creator
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row"   justify='space-between'>
          <Grid item alignItems="center">
            <Grid
              container
              direction="row"
          
              className={classes.heading}
            >
              <Grid item>
                <BookIcon />
              </Grid>
              <Grid item >
                <Typography variant="body1"  >24h Trending</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              
              className={classes.heading}
            >
              <Grid item>
                <CollectionsBookmarkIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">Latest Shows</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              
              className={classes.selectedHeading}
            >
              <Grid item>
                <CreateIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">Most Popular</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              
              className={classes.heading}
            >
              <Grid item>
                <BookIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">In Genesis</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
        
              className={classes.heading}
            >
              <Grid item>
                <AccountBalanceWalletIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">In Temple</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
            
              className={classes.heading}
            >
              <Grid item>
                <BookIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">In Void</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item >
            <Grid
              container
              direction="row"
          
              className={classes.heading}
            >
              <Grid item>
                <AccountBalanceWalletIcon/>
              </Grid>
              <Grid item >
                <Typography  variant="body1">BAYC</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Navbar