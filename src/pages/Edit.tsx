import React from 'react';
import Container from '../components/container/Container';


const Edit = () => {
  return (
    <Container style={{
      position:'absolute',
      top: 0,
      left: 0,
      height:'100%',
      width:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      background: 'rgba(0,0,0,0.3)',
    }}>
      <div style={{
        width:'90%',
        maxWidth: '480px',
        height:'80%',
        background: 'yellow'
      }}></div>
    </Container>
  )
}

export default Edit