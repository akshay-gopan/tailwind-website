export default function Header() {
    return (
        <>
            <nav>
                <div class="container flex flex-row justify-between mx-auto w-[1097px] h-[100px]">

                    <div class="self-center">
                        <img src="images/logo.png" alt="logo" />
                    </div>
                    <div class="flex self-center">
                        <a href="#" class=" px-3 py-2 text-md  text-gray-300 hover:text-white">Home</a>
                        <a href="#" class=" px-3 py-2 text-md  text-gray-300 hover:text-white">Product</a>
                        <a href="#" class=" px-3 py-2 text-md  text-gray-300 hover:text-white">About</a>
                        <a href="#" class=" px-3 py-2 text-md  text-gray-300 hover:text-white">Content</a>
                    </div>
                    <div class="self-center">
                        <button class="w-[140px] h-[52px] border border-white text-white ">Login</button>
                    </div>
                </div>

            </nav>
        </>
    );
}