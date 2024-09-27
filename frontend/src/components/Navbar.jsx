export default function Navbar() {
    return (
        <nav className="bg-violet-800 p-4">
            <div className={"container mx-auto flex justify-between items-center"}>
                <a href={"#"} className={"text-gray-300 hover:text-white"}> Option 1</a>
                <a href={"#"} className={"text-gray-300 hover:text-white"}> Option 2</a>
                <a href={"#"} className={"text-gray-300 hover:text-white"}> Option 3</a>
                <a href={"#"} className={"text-gray-300 hover:text-white"}> Option 4</a>

                <div>
                    <button className="text-gray-300 hover:text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
