// interface StoryProps {
//     Name: string;
//     variant: string;
//     closeFriend: string;
//     noStory: string;
// }

// export default function Story({ Name, variant, closeFriend, noStory }: StoryProps) {
//     return (
//         <li className="">
//             <div className={`${styles.bgPerson} ${styles[closeFriend]} ${styles[noStory]} m-auto flex items-center`}>
//                 <div className={`block m-auto ${styles.person} ${styles[variant]}`}></div>
//             </div>
//             <p className={`${styles.storyName} text-center mt-1`}>{Name}</p>
//         </li>
//     );
// }

import { styleClasses } from "@/config/styleArrays";
import { navItems } from "@/config/names";

export default function Story() {
    return (
        <ul className="story-list grid grid-cols-6 text-center">
            {navItems.map((item) =>{
                return(
                    <li className="" key={item.name}>
                        <div className={`${styleClasses[0]} ${styleClasses[2]}} ${item.noStory} ${item.closeFriend} m-auto flex items-center`}>
                            <div className={`block m-auto  ${item.variant} ${styleClasses[4]}`}></div>
                        </div>
                        <p className="text-center mt-1 text-sm">{item.name}</p>
                    </li>
                )
            })}
            
        </ul>
    )
}