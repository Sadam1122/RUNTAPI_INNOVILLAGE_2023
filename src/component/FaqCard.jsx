import { useRef, useState } from "react"

const FaqCard = ({title, details}) => {

    const detail = useRef(null)
    const [icon, setIcon] = useState(false);

    const showDetails = () => {
        detail.current.classList.toggle("hidden")
        if(detail.current.classList.contains("hidden")){
            setIcon(false)
        } else {
            setIcon(true)
        }
    }

    return (
        <div className="h-max border shadow-md transition-all rounded-lg px-5 py-6">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="sm:text-lg lg:text-xl text-base text-[#705A49] font-semibold">{title}</h1>
                    <p className="hidden">{details}</p>
                </div>
                <button onClick={showDetails} className={icon ? 'bg-[#705A49] rounded-lg' : 'bg-[#E6E6E6] rounded-lg'}>
                    {icon ?
                        <svg class="w-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>
                        </svg>

                        :

                        <svg className="w-8 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                        </svg>
                     }
                </button>
            </div>
            <p ref={detail} className="hidden">{details}</p>
        </div>
    )
}

export default FaqCard