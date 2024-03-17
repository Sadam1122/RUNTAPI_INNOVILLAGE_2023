import BUMN from '../assets/bumn.png'
import KampusMerdeka from '../assets/kampus_merdeka.png'
import Telkom from '../assets/telkom.png'
import InnoVillage from '../assets/innovillage.png'
import TELYU from '../assets/telu.png'
import Bandung from '../assets/bandung.png'
import Title from '../component/Title'

const PartnerShip = () => {
    return (
        <section id='tentang' className='flex flex-col justify-center min-h-screen items-center mx-2'>
            <Title title="Partnership"/>
            <p className="text-center lg:text-base text-sm text-[#717171] mb-5">Kami berpartner dengan lembaga-lembaga berikut dalam mewujudkan RUNTAPI</p>
            <div className="flex flex-wrap w-full mx-5 items-center justify-around gap-5">
                <img src={BUMN} className='lg:w-28 w-20' alt='bumn'/>
                <img src={KampusMerdeka} className='lg:w-28 w-20' alt='kampus merdeka'/>
                <img src={Telkom} className='lg:w-28 w-20' alt='telkom'/>
                <img src={InnoVillage} className='lg:w-28 w-20' alt='inno village'/>
                <img src={TELYU} className='lg:w-28 w-20' alt='telkom university'/>
                <img src={Bandung} className='lg:w-28 w-20' alt='bandung'/>
            </div>
        </section>
    )
}

export default PartnerShip