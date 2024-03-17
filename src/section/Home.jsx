import Banner from '../component/Banner'
import Navbar from '../component/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <section id='home' className="md:h-80 lg:h-[80vh] h-64 mt-20">
                <Banner />
            </section>
        </>
    )
}

export default Home