import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, IconButton, Paper } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import "./css/product.css"

const initialProducts = [
  { id: 1, name: 'Product 1', description: 'Description of product 1', price: 10.99, image: 'https://animefanfest.com/wp-content/uploads/2022/08/One-Piece-pourquoi-linfluence-de-Luffy-est-imparable-les.jpg' },
  { id: 2, name: 'Product 2', description: 'Description of product 2', price: 20.99, image: 'https://s.aficionados.com.br/imagens/luffy-one-piece_t.jpg' },
  { id: 3, name: 'Product 3', description: 'Description of product 3', price: 30.99, image: 'https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/12_12_2022_17_57_32_7884974.jpg?width=920' },
  { id: 4, name: 'Product 4', description: 'Description of product 4', price: 40.99, image: 'https://www.greenscene.co.id/wp-content/uploads/2022/03/Luffy-9.jpg' },
  { id: 5, name: 'Product 5', description: 'Description of product 5', price: 50.99, image: 'https://www.theanimedaily.com/wp-content/uploads/2022/10/one-piece-1037.jpg' },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);



  const handleDelete = id => {
    axios.delete(`/api/products/${id}`)
      .then(response => setProducts(products.filter(product => product.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="h6" component="h3">
                  {product.price}€ 
                </Typography>
              </CardContent>
              <CardActions>
                <button aria-label="edit" onClick={() => console.log('Edit product:', product)} className="product-edit">
                  <Edit />
                </button>
                <button aria-label="delete" onClick={() => handleDelete(product.id)} className="product-delete">
                  <Delete />
                </button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  
   
  );
};

export default Products;
