import { Flower } from 'lucide-react'

function PastryPerfection() {
  return (
    <div className="h-full flex flex-col md:flex-row">
					<div className="hidden basis-1/2 md:flex flex-col items-center justify-center gap-2 bg-amber-900 w-full">
						<Flower color="white" size={50} />
						<div className="h-[25%] text-2xl md:text-4xl lg:text-6xl font-Playwrite font-light text-center flex flex-col justify-center items-center gap-3 text-white">
							Pastry <br />
							Perfection
						</div>
						<div className="text-center text-white text-sm md:text-xl lg:text-2xl mt-6">
							Discover deliciousness at Chervet Backery. Imagine <br />
							biting into a freshly baked treat that's made <br />
							with love and handled with care.<br /><br />


							No need to imagine. because our pastries are<br />
							baked, packed and delivered on the day they're<br />
							made. So you're assured of oven-fresh goodness.<br /><br />

							Now that's perfection.
						</div>
					</div>
					<div className="h-full md:basis-1/2 bg-cover bg-center bg-[url('/cupcake.webp')] text-center">
						<div className="bg-black bg-opacity-50 h-full w-full flex flex-col items-center justify-center md:hidden">
							<Flower color="white" size={50} />
							<div className="h-[20%] text-6xl md:text-4xl lg:text-6xl font-Playwrite font-light text-center flex flex-col justify-center items-center gap-3 text-white">
								Pastry <br />
								Perfection
							</div>
							<div className="text-center text-white text-sm md:text-xl lg:text-2xl mt-6 md:px-5">
								Discover deliciousness at Chervet Backery. Imagine <br />
								biting into a freshly baked treat that's made <br />
								with love and handled with care.<br /><br />


								No need to imagine. because our pastries are<br />
								baked, packed and delivered on the day they're<br />
								made. So you're assured of oven-fresh goodness.<br /><br />

								Now that's perfection.
							</div>
						</div>
					</div>
				</div>
  )
}

export default PastryPerfection