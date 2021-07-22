import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

export default function Layout() {
  return (
    <Grid container direction="column">
      <Grid item>
        <AppBar>app bar</AppBar>
      </Grid>
    </Grid>
  );
}
