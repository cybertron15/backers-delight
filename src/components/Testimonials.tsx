import TestimonialCard from './TestimonialCard'

function Testimonials() {
    const testimonials = [
		{
			title: "Quark Sweets Digest",
			desc: "Delicious treats that melt in your mouth! A bakery beyond compare"
		},
		{
			title: "Sweevory Magazine",
			desc: "Every Bite is a moment of pure delight. This backery is a hidden gem!"
		},
		{
			title: "Accrington Daily",
			desc: "From classic to creative, their pastries are a true masterpiece. A bakery exprience like no other."
		}]
    return (
        <div className="flex flex-col gap-6 justify-center items-center bg-yellow-900 w-full h-full py-8">
            <div className="text-2xl md:text-4xl lg:text-6xl text-center text-white md:mt-20 font-semibold font-Playwrite">
                Chervet in the news
            </div>
            <div className="flex flex-col justify-center md:flex-row w-full px-8 md:px-8 lg:px-24 gap-10 flex-grow md:py-16">
                {
                    testimonials.map((item => {
                        return <div key={item.title} className="flex basis-1/3">
                            <TestimonialCard title={item.title} desc={item.desc} />
                        </div>
                    }))
                }
            </div>
        </div>
    )
}

export default Testimonials