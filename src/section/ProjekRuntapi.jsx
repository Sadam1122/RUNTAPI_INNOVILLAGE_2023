import Title from "../component/Title"
import ProjekCard from "../component/ProjekCard"
import Kegiatan1 from "../assets/kegiatan_1.jpg"
import Kegiatan2 from "../assets/kegiatan_2.JPG"
import Kegiatan3 from "../assets/kegiatan_3.jpg"

const ProjekRuntapi = () => {
    return (
        <section id="projek" className="min-h-screen flex flex-col justify-center items-center py-12">
            <Title title="Projek RUNTAPI"/>
            <p className="text-center text-lg text-[#705A49] my-3">Proses bagaimana Implementasi RUNTAPI menjadi inovasi sampah</p>
            <div className="flex w-[90vw] gap-8 overflow-x-scroll no-scrollbar py-6">
                <ProjekCard
                    title="Telkom University menciptakan alat daur ulang sampah dan kotoran sapi yang efisien"
                    img={Kegiatan1}
                    description="Kampung Cisabuk, sebuah komunitas yang terletak di Kabupaten Bandung, Jawa Barat, telah menjadi 
                                pusat perhatian dalam upaya menjaga kebersihan dan kelestarian lingkungan. Dengan semangat yang menggelora, warga Kampung Cisabuk mengadakan sebuah acara sosialisasi yang bertujuan untuk memberikan pemahaman yang lebih mendalam tentang pentingnya mengenali dan mengelola sampah dengan efektif.
                                Acara ini dihadiri oleh ratusan warga setempat yang antusias untuk mempelajari berbagai teknik dan praktik terbaik dalam mengelola sampah. Para peserta diberikan kesempatan untuk berdiskusi langsung dengan para ahli lingkungan serta praktisi kebersihan, yang berbagi pengetahuan dan pengalaman mereka dalam hal pengelolaan sampah yang ramah lingkungan
                                Salah satu sorotan dari acara ini adalah sesi demonstrasi praktis, di mana para peserta diajak untuk mempraktikkan teknik pemisahan sampah dan pembuatan kompos secara langsung. Hal ini memberikan pemahaman yang lebih nyata dan mendalam tentang bagaimana setiap individu dapat berkontribusi dalam upaya menjaga kebersihan lingkungan.
                                Kolaborasi yang erat antara masyarakat setempat, pemerintah daerah, dan berbagai lembaga lingkungan menjadi kunci kesuksesan acara ini. Dengan semangat gotong royong dan kepedulian terhadap lingkungan, Kampung Cisabuk berharap dapat menjadi contoh bagi komunitas lain dalam upaya menjaga kebersihan dan kelestarian lingkungan.
                                Dengan demikian, acara sosialisasi ini bukan hanya sekadar pertemuan biasa, melainkan langkah nyata menuju masa depan yang lebih hijau dan berkelanjutan bagi Kampung Cisabuk dan komunitas sekitarnya. Semangat positif yang tercipta dari acara ini diharapkan dapat terus membara dan menginspirasi perubahan yang positif dalam perilaku terhadap sampah di masyarakat.
                                "
                />
                <ProjekCard
                    title="Sosialisasi tentang Pengenalan Sampah dan pengelolaannya di Kampung Cisabuk"
                    img={Kegiatan2}
                />
                <ProjekCard
                    title="RUNTAPI memberikan kebermanfaatan bagi Kampung Cisabuk"
                    img={Kegiatan3}
                />
                <ProjekCard
                    title="RUNTAPI memberikan kebermanfaatan bagi Kampung Cisabuk"
                    img={Kegiatan3}
                />
                <ProjekCard
                    title="RUNTAPI memberikan kebermanfaatan bagi Kampung Cisabuk"
                    img={Kegiatan3}
                />
                <ProjekCard
                    title="RUNTAPI memberikan kebermanfaatan bagi Kampung Cisabuk"
                    img={Kegiatan3}
                />
            </div>
        </section>
    )
}

export default ProjekRuntapi