import React, { useEffect, useState } from 'react'
import {LatestMovies,imageUrl } from '../Url/Url';
import axios from 'axios'
import { Button, Card } from 'react-bootstrap';


const Latestmovies = () => {
    const [latest, setlatest] = useState([])
    useEffect(() => {
        axios.get(LatestMovies).then((l)=> setlatest(l.data.results))
    }, [])
    console.log(latest);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {latest.map((element,index)=>{
            return (              
                <Card style={{ width: '18rem',border:"1px solid"}}>
                  <Card.Img variant="top" src={imageUrl+element.backdrop_path} style={{height:"200px",display:"flex"}}/>
                  <Card.Body>
                   <Card.Title style={{fontSize:"30px",fontWeight:"bold"}}>{element.original_title}</Card.Title>
                  <Card.Text>{element.overview}</Card.Text>
                  <Button variant="primary">Watch</Button>
                  </Card.Body>
                </Card>
            )
        })}
    </div>
  )
}

export default Latestmovies