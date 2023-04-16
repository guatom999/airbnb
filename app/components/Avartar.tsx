'user client '

import Image from "next/image"

const Avartar = () => {
    return (
        <Image
            className="rounded-full"
            height="30"
            width="30"
            alt="Avartar"
            src="/images/placeholder.jpg"
        />
    )
}

export default Avartar