import React from 'react'

const FAQ = () => {
  return (
    <div>
        <div className=' flex justify-center items-center service text-white'> 
            <span>
                <p>Frequently Asked Question</p>
                <img src={"./line.png"} alt="underline" className='mt-[-18px] ' />
            </span>
        </div>
        <div>

        </div>
        {/* <!-- component --> */}
<div className="m-2 space-y-2 mx-[80px]">
  <div
    className="group flex flex-col gap-2 border-t-[1px] p-5 text-white"
    tabindex="1"
  >
    <div className="flex cursor-pointer items-center justify-between">
      <span> Lorem ipsum dolor sit amet consterqeur? </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      Web hosting is a data storage service so that a website can be accessed online. This website data is stored in a storage space called a web hosting server which is always active 24 hours a day. The quality of web hosting services can determine the success of your business as well as all your website activities. Without a quality web hosting service, a website may not be accessed properly. Therefore, always use the best web hosting service for your website
    </div>
  </div>

  <div
    className="group flex flex-col gap-2 border-t-[1px]  p-5 text-white"
    tabindex="2"
  >
    <div className="flex cursor-pointer items-center justify-between">
      <span> Lorem ipsum dolor sit amet consterqeur? </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </div>

  <div
    className="group flex flex-col gap-2 border-t-[1px] p-5 text-white"
    tabindex="3"
  >
    <div className="flex cursor-pointer items-center justify-between">
      <span> Lorem ipsum dolor sit amet consterqeur? </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </div>
</div>
      
    </div>
  )
}

export default FAQ
