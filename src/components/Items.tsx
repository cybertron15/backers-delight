import React from 'react'
import ItemCard from './ItemCard'

function Items() {
    const items = [
		{
			title: "Pastries",
			desc: "Heavenly pastry creations that will satistfy your cravings",
            bgImage:"pastries.webp"
		},
		{
			title: "Cookies",
			desc: "Delicious Decandent cookies that are sure to impress",
            bgImage:"cookies.webp"
		},
		{
			title: "Bread",
			desc: "Freshly-baked loaves of bread you'll find irresistible",
            bgImage:"bread2.webp"
		}]
    return (
        <div className="flex flex-col gap-6 bg-[#f9d9b2] w-full h-full justify-center py-8">
            <div className="text-2xl md:text-4xl lg:text-6xl font-Playwrite text-center text-yellow-700 md:mt-20 font-semibold">
                What you'll love
            </div>
            <div className="flex flex-col md:flex-row w-full md:px-24 gap-4 flex-grow md:py-16">
                {
                    items.map((item => {
                        return <div key={item.title} className="flex basis-1/3">
                            <ItemCard title={item.title} desc={item.desc} bgImage={item.bgImage} />
                        </div>
                    }))
                }
            </div>
        </div>
    )
}

export default Items