import Image from "next/image";

export default function Header() {
    return (
        <div className="">
            <Image 
                src="/images/padarga-logo.png"
                width={225}
                height={65.3}
                alt="Logo"
                className="block m-auto" 
            />
        </div>
    )
}