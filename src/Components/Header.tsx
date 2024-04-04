import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <ul>
                    <li>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
                    </li>
                    <li><a href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
                    </li>
                    <li><a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
                    </li>
                </ul>
                
                
                
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log out <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
            <div className="lg:hidden" role="dialog" aria-modal="true">
            </div>
        </header>
    )
}
