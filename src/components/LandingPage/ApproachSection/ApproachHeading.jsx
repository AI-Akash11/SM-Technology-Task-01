const ApproachHeading = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-10 items-center">
            {/* left side */}
            <div className="col-span-2 sm:col-span-1 md:col-span-3 lg:col-span-3 mr-20">
                {/* floating icon */}
            <div className="relative flex items-center justify-center w-[110px] h-[110px]">
                
                {/* Circular Text SVG */}
                <svg 
                    viewBox="0 0 200 200" 
                    className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]"
                >
                    <path 
                        id="circlePath" 
                        fill="none" 
                        d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" 
                    />
                    <text className="font-body text-[16px] font-medium tracking-[0.14em] fill-[#cccccc]">
                        <textPath href="#circlePath" startOffset="0%">
                            WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE/ 
                        </textPath>
                    </text>
                </svg>

                {/* Center Icon */}
                <img 
                    src="/logo-icon-black.png" 
                    alt="Floka Badge Icon" 
                    className="w-10 h-10 object-contain z-10"
                />
            </div>
            {/* text */}
            <div >
                <p className="text-[#666666] font-semibold sm:text-lg">We design every project with long-term success in mind.</p>
            </div>
            </div>
            {/* right side */}
            <div className="col-span-7 lg:col-span-6 ml-0 lg:ml-10 mt-5 md:mt-0">
                <p className="text-black font-semibold text-3xl md:text-4xl xl:text-5xl leading-tight">Our approach is straightforward — prioritizing functionality, speed, and clarity for solutions.</p>
            </div>

        </div>
    );
};

export default ApproachHeading;