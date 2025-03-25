'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from './ui/badge';
import Link from 'next/link';

interface CardProyectosProps {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    badges: string[];
    link:string;
}

export default function CardProyectos({ title, date, description, imageUrl, imageAlt, badges, link }: CardProyectosProps) {
    
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
            <Card className={"bg-[#171717] flex flex-col overflow-hidden border cursor-pointer hover:shadow-lg transition-all duration-300 ease-out h-full"}>
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={500}
                    height={300}
                    className="h-40 w-full overflow-hidden object-cover object-top"
                />
                <CardHeader className='px-2'>
                    <div className='space-y-2'>
                        <CardTitle>{title}</CardTitle>
                        <time className="font-sans text-xs">{date}</time>
                        <p className='text-sm'>{description}</p>
                    </div>
                </CardHeader>
                <CardContent className='flex flex-col px-2'>
                    <div className="mt-2 flex flex-wrap gap-1">
                        {badges.map((badge, index) => (
                            <Badge key={index} className="rounded-[8px]" variant="secondary">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
