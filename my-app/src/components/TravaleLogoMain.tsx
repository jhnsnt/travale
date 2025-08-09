import Image from 'next/image';

function Logo(){
    return (
        <Image 
            src="/travale/images/travale-logo-main.svg"
            width={205}
            height={47}
            alt="Logo"
            />
    )
}

export default Logo;