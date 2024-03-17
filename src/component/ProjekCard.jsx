'use client';
import { Modal } from 'flowbite-react';
import { useState } from 'react';

const ProjekCard = ({title, img, description}) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="relative sm:min-w-96 min-w-80 h-96 cursor-pointer" onClick={() => setOpenModal(true)}>
                <img src={img} className="block mx-auto w-full h-[90%] rounded-lg hover:scale-110 transition-all" alt="kegiatan"/>
                <div className="absolute bottom-0 px-8">
                    <div className="bg-[#E6E6E6] p-3 rounded-lg shadow-lg">
                        <p className="text-center text-xl text-black font-semibold">{title}</p>
                    </div>
                </div>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>
                    <h1 className='text-center text-xl'>{title}</h1>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <img src={img} className="block mx-auto md:w-2/3 min-w-1" alt="kegiatan"/>
                        <p className="text-base leading-relaxed text-justify text-gray-500 dark:text-gray-400">
                            {description}
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjekCard