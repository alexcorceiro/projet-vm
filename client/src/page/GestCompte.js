import { Card, Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import Tableau from '../components/Tableau';
import "./css/GestCompte.css";

function GestCompte() {
  return (
    <div className='comptPage'>
    <div className='comptContainer'>
      <Navbar/>
      <div className='comptbody'>
      <Container>
        <Card>
         <Tableau/>
        </Card>
      </Container>
      </div>
      </div>
      </div>
  )
}

export default GestCompte
