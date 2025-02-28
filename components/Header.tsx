'use client'
import React, { useState } from "react"

export default function NavbarBasic() {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsToggleOpen(false); // Cierra el menú en dispositivos móviles
    };

    return (
    <>
        <header className=" relative z-10 w-full  after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden" id="inicio">
            <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                <nav
                    aria-label="main navigation"
                    className="flex py-10 items-center justify-between font-medium"
                    role="navigation"
                >
                    {/*      <!-- Brand logo --> */}
                    <div className="flex justify-center items-center">
                        <p className="text-base font-extrabold">VictorVillalva</p>
                    </div>
                    {/*      <!-- Mobile trigger --> */}
                    <button
                    className={`relative order-10 block h-10 w-10 self-center lg:hidden
                        ${
                        isToggleOpen
                            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                            : ""
                        }
                    `}
                    onClick={() => setIsToggleOpen(!isToggleOpen)}
                    aria-expanded={isToggleOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                    >
                    <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                        <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                        ></span>
                        <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                        ></span>
                        <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                        ></span>
                    </div>
                    </button>
                    {/*      <!-- Navigation links --> */}
                    <ul
                    role="menubar"
                    aria-label="Select page"
                    className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-[#171717]/95   px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 
                        lg:visible lg:relative lg:top-0 lg:w-auto lg:z-0 lg:flex lg:gap-4 lg:justify-end lg:h-full lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                        isToggleOpen
                        ? "visible opacity-100 backdrop-blur-sm"
                        : "invisible opacity-0"
                    }`}
                    >
                        <li role="none" className="flex items-stretch">
                            <a
                            role="menuitem"
                            aria-haspopup="false"
                            className="flex items-center w-full lg:text-xs text-neutrals-600 gap-2 py-4 transition-colors duration-300 hover:text-primary-Light-Active  focus:outline-none focus-visible:outline-none "
                            href="#sobre-mi"
                            onClick={(e) => handleScroll(e, 'sobre-mi')}
                            >
                            <span>Sobre mi</span>
                            </a>
                        </li>
                        <li role="none" className="flex items-stretch">
                            <a
                            role="menuitem"
                            aria-haspopup="false"
                            className="flex items-center lg:text-xs text-neutrals-600 gap-2 py-4 transition-colors duration-300 hover:text-primary-Light-Active  focus:outline-none focus-visible:outline-none "
                            href="#habilidades"
                            onClick={(e) => handleScroll(e, 'habilidades')}
                            >
                            <span>Habilidades</span>
                            </a>
                        </li>
                        <li role="none" className="flex items-stretch">
                            <a
                            role="menuitem"
                            aria-haspopup="false"
                            className="flex items-center lg:text-xs text-neutrals-600 gap-2 py-4 transition-colors duration-300 hover:text-primary-Light-Active  focus:outline-none focus-visible:outline-none "
                            href="#trabajos"
                            onClick={(e) => handleScroll(e, 'trabajos')}
                            >
                            <span>Trabajos</span>
                            </a>
                        </li>
                        <li role="none" className="flex items-stretch">
                            <a
                            role="menuitem"
                            aria-haspopup="false"
                            className="flex items-center lg:text-xs text-neutrals-600 gap-2 py-4 transition-colors duration-300 hover:text-primary-Light-Active focus:outline-none focus-visible:outline-none "
                            href="#contacto"
                            onClick={(e) => handleScroll(e, 'contacto')}
                            >
                            <span>Contacto</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
    )
}
