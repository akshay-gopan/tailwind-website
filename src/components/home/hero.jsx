export default function Hero() {
    return (
        <>
        
            <div class="flex flex-col justify-center align-middle mt-5">
                <div class="self-center">
                    <h1 class="pt-[50px] text-[80px] font-medium text-white text-center leading-[88px]">Work at the speed <br />of thought</h1>
                </div>
                <div class="self-center ">
                    <p class=" pt-[40px] text-[20px] font-normal text-center leading-[30px] text-white">Most calendars are designed for teams. Slate is designed for <br /> freelancers who want a simple way to plan their schedule.</p>
                </div>
                <div class=" flex  mt-[100px] self-center text-white gap-9">
                    <button class="py-[10px] px-[30px] text-[17px] font-medium bg-blue-700 ">Try For Free</button>
                    <button class="py-[10px] px-[30px] border border-white">Learn More</button>
                </div>
                <div class="mb-32 self-center" >
                    <img src="images/screens.png" alt="image" class="mt-7 opacity-70" />
                </div>
            </div>
        </>
    );
}

