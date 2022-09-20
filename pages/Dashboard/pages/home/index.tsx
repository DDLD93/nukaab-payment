import { Grid, Typography, Button } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <>
      <Grid>
              <Typography color={"#312e2e"} fontSize={20} fontWeight={200}>
                Welcome Back, Umar
              </Typography>
            </Grid>
            <Grid>
                <Button disableElevation disableTouchRipple variant="contained" >Fund Wallet balance</Button>
            </Grid>
    </>
  )
}

export default Home