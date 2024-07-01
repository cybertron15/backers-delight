function TitlePage() {
    return (
        <div className='w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-around'>
            <div className='w-64 md:w-96'>
                <img src="/bakery/logo.png" className='rounded-3xl' alt="backer" />
            </div>
            <div className='text-white text-center mb-10 w-full'>
                <div className='text-[1.50rem] md:text-4xl lg:text-6xl font-Playwrite font-light'>
                    <div className='mb-2 md:mb-3 lg:mb-5'>
                        Looking for a Perfectly Backed
                    </div>
                    <div>
                        Baked Goods?
                    </div>
                </div>
                <div className='text-lg md:text-xl lg:text-3xl mt-3 md:mt-6'>
                    We got you!
                </div>
            </div>
        </div>
    )
}

export default TitlePage