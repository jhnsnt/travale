'use client';

import { useState, useEffect  } from 'react';
import styles from "./home-style.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export default function Nav() {
    const pathname = usePathname();
    const [active, setActive] = useState('');

    const navItems = [
        { label: 'Home', icon: '/images/home_black.png', activeIcon: '/images/home_active.png', href: "/home" },
        { label: 'Book', icon: '/images/book_black.png', activeIcon: '/images/book_active.png', href: "/book" },
        { label: 'Create', icon: '/images/create_black.png', activeIcon: '/images/create_active.png', href: "" },
        { label: 'Notification', icon: '/images/notification_black.png', activeIcon: '/images/notification_active.png', href: "" },
    ];
    
    useEffect(() => {
        const current = navItems.find(item => item.href === pathname);
        if (current) setActive(current.label);
    }, [pathname]);

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
                                    className=" items-center m-1 p-2 md:p-3 cursor-pointer rounded md:w-[160px]"
                                >
                                    <Link 
                                        onClick={() => setActive(item.label)}
                                        href={item.href}
                                        className="navItem flex-row md:flex"
                                        >
                                        <Image src={isActive ? item.activeIcon : item.icon}
                                            alt={item.label} 
                                            className="md:mr-3 m-auto md:m-0"
                                            width={22} height={22} />
                                        
                                        <div className="hidden md:block">
                                            <span className={isActive ? `${styles.textActive} text-xs md:text-[16px] font-normal` : 'text-black text-xs md:text-[16px] font-normal'}>{item.label}</span>
                                        </div>
                                    </Link>
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