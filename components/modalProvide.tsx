"use client"

import { useEffect, useState } from "react";
import ProModal from "./ProModal";


export const ModalProvider = () =>{
    const [isMounted, setisMounted] = useState(false);
    useEffect(() => {
        setisMounted(true);
    }, [])
    
    if(!isMounted){
        return null;
    }

    return (
        <>
        <ProModal></ProModal>
        </>
    );
}