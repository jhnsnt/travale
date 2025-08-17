'use client';

import { useState } from 'react';
import styles from "./home-style.module.css";
import Image from 'next/image';

export default function Nav() {
    const [active, setActive] = useState('Home');

    const navItems = [
        { label: 'Home', icon: '/images/home_black.png', activeIcon: '/images/home_active.png' },
        { label: 'Book', icon: '/images/book_black.png', activeIcon: '/images/book_active.png' },
        { label: 'Create', icon: '/images/create_black.png', activeIcon: '/images/create_active.png' },
        { label: 'Notification', icon: '/images/notification_black.png', activeIcon: '/images/notification_active.png' },
    ];
    
    return (
        <div className="story-wrap">
            <div className="fixed md:top-0 md:left-0 bottom-0 w-full bg-white-500 md:h-full md:w-[215px] flex">
                <ul className="bg-white text-center w-full rounded-full md:rounded-md h-[95%] justify-items-center m-2 md:m-5 shadow-custom p-2 md:p-5 grid grid-cols-5 md:block">
                    <li 
                        className="navItem flex-row hidden md:flex items-center m-1 p-2 md:p-3 cursor-pointer rounded md:w-[160px]">
                        <Image src="/images/dp.jpg" alt="Profile" className="md:mr-3 m-auto md:m-0 rounded-full" width={24} height={24} />  
                        <div className="hidden md:block">
                            <span className="text-xs md:text-[16px]">Profile</span>
                        </div>
                    </li>
                    {navItems.map((item) => {
                        const isActive = active === item.label;
                            return (
                                
                                <li key={item.label}
                                    onClick={() => setActive(item.label)}
                                    className="navItem flex-row md:flex items-center m-1 p-2 md:p-3 cursor-pointer rounded md:w-[160px]"
                                >
                                    <Image src={isActive ? item.activeIcon : item.icon}
                                        alt={item.label} 
                                        className="md:mr-3 m-auto md:m-0"
                                        width={22} height={22} />
                                    
                                    <div className="hidden md:block">
                                        <span className={isActive ? `${styles.textActive} text-xs md:text-[16px]` : 'text-black text-xs md:text-[16px]'}>{item.label}</span>
                                    </div>
                                </li>
                            );
                    })}
                    <li 
                        className="navItem flex-row items-center m-1 p-2 md:p-3 cursor-pointer rounded md:w-[160px] block md:hidden">
                        {/* <span className="dp md:mr-3 m-auto md:m-0"></span> */}
                        <Image src="/images/dp.jpg" alt="Profile" className="md:mr-3 m-auto md:m-0 rounded-full" width={24} height={24} />  
                    </li>
                </ul>
            </div>
        </div>
    )
}