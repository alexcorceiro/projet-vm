import React from 'react';
import {Container, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import "./css/Reseau.css"

function ReseauStat() {
  return (
    <div className='reseau'>
      <div className='res-container'>
      <Container style={{padding: "14px 12px"}}>
              <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card>
                  <div className='res-items'>
                    <img className='res-img' src='https://img.freepik.com/vecteurs-libre/instagram-icone-nouveau_1057-2227.jpg' alt=''/>
                    <p className='res-item'>
                    <h4>insta</h4>
                     <span>34K</span>
                    </p>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={4}>
               <Card>
               <div className='res-items'>
                    <img className='res-img' src='https://www.unamur.be/info/images/logo-twitter/image_preview' alt=''/>
                    <p className='res-item'>
                    <h4>twitter</h4>
                    <span>233K</span>
                    </p>
                  </div>
               </Card>
              </Grid>
              <Grid item xs={4}>
              <Card>
              <div className='res-items'>
                    <img className='res-img' src='https://static.vecteezy.com/ti/vecteur-libre/p3/2557421-tiktok-logo-black-mobile-social-media-icon-gratuit-vectoriel.jpg' alt=''/>
                    <p className='res-item'>
                    <h4>Tik Tok</h4>
                    <span>584K</span>
                    </p>
                  </div>
               </Card>
              </Grid>
              <Grid item xs={4}>
              <Card>
              <div className='res-items'>
                    <img className='res-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png' alt=''/>
                    <p className='res-item'>
                    <h4> Facebook</h4>
                    <span>14K</span>
                    </p>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={4}>
              <Card>
              <div className='res-items'>
                    <img className='res-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/2048px-YouTube_social_white_squircle.svg.png' alt=''/>
                    <p className='res-item'>
                    <h4> Youtube</h4>
                    <span>1m</span>
                    </p>
                  </div>
                </Card>
              </Grid>
            </Grid>
            </Container>
      </div>
    </div>
  )
}

export default ReseauStat
