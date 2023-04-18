'use client'

import { useEffect, useState } from "react";

interface ClinetOnlyProps {
    children: any
}

// resolved hydration error
const ClinetOnly: React.FC<ClinetOnlyProps> = ({children}) => {
    const[hasMounted , sethasMounted ] = useState(false)

    useEffect(() => {
        sethasMounted(true)
    },[])

    if(!hasMounted){
        return null
    }
    return (
        <>
            {children}
        </>
    )
}

export default ClinetOnly;