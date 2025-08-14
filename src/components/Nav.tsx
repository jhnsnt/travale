'use client';

import { useState } from 'react';
import styles from "./home-style.module.css";
import Image from 'next/image';

export default function Nav() {
    const [active, setActive] = useState('Home');

    const navItems = [
        { label: 'Home', icon: '/images/home_black.png', activeIcon: '/images/home_active.png' },
        { label: 'Book', icon: '/images/book_black.png', activeIcon: '/images/book_active.png' },
        { label: 'Messages', icon: '/images/message_black.png', activeIcon: '/images/message_active.png' },
        { label: 'Notification', icon: '/images/notification_black.png', activeIcon: '/images/notification_active.png' },
    ];
    
    return (
        <div className="fixed bottom-0 w-full flex justify-center bg-white-500">
            <ul className="grid grid-cols-4 bg-white text-center pb-5">
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
                                    width={24} height={24} />
                                
                                <span className={isActive ? `${styles.textActive} text-xs md:text-[16px]` : 'text-black text-xs md:text-[16px]'}>{item.label}</span>
                            </li>
                        );
                })}
            </ul>
        </div>
    )
}