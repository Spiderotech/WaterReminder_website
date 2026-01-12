import React from 'react'
import logoImg from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
                <div className="flex justify-center text-teal-600">
                    <a className="flex items-center space-x-2 text-teal-600" href="#">
                        <span className="sr-only">Home</span>
                        <img src={logoImg} alt="Snappy Logo" className="h-8 w-auto" />
                        <span className="text-xl font-bold text-gray-900">DoraDrink</span>
                    </a>
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                   Your personal water reminder app. Stay hydrated, stay healthy.
                </p>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    
                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href="/privacy-policy">  Privacy Policy </a>
                    </li>

                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href="/terms-and-conditions"> Terms & Conditions </a>
                    </li>

                    
                </ul>

                
            </div>
            <div className=" border-t border-gray-200 pt-6  text-center">
                <p className="text-sm text-gray-600 pb-3">
                    Copyright © 2025 DoraDrink: Water Reminder | All rights reserved DoraDrink: Water Reminder
                </p>
            </div>
        </footer>

    )
}

export default Footer
