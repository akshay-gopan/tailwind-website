const Card = (props) =>{
    return(
        <>
            <div class="card border border-[#DEDEDE] rounded-lg p-[40px] w-[340px] h-[330px] ">
                <div class="flex flex-row gap-5 mb-[20px]"> 
                <img src={props.img} alt="image" />
                <h5 class="text-[14px] font-medium text-white">{props.name} <br /> {props.designation}</h5>
                </div>
                <p class="text-[14px] font-normal text-white">{props.review}</p>

            </div>
        </>
    )
}

const review = 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'


function Testomonials() {
    return ( 
        <>
        
        <div class="flex flex-col justify-center align-middle mt-[150px] ">
                <div class="w-[582px] self-center mb-[40px]">
                    <h2 class="text-center text-[52px] font-normal text-white">TESTIMONIALS</h2>
                </div>
            <div class="flex flex-row self-center gap-[30px]">
                <div class=" flex flex-col gap-[30px] self-center ">
                <div><Card img='/images/person.png' name='Clarie Bell' designation='Designer' review={review} class="self-center"/></div>
                <div><Card img='/images/person2.png' name='Francisco Lane' designation='Designer' review={review}/></div>           
                </div>
                <div class="flex flex-col gap-[30px] self-center">
                <div><Card img='/images/person3.png' name='Jorge Murphy' designation='Designer' review={review}/></div>
                <div><Card img='/images/person4.png' name='Ralph Fisher' designation='Designer' review={review}/></div>
                </div>
            </div>

            <div class="self-center mt-[100px]">
                <img src="images/banner.png" alt="image" class="w-[1220px]"/>
            </div>

            </div>

            
        </>

     );
}

export default Testomonials;