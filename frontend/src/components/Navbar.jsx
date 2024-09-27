export default function Navbar() {

    const navBarItems = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

    return (
        <nav className="bg-violet-800 p-4">
            <div className={"container mx-auto flex justify-between items-center"}>
                {navBarItems.map((item, index) => (
                    <a href={"#"} className={"text-gray-300 hover:text-white"} key={index}>{item}</a>
                ))}

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
