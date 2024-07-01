import React from 'react'
import { Facebook, Globe, Instagram, Twitter } from "lucide-react"

function Contact() {
    return (
        <div className="relative h-full bg-[url('/bread.webp')] inset-0 bg-no-repeat bg-center bg-cover">
            <div className="flex flex-col items-center bg-black bg-opacity-50 h-full">
                <div className="absolute text-white text-3xl font-thin bottom-10 flex flex-col items-center gap-4 text-center">
                    <div className='w-40'>
                        <img src="/logosmall.webp" alt="backery" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-2 w-full">
                        <div className="w-full text-lg">Find us here</div>
                        <div className="flex w-full justify-center gap-3">
                            <a href="https://www.facebook.com/plash.dhavle/" target="blank" className="hover:scale-105">
                                <Facebook size={30} />
                            </a>
                            <a href="https://x.com/DhavlePalash" target="blank" className="hover:scale-105">
                                <Twitter size={30} />
                            </a>
                            <a href="https://www.instagram.com/cybertron_15/" target="blank" className="hover:scale-105">
                                <Instagram size={30} />
                            </a>
                            <a href="https://troncodes.com/" target="blank" className="hover:scale-105">
                                <Globe size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact