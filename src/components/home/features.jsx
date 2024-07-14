export default function Features () {
    return ( 
        <>
            <div class="flex flex-col justify-center align-middle ">
                <div class="w-[582px] self-center">
                    <h2 class="text-center text-[52px] font-normal text-white">FEATURES</h2>
                    <p class=" mt-7 text-center text-[20px] font-normal leading-5 text-white">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                </div>
                <div class="flex flex-row w-[1088px] self-center mt-24 ">
                    <div class="basis-2/3">
                        <img src="images/Chat Bot.png" alt="image" />
                        <img src="images/Line Chart 1.png" alt="image" class="-mt-[235px] ml-[310px]"/>
                    </div>
                    <div class="basis-1/3 flex flex-col justify-center align-middle">
                        <div class=" basis-1/3 flex flex-col justify-center align-middle">
                            <div className="w-[270px] self-center">
                            <div class="flex flex-row mb-4 ">
                                <img src="images/spoon.png" alt="icon" />
                                <p class="text-white ml-3 font-semibold text-[20px]">A single source of truth</p>
                            </div>
                            <p class="text-white">When you add work to your Slate calendar we automatically calculate useful insights</p>
                            </div>
                        </div>
                        <div class=" basis-1/3 flex flex-col justify-center align-middle">
                            <div className="w-[270px] self-center">
                            <div class="flex flex-row mb-4 ">
                                <img src="images/alien.png" alt="icon" />
                                <p class="text-white ml-3 font-semibold text-[20px]">Intuitive interface</p>
                            </div>
                            <p class="text-white">When you add work to your Slate calendar we automatically calculate useful insights</p>
                            </div>
                        </div>
                        <div class=" basis-1/3 flex flex-col justify-center align-middle">
                            <div className="w-[270px] self-center">
                            <div class="flex flex-row mb-4 ">
                                <img src="images/loop.png" alt="icon" />
                                <p class="text-white ml-3 font-semibold text-[20px]">Or with rulers</p>
                            </div>
                            <p class="text-white">When you add work to your Slate calendar we automatically calculate useful insights</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

