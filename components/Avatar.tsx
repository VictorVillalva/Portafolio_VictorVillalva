import React from "react"
import Image, { StaticImageData } from "next/image"

interface AvatarProps {
    imageUrl:  string | StaticImageData;
    altText: string;
}

export default function Avatar({ imageUrl, altText }: AvatarProps) {
    return (
        <>
        <a
            href="#"
            className="relative inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary-Normal-Hover bg-emerald-500 text-lg text-white"
        >
            <Image src={imageUrl} alt={altText} layout="fill" objectFit="cover" className="rounded-full" />
        </a>
        </>
    )
}