import React from 'react';
import Navbar from '../components/Navbar';
import {Container, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import './css/HomePage.css'
import DonutStat from '../components/DonutStat';
import ColumnStat from '../components/ColumnStat';
import LineStat from '../components/LineStat';
import ReseauStat from '../components/ReseauStat';

function HomePage() {
  return (
    <div className='HomePage'>
      <div className='homeContainer'>
        <div className='homeheader'>
          <Navbar/>
        </div>
        <div className='homebody'>
           <div className='home-champ1'>
           <Container style={{marginTop : 80, maxWidth: "87%"}}>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{backgroundColor: "green", color: "white"}}>
              <h2 className='home-title'>utilisateur</h2>
              <p className='home-item'>122.2K</p>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <Card sx={{backgroundColor: "#eb7a34", color: "white"}}>
          <h2 className='home-title'>Commandes</h2>
              <p className='home-item'>12 m</p>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <Card sx={{backgroundColor: "#ebc034", color: "white"}}>
          <h2 className='home-title'>produits</h2>
              <p className='home-item'>2 m</p>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <Card sx={{backgroundColor: "#343deb", color: "white"}}>
          <h2 className='home-title'>Commentaire</h2>
              <p className='home-item'>10 K</p>
            </Card>
          </Grid> 
          </Grid>
          </Container>
           </div>
           <div className='home-champ2'>
            <Container style={{marginTop : 40, maxWidth: "87%"}}>
              <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card>
                 <LineStat/> 
                </Card>
              </Grid>
              <Grid item xs={4}>
               <Card>
                <ReseauStat/>
               </Card>
              </Grid>
              <Grid item xs={8}>
              <Card>
                <ColumnStat/>
               </Card>
              </Grid>
              <Grid item xs={4}>
              <Card style={{height: 350, backgroundColor : "#F7F9F9 "}}>
                <DonutStat/>
                </Card>
              </Grid>
            </Grid>
            </Container>
           </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
