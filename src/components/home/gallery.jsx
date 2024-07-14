function Gallery() {
    return (
        <>
            <div class="flex flex-col justify-center align-middle mt-[150px] ">
                <div class="w-[582px] self-center mb-[40px]">
                    <h2 class="text-center text-[52px] font-normal text-white">GALLERY</h2>
                    <p class=" mt-7 text-center text-[20px] font-normal leading-[30px] text-white">We focus on ergonomics and meeting you where you work. <br />It's only a keystroke away.</p>
                </div>

                <div class="flex flex-row justify-evenly self-center w-[1000px] gap-[25px]">
                    <div class="">
                        <img src="images/img3.png" alt="image" class="rounder rounded-lg" />
                    </div>
                    <div class="">
                        <img src="images/img1.png" alt="image" class="rounder rounded-lg"/>
                    </div>
                    <div class="">
                        <img src="images/img4.png" alt="image" class="rounder rounded-lg"/>
                    </div>
                    <div class="">
                        <img src="images/img5.png" alt="image" class="rounder rounded-lg"/>
                    </div>

                </div>
                <div class="flex flex-row justify-evenly self-center w-[1087px] gap-[25px] mt-10">
                    <div>
                        <img src="images/img2.png" alt="image" class="rounder rounded-lg self-center" />
                    </div>
                    <div >
                        <img src="images/img6.png" alt="image" class="rounder rounded-lg self-center"/>
                    </div>
                    <div>
                        <img src="images/img7.png" alt="image" class="rounder rounded-lg self-center"/>
                    </div>
                    

                </div>

                <button class="w-[160px] h-[52px] mt-[50px] self-center border border-white text-white ">See More</button>
            </div>

        </>
    );
}

export default Gallery;