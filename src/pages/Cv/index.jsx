import React, { useEffect } from 'react';
import cv from '../../assets/CV.pdf';
export default function Cv() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <object
          data={cv}
          type='application/pdf'
          width='70%'
          height='1100px'
        ></object>
      </div>
    </div>
  );
}
