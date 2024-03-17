import Img1 from '../assets/img_1.png'

const SectionText = () => {
    return (
        <section className="grid lg:grid-cols-2 grid-cols-1 min-h-screen lg:px-14 px-8 items-center">
            <img src={Img1} className='lg:inline block mx-auto' alt/>
            <div>
                <h1 className='md:text-3xl lg:text-4xl text-3xl font-semibold text-[#4D4D4D]'>RUNTAPI sebagai Solusi</h1>
                <h1 className='md:text-3xl lg:text-4xl text-3xl font-semibold text-[#705A49]'>Penanggulangan Sampah Masa Kini</h1>
                <p className='text-[#717171] mt-5'>
                    "RUNTAPI", inspirasi nama ini berasal dari bahasa Sunda, tepatnya "Runtah", yang berarti limbah atau sampah, dan diberi sentuhan kreatif menjadi "RUNTAPI". Secara singkat, RUNTAPI adalah alat revolusioner yang tidak hanya mampu mengelola sampah, tetapi juga limbah hewan, termasuk kotoran sapi. RUNTAPI, singkatnya, adalah singkatan dari Revitalisasi daur Ulang Kotoran Sapi dan Sampah Pelastik. Kami merancang RUNTAPI sebagai
                    solusi yang kreatif dan inovatif untuk mengatasi berbagai jenis limbah. Melalui konsep ini, kami tidak hanya memberikan pengertian baru pada kata "Runtah" tetapi juga menciptakan lingkungan yang lebih bersih dan berkelanjutan.
                </p>
            </div>
        </section>
    )
}

export default SectionText