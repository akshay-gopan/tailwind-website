const List = (props) => {
    return (
        <>
            <div class="flex flex-col text-white self-center text-[16px] gap-4 font-medium">
                <h2 class="mb-10">{props.heading}</h2>
                <div>Home</div>
                <div>Example</div>
                <div>Pricing</div>
                <div>Update</div>
            </div>


        </>
    );
}

function Footer() {
    return (
        <>
            <footer class="flex flex-col justify-center align-middle mt-[100px]">
                <div class="flex flex-row justify-evenly align-middle self-center w-[1031px] mb-[100px]">
                    <div class="basis-1/5 flex flex-col justify-center">
                        <List heading='Fingertipe' />
                    </div>
                    <div class="basis-1/5 flex flex-col justify-center">
                        <List heading='Resource' />
                    </div>
                    <div class="basis-1/5 flex flex-col justify-center">
                        <List heading='About' />
                    </div>
                    <div class="basis-2/5 flex flex-col justify-center">
                        <img src="images/contact.png" alt="image" class="w-[320px] h-[190px] self-center" />
                    </div>
                </div>
            </footer>


        </>
    );
}

export default Footer;