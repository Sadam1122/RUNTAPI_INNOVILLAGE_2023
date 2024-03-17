import Title from '../component/Title'
import FaqCard from '../component/FaqCard'

const Faq = () => {
    return (
        <section id='faq' className="min-h-screen flex flex-col justify-center py-12">
            <Title title="FAQ (Frequently Ask Question)"/>
            <div className='grid md:grid-cols-2 grid-cols-1 px-8 gap-8 mt-16'>
                <FaqCard title="Mengapa memilih Produk RUNTAPI dibanding yang lain" details="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure"/>
                <FaqCard title="Apakah Produk RUNTAPI aman digunakan" details="asa"/>
                <FaqCard title="Bagaimana memesan produk RUNTAPI?" details="asa"/>
                <FaqCard title="Bagaimana pengaruh Produk RUNTAPI terhadap Lingkungan?" details="askjasjakjsk"/>
                <FaqCard title="Berapa lama pengiriman produk RUNTAPI?" details="asa"/>
                <FaqCard title="Berapa lama pengiriman produk RUNTAPI?" details="asa"/>
            </div>
        </section>
    )
}

export default Faq