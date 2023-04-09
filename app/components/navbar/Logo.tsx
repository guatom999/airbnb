'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter()

  return (
    <div>
        <Image alt="Logo" 
        className="
            flex 
            flex-row 
            items-center 
            justify-between 
            gap-3 
            md:gap-0
            "
        height="100"
        width="100"
        src="/images/logo.png"
        >
        </Image>
    </div>
  )
}

export default Logo;