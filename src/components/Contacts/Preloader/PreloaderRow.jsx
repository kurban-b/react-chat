import React from 'react';
import Preloader from './Preloader';

function PreloaderRow (props) {
  return (
    new Array(7)
      .fill(null)
      .map((item, index) => <Preloader key={index} />) );
}

export default PreloaderRow;