import React from 'react';
import PreloaderRow from './PreloaderRow';

function Preloader() {
  return new Array(7)
    .fill(null)
    .map((item, index) => <PreloaderRow key={index} />);
}

export default Preloader;
