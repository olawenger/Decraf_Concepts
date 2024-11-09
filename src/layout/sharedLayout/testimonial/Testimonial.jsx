import apostropheL from '../../../assets/apostrophe-left.png'
import apostropheR from '../../../assets/apostrophe-right.png'
import profileImg from '../../../assets/profileImage.png'
const Testimonial = () => {
  return (
    <div>
      <div className=" w-11/12 mx-auto py-10 responsive ">
        <h4 className="text-black-100 medium-text text-center pb-3">WHAT OUR CUSTOMERS SAY</h4>
        <h2 className="text-orange-600 text-center large-text">
          Don’t Just Take Our Word For It.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-5">
        <div className="p-7 border-x-black-500 border-2 relative">
            <img src={apostropheR} className=' absolute top-7 right-0 px-3' alt="" />
            <img src={apostropheL} alt="" className='absolute top-7 left-0 px-3'  />
            <p className=" px-3 text-base lg:text-lg font-medium ">
              {/* Lorem ipsum dolor sit amet consectetur. Sed iaculis et sapien
              neque. Lectus felis eu adipiscing dolor ut eget iaculis mauris
              nec. Purus rhoncus vel id tortor nulla dictum duis at vestibulum.
              Id bibendum dictum nunc et volutpat a tellus ut nascetur. Volutpat
              nunc porta vestibulum ipsum et enim ac pharetra pellentesque.
              Vivamus diam enim commodoi. */}
            </p>
          
            <div className='flex justify-center items-center gap-4 py-5'>
              <span>
                <img className='profile-img' src={profileImg} alt="" />
              </span>
              <div>
                <h2 className='medium-text'>John Doe</h2>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="p-7 border-x-black-500 border-2 relative">
            <img src={apostropheR} className=' absolute top-7 right-0 px-3' alt="" />
            <img src={apostropheL} alt="" className='absolute top-7 left-0 px-3'  />
            <p className="text-base lg:text-lg px-3 font-medium ">
              {/* Lorem ipsum dolor sit amet consectetur. Sed iaculis et sapien
              neque. Lectus felis eu adipiscing dolor ut eget iaculis mauris
              nec. Purus rhoncus vel id tortor nulla dictum duis at vestibulum.
              Id bibendum dictum nunc et volutpat a tellus ut nascetur. Volutpat
              nunc porta vestibulum ipsum et enim ac pharetra pellentesque.
              Vivamus diam enim commodo. */}
            </p>
          
            <div className='flex justify-center items-center gap-4 py-5'>
              <span>
                <img className=' profile-img' src={profileImg} alt="" />
              </span>
              <div>
                <h2 className='medium-text'>Wenger</h2>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
