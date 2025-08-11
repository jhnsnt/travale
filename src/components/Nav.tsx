'use client';

import { useState } from 'react';
import styles from "./home-style.module.css";
import Image from 'next/image';

export default function Nav() {
    const [active, setActive] = useState('Home');

    const navItems = [
        { label: 'Home', icon: '/travale/images/home_black.png', activeIcon: '/travale/images/home_active.png' },
        { label: 'Book', icon: '/travale/images/book_black.png', activeIcon: '/travale/images/book_active.png' },
        { label: 'Search', icon: '/travale/images/search_black.png', activeIcon: '/travale/images/search_active.png' },
        { label: 'Notification', icon: '/travale/images/notification_black.png', activeIcon: '/travale/images/notification_active.png' },
    ];
    
    return (
        <div className="w-full md:w-[20%] border-r-1 p-4 hidden md:block">
            <ul className="">
                <li className="m-1 p-3"><Image alt="travale icon" src="/travale/images/travale-ico.svg" className="mr-4" width={35} height={35} /></li>
                {navItems.map((item) => {
                    const isActive = active === item.label;
                        return (
                            <li key={item.label}
                                onClick={() => setActive(item.label)}
                                className="navItem flex items-center m-1 p-3 cursor-pointer w-full rounded"
                            >
                                <Image src={isActive ? item.activeIcon : item.icon}
                                    alt={item.label} 
                                    className="mr-4"
                                    width={25} height={25} />
                                
                                <span className={isActive ? `${styles.textActive}` : 'text-black'}>{item.label}</span>
                            </li>
                        );
                })}
            </ul>
        </div>
    )
}