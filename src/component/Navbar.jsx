'use client';

import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { useRef } from 'react'
import Logo from '../assets/logo.png'
import WA from '../assets/wa.png'
import Shopee from '../assets/shopee.png'
import Tokped from '../assets/tokped.png'
import Tiktok from '../assets/tiktok.png'

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);
    const navbar = useRef(null)

    const openNavbar = () => {
        navbar.current.classList.toggle('translate-y-[-100rem]')
    }

    const hideNavbar = () => {
        navbar.current.classList.toggle('translate-y-[-100rem]')
    }

    return (
        <header>
            <nav className='fixed flex top-0 z-50 w-full bg-white justify-between items-center border-2 lg:px-[101px] lg:py-0 py-3 px-6'>
                <div>
                    <img src={Logo} alt='logo' className='sm:w-32 lg:w-56 w-24'/>
                </div>
                <button className='lg:hidden block' onClick={openNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-7 bi bi-list' fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
                <div ref={navbar} className='lg:static lg:z-0 z-30 lg:pb-0 pb-8 lg:shadow-none shadow-md absolute lg:translate-y-0 translate-y-[-100rem] transition-all right-0 top-full flex lg:flex-row flex-col lg:w-max w-full bg-white justify-between items-center gap-8'>
                    <div>
                        <ul className='flex lg:flex-row flex-col items-center font-medium gap-5'>
                            <li>
                                <a href='#home' onClick={hideNavbar}>Home</a>
                            </li>
                            <li>
                                <a href='#tentang' onClick={hideNavbar}>Tentang</a>
                            </li>
                            <li>
                                <a href='#projek' onClick={hideNavbar}>Projek</a>
                            </li>
                            <li>
                                <a href='#faq' onClick={hideNavbar}>FAQ</a>
                            </li>
                            <li>
                                <a href='#kontak' onClick={hideNavbar}>Kontak</a>
                            </li>
                        </ul>
                    </div>
                    <div>

                    {/* MODAL */}
                        <button onClick={() => setOpenModal(true)} className='flex gap-2 items-center bg-[#705A49] text-white px-8 py-3 rounded-md'>
                            <span className='m-0 p-0'>Order Sekarang</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className='bi bi-arrow-right w-5 m-0 p-0' fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </button>
                        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                            <Modal.Header>
                                <img src={Logo} alt='logo' className='w-28'/>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="space-y-6">
                                    <h1 className='text-3xl text-[#4D4D4D] text-center font-semibold'>Order Disini</h1>
                                    <a href="https://wa.me/6288258098757" target='_blank' className='flex justify-center gap-3 items-center bg-[#438B45] text-lg text-white py-3 rounded-md'>
                                        <img src={WA} alt='whatsapp' className='w-6'/>
                                        Whatsapp
                                        <svg xmlns="http://www.w3.org/2000/svg" className='bi bi-arrow-right w-5 m-0 p-0' fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                        </svg>
                                    </a>
                                    <a href='#' className='flex justify-center gap-3 items-center bg-[#FF6D2C] text-lg text-white py-3 rounded-md'>
                                        <img src={Shopee} alt='whatsapp' className='w-6'/>
                                        Shopee
                                        <svg xmlns="http://www.w3.org/2000/svg" className='bi bi-arrow-right w-5 m-0 p-0' fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                        </svg>
                                    </a>
                                    <a href='#' className='flex justify-center gap-3 items-center bg-[#4CAF4F] text-lg text-white py-3 rounded-md'>
                                        <img src={Tokped} alt='whatsapp' className='w-6'/>
                                        Tokopedia
                                        <svg xmlns="http://www.w3.org/2000/svg" className='bi bi-arrow-right w-5 m-0 p-0' fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                        </svg>
                                    </a>
                                </div>
                            </Modal.Body>
                        </Modal>
                        {/*  */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar