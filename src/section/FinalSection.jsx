import WA from '../assets/wa.png'
import Email from '../assets/email.png'
import Lokasi from '../assets/lokasi.png'
import { useState } from 'react'
import Footer from '../component/Footer'

const FinalSection = () => {
    const [subject, setSubject] = useState("")
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [pesan, setPesan] = useState("")


    const sendEmail = (e) => {
        e.preventDefault();
        let finalSubject = subject.split(" ").join("%20")
        let finalNama = nama.split(" ").join("%20")
        let finalPesan = pesan.split(" ").join("%20")
        window.location.href = `mailto:Runtapi2023@gmail.com?&subject=${finalSubject}&body=Dari:%20${finalNama}%0D%0AEmail:%20${email}%0D%0A%0D%0A${finalPesan}`

        setSubject("")
        setNama("")
        setEmail("")
        setPesan("")
    }
    return (
        <section id='kontak' className="min-h-screen pt-12">
            <h1 className="text-center lg:text-4xl text-3xl text-[#4D4D4D] font-semibold mb-14">
                Hubungi Kami <span className="text-[#705A49]">Sekarang</span>
            </h1>
            <div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 rounded-[3rem] pb-8 from-[#CFC6BE] bg-gradient-to-b lg:pe-12 sm:mx-16 mx-4">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.875111004601!2d107.6321947!3d-7.2550519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6897e635b161f5%3A0xd9f1aca4c588e336!2sKampung%20Cisabuk!5e0!3m2!1sid!2sid!4v1706411344859!5m2!1sid!2sid"
                            className='w-full lg:h-full h-96 rounded-[3rem]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className='mx-6 pt-8'>
                        <div className="flex justify-center gap-8 mb-8 flex-wrap">
                            <a href="https://wa.me/6288258098757" target='_blank' className="bg-white sm:w-36 w-full shadow-lg py-4 px-1 rounded-3xl">
                                <img src={WA} alt='whatsapp' className='w-8 block mx-auto'/>
                                <p className='text-center'>088-2580-987-57</p>
                            </a>
                            <div className="bg-white sm:w-36 w-full shadow-lg py-4 px-1 rounded-3xl">
                                <img src={Email} alt='whatsapp' className='w-8 block mx-auto'/>
                                <p className='text-center sm:text-xs text-base'>Runtapi2023@gmail.com</p>
                            </div>
                            <a href="https://maps.app.goo.gl/VcnUgVxJ69oLg8i79" target='_blank' className="bg-white sm:w-36 w-full shadow-lg py-4 px-1 rounded-3xl">
                                <img src={Lokasi} alt='whatsapp' className='w-8 block mx-auto'/>
                                <p className='text-center'>Kampung Cisabuk</p>
                            </a>
                        </div>
                        <form onSubmit={sendEmail}>
                            <input type='text' onChange={(e) => setSubject(e.target.value)} placeholder='Subject' className='w-full focus:ring-0 focus:border-0 border-0 rounded-full mb-6 py-3' required/>
                            <input type='text' onChange={(e) => setNama(e.target.value)} placeholder='Nama' className='w-full focus:ring-0 focus:border-0 border-0 rounded-full mb-6 py-3' required/>
                            <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Alamat Email' className='w-full focus:ring-0 focus:border-0 border-0 rounded-full mb-6 py-3' required/>
                            <textarea rows="10" onChange={(e) => setPesan(e.target.value)} placeholder='Pesan' className='w-full focus:ring-0 focus:border-0 border-0 rounded-3xl mb-6 py-3' required></textarea>
                            <button type='submit' className='w-full text-center text-white bg-[#705A49] text-xl font-semibold py-2 rounded-full'>Kirim</button>
                        </form>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </section>
    )
}

export default FinalSection