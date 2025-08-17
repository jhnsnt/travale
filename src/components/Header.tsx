import Image from "next/image";

export default function Header() {
    return (
        <div className="">
            <Image 
                src="/images/travale-logo-main.svg"
                width={175}
                height={40}
                alt="Logo"
                className="mx-auto block mb-5 w-[140px] md:w-[175px]" 
            />
        </div>
    )
}