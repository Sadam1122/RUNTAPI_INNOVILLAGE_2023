'use client';

import { Modal } from 'flowbite-react';
import { useState } from 'react';
import Img2 from '../assets/img_2.png'
import Logo from '../assets/logo.png'
import WA from '../assets/wa.png'
import Shopee from '../assets/shopee.png'
import Tokped from '../assets/tokped.png'
import Tiktok from '../assets/tiktok.png'

const MainSection = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <section className='min-h-screen bg-[#CFC6BE] py-12'>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center lg:px-10 px-6">
                <div className='lg:order-1 order-2'>
                    <h1 className="sm:text-[5rem] xl:text-[7rem] text-[2rem] font-bold text-[#705A49]">COBA RUNTAPI SEKARANG!</h1>
                    <p className="lg:text-2xl font-semibold text-[#705A49]">Ramah Lingkungan dan sehat untuk tumbuhan</p>
                    <div className='flex flex-wrap items-center mt-12 lg:gap-16 gap-6'>
                        <button onClick={() => setOpenModal(true)} className='bg-[#705A49] text-white font-bold lg:text-2xl rounded-xl border-4 shadow-xl border-white lg:px-8 px-5 lg:py-6 py-4'>
                            Order Sekarang
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
                                    <a href='#' className='flex justify-center gap-3 items-center bg-[#0D1216] text-lg text-white py-3 rounded-md'>
                                        <img src={Tiktok} alt='whatsapp' className='w-6'/>
                                        Tiktok Shop
                                        <svg xmlns="http://www.w3.org/2000/svg" className='bi bi-arrow-right w-5 m-0 p-0' fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                        </svg>
                                    </a>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <div>
                            <div className='flex items-center'>
                                <svg className='lg:w-8 w-5' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.75 3.42188L15.84 9.34616L22.75 10.302L17.75 14.9109L18.93 21.4219L12.75 18.3462L6.57 21.4219L7.75 14.9109L2.75 10.302L9.66 9.34616L12.75 3.42188Z" fill="#705A49"/>
                                </svg>
                                <svg className='lg:w-8 w-5' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.75 3.42188L15.84 9.34616L22.75 10.302L17.75 14.9109L18.93 21.4219L12.75 18.3462L6.57 21.4219L7.75 14.9109L2.75 10.302L9.66 9.34616L12.75 3.42188Z" fill="#705A49"/>
                                </svg>
                                <svg className='lg:w-8 w-5' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.75 3.42188L15.84 9.34616L22.75 10.302L17.75 14.9109L18.93 21.4219L12.75 18.3462L6.57 21.4219L7.75 14.9109L2.75 10.302L9.66 9.34616L12.75 3.42188Z" fill="#705A49"/>
                                </svg>
                                <svg className='lg:w-8 w-5' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.75 3.42188L15.84 9.34616L22.75 10.302L17.75 14.9109L18.93 21.4219L12.75 18.3462L6.57 21.4219L7.75 14.9109L2.75 10.302L9.66 9.34616L12.75 3.42188Z" fill="#705A49"/>
                                </svg>
                                <svg className='lg:w-8 w-5' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.75 3.42188L15.84 9.34616L22.75 10.302L17.75 14.9109L18.93 21.4219L12.75 18.3462L6.57 21.4219L7.75 14.9109L2.75 10.302L9.66 9.34616L12.75 3.42188Z" fill="#705A49"/>
                                </svg>
                            </div>
                            <p className='text-xl text-[#705A49] font-semibold'>5.5 Rating</p>
                        </div>
                    </div>
                </div>
                <div className='lg:order-2 order-1'>
                    <img src={Img2} alt='gambar' className='lg:w-4/5 lg:mt-24 rounded-3xl shadow-md block mx-auto'/>
                </div>
            </div>
        </section>
    )
}

export default MainSection