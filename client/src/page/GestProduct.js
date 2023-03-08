import React from 'react'
import "./css/GestProduct.css"
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import { Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function GestProduct() {

  const styles = {
    paper: {
    height: "86%",
    width: '97%',
    bgcolor: '#f3f6f4',
    overflowY: 'scroll',
    padding: 20,

    },
    };

  return (
    <div className='product'>
        <Navbar/>
      <div className='product-body'>
        <div className='product-container' >
        <div className='product-title'>
            <h1>Nos Produits</h1>
        </div>
        <Paper className='product-paper'>
          <div className='product-container-header'>
            <div className='product-header-left'>
              <ul className='product-ul'>
              <li>
                  <select className='product-sel'>
                    <option>nom</option>
                  </select>
                </li>
                <li>
                  <select className='product-sel'>
                    <option>categorie</option>
                  </select>
                </li>
                <li>
                  <select className='product-sel'>
                    <option>prix</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className='product-header-right'>
            <div className='product-header-form'>
              <input type="text" placeholder='ex: nom de l article' className='product-in'/>
              <button className='product-btn'><SearchIcon/></button> 
            </div>
            <button className='product-btn-add'>nouvelle article</button>
            </div>
            
          </div>
        <Paper  style={styles.paper}>
         <Products/>
         </Paper>
         </Paper>
         </div>
      </div>
    </div>
  )
}

export default GestProduct
