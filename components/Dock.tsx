"use client";

import { HomeIcon, UserIcon, BriefcaseIcon, MailIcon, CodeIcon } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

// Definición de secciones de navegación
const NAVIGATION_ITEMS = [
    { href: "/", icon: HomeIcon, label: "Inicio", navigate: "inicio" },
    { href: "#sobre-mi", icon: UserIcon, label: "Sobre Mi", navigate: "sobre-mi"  },
    { href: "#habilidades", icon: CodeIcon, label: "Habilidades", navigate: "habilidades"  },
    { href: "#trabajos", icon: BriefcaseIcon, label: "Trabajos", navigate: "trabajos"  },
    { href: "#contacto", icon: MailIcon, label: "Contacto", navigate: "contacto"  },
];

export function SimpleDock() {
    const [isVisible, setIsVisible] = useState(false);
    

    useEffect(() => {
        // Selector para el header - ajusta esto al ID o clase de tu header
        const headerSelector = "header"; // Cambia a tu selector específico (ej: '#header', '.site-header')
        const header = document.querySelector(headerSelector);
        
        if (!header) {
            return;
        }
        
        const checkVisibility = () => {
            const headerRect = header.getBoundingClientRect();
            
            // Si el header está completamente fuera de la vista (arriba), mostrar el dock
            if (headerRect.bottom <= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        
        // Verificar al cargar la página
        checkVisibility();
        
        // Verificar durante el scroll
        window.addEventListener('scroll', checkVisibility);
        
        // Limpiar event listener
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
            isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-16 pointer-events-none'
        }`}>
            <TooltipProvider>
                <Dock direction="middle" className="bg-[#171717]">
                {NAVIGATION_ITEMS.map((item) => (
                    <DockIcon key={item.label}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Link
                            href={item.href}
                            aria-label={item.label}
                            onClick={(e) => handleScroll(e, item.navigate)}
                            className={cn(
                            buttonVariants({ variant: "ghost", size: "icon" }),
                            "size-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary-Normal/10"
                            )}
                        >
                            <item.icon className="size-5" />
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="rounded-full">
                        <p>{item.label}</p>
                        </TooltipContent>
                    </Tooltip>
                    </DockIcon>
                ))}
                </Dock>
            </TooltipProvider>
        </div>
    );
}

export default SimpleDock;