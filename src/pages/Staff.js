import React from 'react'
import Carasoul from '../components/Carasoul';
import Footer from '../components/Footer';

function Staff() {
  
  document.title = "Staff";
  let carasoulList = [
    "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772240_1280.png",
    "https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png",    
    "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772240_1280.png",
    "https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png",    
    "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772240_1280.png",
    "https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png",    
    "https://cdn.pixabay.com/photo/2018/04/26/16/31/marine-3352341_1280.jpg"
  ];

  return (
    <>
      website content
      <Carasoul carasoulList={carasoulList}/>

      <Footer/>
    </>
  )
}

export default Staff