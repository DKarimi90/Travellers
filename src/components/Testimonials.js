

import React, {useState, useEffect} from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {BsDot} from 'react-icons/bs'
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const images = [
  {url: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?cs=srgb&dl=pexels-tarzine-jackson-773371.jpg&fm=jpg", 
  name: "Mona Angels",
  career: "Software Developer",
  content: "Incredible adventure with TRAVEL! The tour was well-organized, and the sights were simply stunning.", 
  }, 
  {url: "https://img.freepik.com/premium-photo/beautifel-happy-woman-girl-beach-have-fun-relax-summer-vacation-beautiful-tropical-sea_530697-9628.jpg", 
  name: "Emma Daniels", 
  career: "Professional Model", 
  content: "Highly recommend TRAVEL! Their knowledgeable guides and well-planned itineraries exceeded our expectations."}, 
  {url: "https://media.istockphoto.com/id/894361286/photo/mr-cool-himself.jpg?s=612x612&w=0&k=20&c=m9hfsqOm149_SY_C3w79MgwEncru9X61oJwZHec3Xr8=", 
  name: "Mike Norwel", 
  career: "Graphic Designer", 
  content: "I had the best time exploring with TRAVEL. Their attention to detail and personalized approach made my journey truly remarkable."}, 
  {url: "https://t3.ftcdn.net/jpg/01/50/57/68/360_F_150576875_vigISGDBcfkAHglravODnkZPppYoirvU.webp", 
  name: "Hannah Spencer", 
  career: "Agronomist", 
  content: "Efficient and reliable, TRAVEL made our vacation hassle-free. We can't wait to book our next trip with them!"}, 
  {url: "https://media.istockphoto.com/id/984011410/photo/handsome-smiling-man-looking-away.jpg?s=612x612&w=0&k=20&c=TBebboy2N0FvXjtoB7UlcTfCLuRitNdVtzRnDhKLnXQ=", 
  name: "Trevor Jones", 
  career: "Civil Engineer", 
  content: "Amazing experience! TRAVEL made my trip unforgettable with exceptional service and breathtaking destinations."},
  {url: "https://media.istockphoto.com/id/1182565289/photo/portrait-of-latin-american-lady.jpg?s=612x612&w=0&k=20&c=EgesgUyD9R6AQICd-mUel82HKvuPIVh5NVyOtcfhgN8=", 
  name: "Monicah Edwards", 
  career: "Educationist", 
  content: "TRAVEL provided top-notch customer service. We felt safe, comfortable, and enjoyed every moment of our journey."}

 
]


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 7000); // Change image every 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const prevImage = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToNextImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div name="testimonials" className="w-full h-[800px] mt-8">
      <div className='flex justify-center'>
        <h1 className='font-[Montserrat] font-thin text-2xl border-b border-[var(--primary)]'>TESTIMONIALS</h1>
      </div>
      <div className='flex justify-center pt-8'>
        <p className='text-4xl'>What our <span className='text-[var(--primary)] font-semibold'>Clients</span> Say:</p>
      </div>
      <div className="w-full h-full max-w-[600px] max-h-[600px] mx-auto my-auto group relative duration-700 p-32">
        <div style={{ backgroundImage: `url(${images[currentIndex].url})` }} className="w-full h-full bg-cover bg-center duration-500 rounded-[90%]"></div>

        {/* Slide Content */}
        <div className="w-[700px] ml-[-52%] p-4 mt-16 flex flex-col text-center">
          <h3 className="text-2xl text-[var(--primary)] font-semibold">{images[currentIndex].name}</h3>
          <p className="text-2xl font-bold ">{images[currentIndex].career}</p>
          <p className="text-lg italic">{images[currentIndex].content}</p>
        </div>

        {/* Left Arrow */}
        <div onClick={prevImage} className="arrow left-5">
          <IoIosArrowBack size={40} />
        </div>

        {/* Right Arrow */}
        <div onClick={nextImage} className="arrow right-5">
          <IoIosArrowForward size={40} />
        </div>

        <div className="flex justify-center mt-1 hover:cursor-pointer">
          {images.map((image, index) => (
            <div key={index} onClick={() => goToNextImage(index)}>
              <BsDot size={40} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
















