import React, {Fragment} from "react"
import {Grid, Paper, Typography} from "@material-ui/core"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 11,
    height: 500,
    overflowY: "auto"
  }
}

export default ({articles, category}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {articles.map(([group, articles]) =>
          !category || category === group ? (
            <Fragment>
              <Typography
                variant="subtitle2"
                style={{textTrasform: "capitalize"}}
              >
                {group}
              </Typography>
              <List>
                {articles.map(({title}) => (
                  <ListItem button>
                    <ListItemText secondary={title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="h5">Welcome!</Typography>
        <Typography variant="body1" style={{marginTop: 20}}>
          Please select an article from the list on the left
        </Typography>
      </Paper>
    </Grid>
  </Grid>
)
