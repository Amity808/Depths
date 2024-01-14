import React from 'react'

const Navbar = () => {
  return (
    <div className=' mx-[108px] my-[10px]'>
        <div className=' flex justify-between items-center'>
        <div className=''>
            <span className='text-white text-[24px] font-bold flex'>
                Seed<p className='text-[#53D8FB] text-[24px] font-bold'>Vault</p>
            </span>
        </div>
        <div className=' flex'>
            <div>
                <li className=' list-none flex gap-14 items-center text-white'>
                    <ul>Home</ul>
                    <ul>Service</ul>
                    <ul>Features</ul>
                    <ul>FAQ</ul>
                    <button className=' bg-[#53D8FB] flex gap-[40px] px-[40px] py-[14px] rounded-[80px]'>
                        Connect Wallet
                    </button>
                </li>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar