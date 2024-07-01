import { Flower } from 'lucide-react'
import React from 'react'

function Tagline() {
    return (
        <div className="flex flex-col justify-center items-center h-full bg-[#2d190a]">
            <Flower color="white" size={50} />
            <div className="basis-2/4 text-2xl md:text-4xl lg:text-6xl font-Playwrite font-light text-center flex flex-col justify-center items-center gap-3 text-white">
                <div>Backed with finest natural</div>
                <div>ingridients. Delivered fresh </div>
                <div>from the over. Perfection.</div>
            </div>
            <Flower color="white" size={50} />
        </div>
    )
}

export default Tagline