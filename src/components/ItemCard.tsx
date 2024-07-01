
type Props<T> = {
    title: T;
    desc: T;
    bgImage: T;
}

function ItemCard({ title, desc, bgImage }: Props<string>) {
    return (
        <div className="relative cursor-pointer overflow-hidden md:rounded-[150px] w-full group">
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{
                    backgroundImage: `url(${bgImage})`
                }}
            />
            <div className='relative flex gap-2 flex-col justify-center items-center p-4 h-full bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500 ease-in-out md:rounded-[150px]'>
                <div className='text-white font-Playwrite text-2xl md:text-4xl text-center group-hover:text-5xl transition-all duration-500 ease-in-out'>
                    {title}
                </div>
                <div className='text-white text-center text-sm md:text-lg'>
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
