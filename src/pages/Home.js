import React from 'react'
import Carasoul from '../components/Carasoul';
import Footer from '../components/Footer'

function Home() {
  document.title = "Home";
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
      
      <div className='  d-flex justify-content-between my-2'> 
            <div class="p-2" style={{
              "height":'300px',
              'width':'max-lenght'
            }}>
              <h4>hello this is IITD website
              for any problem reach out to us on 
              </h4>
              <button style={{
                
                  'background': '#ec008c',  /* fallback for old browsers */
                  'background': '-webkit-linear-gradient(to right, #fc6767, #ec008c)',  /* Chrome 10-25, Safari 5.1-6 */
                  'background': 'linear-gradient(to right, #fc6767, #ec008c) ', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                  'color': '#fff',
                  'border': '3px solid #eee',
                  'padding':'5px'

              }}>
                Click this button for help
              </button>
            </div>
            <div class="p-2">
              <img style={{"height":'300px','width':'max-lenght','align':'left'} } src="https://cdn.pixabay.com/photo/2018/04/26/16/31/marine-3352341_1280.jpg"/>
            </div>
      </div>  
      
      <Carasoul carasoulList={carasoulList}/>        
      <marquee > this is new website</marquee>
          
        {/* this is the place for content */}


        {/* this is the place for content */}

    <Footer/>
    </>
  )
}

export default Home