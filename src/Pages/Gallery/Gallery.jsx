import React from 'react';
import gallery1 from '../../assets/image/graduates/gallery1.jpg'
import gallery2 from '../../assets/image/graduates/gallery2.jpg';
import gallery3 from '../../assets/image/graduates/gallery3.jpg';
import gallery4 from '../../assets/image/graduates/gallery4.jpg';
import gallery5 from '../../assets/image/graduates/gallery5.jpg';
import gallery6 from '../../assets/image/graduates//gallery6.jpg';
import gallery7 from '../../assets/image/graduates/gallery7.jpg';
import gallery8 from '../../assets/image/graduates/gallery8.jpg';
import gallery9 from '../../assets/image/graduates/gallery9.jpg';


const Gallery = () => {
    return (
        <div className='my-20' data-aos="fade-up-left ">
          <h2 className='text-center py-6 font-bold text-3xl'>Graduate's Photo Gallery</h2>
            <div  className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
      <div className="p-4">
        <img src={gallery1} alt="" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery2} alt="" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery3} alt="" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery4} alt="" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery5} alt="" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery6} alt="" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery7} alt="" className="w-full h-full" />
      </div>
      <div className="p-4">
        <img src={gallery8} alt="" className="w-full h-auto" />
      </div>
      <div className="p-4">
        <img src={gallery9} alt="" className="w-full h-full" />
      </div>
      
    </div>
        </div>
    );
};

export default Gallery;