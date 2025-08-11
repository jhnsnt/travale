import Image from 'next/image';

function Logo(){
    return (
        <Image 
            src="/images/travale-logo.svg"
            width={205}
            height={47}
            alt="Logo"
            />
    )
}

export default Logo;