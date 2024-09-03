import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { AuroraBackground } from "@/Components/ui/aurora-background";
import { motion } from "framer-motion";
import { LampContainer } from "@/Components/ui/lamp";
import { PinContainer } from "@/Components/ui/3d-pin";
import { TypewriterEffect } from "@/Components/ui/typewriter-effect";
import { ContainerScroll } from "@/Components/ui/container-scroll-animation";
import { FloatingDock } from "@/Components/ui/floating-dock";
import { cn } from "../utils/cn";

import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconMessage,
    IconUser,
    IconMountain
} from "@tabler/icons-react";
import { FloatingNav } from "@/Components/ui/floating-navbar";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import { Vortex } from "@/Components/ui/vortex";

const navItems = [
    {
        name: "Home",
        link: "#home",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "About",
        link: "/about",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Contact",
        link: "/contact",
        icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
    },
];


const words = [
    {
        text: "Explore",
    },
    {
        text: "Adventures",
        className: "text-blue-500 dark:text-blue-400",
    },
];

const story = `Our Success Stories`;

const links = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300 " />
        ),
        href: "#",

    },

    {
        title: "Adventures",
        icon: (
            <IconMountain className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#adventures",
    },
    {
        title: "Components",
        icon: (
            <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Aceternity UI",
        icon: (
            <img
                src="https://assets.aceternity.com/logo-dark.png"
                width={20}
                height={20}
                alt="Aceternity Logo"
            />
        ),
        href: "#",
    },
    {
        title: "Changelog",
        icon: (
            <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },

    {
        title: "Twitter",
        icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
];



export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />

            {/* Floating nav  */}
            <div className="relative  w-full">
                <FloatingNav navItems={navItems} />
            </div>

            {/* Aurora bg  */}
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                        Laravel Inertia with Aceternity UI
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        And this, is Aurora background component
                    </div>
                    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                        Dive in
                    </button>
                </motion.div>
            </AuroraBackground>


            {/* Lamp effect  */}
            <div id="lamp">
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 60 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                    >
                        Build lamps <br /> the right way
                    </motion.h1>
                </LampContainer>
            </div>


            {/* 3rd pin cards  */}
            <div id="adventures" className="flex flex-col items-center justify-center gap-2 bg-slate-950 min-h-screen">
                <TypewriterEffect words={words} className="mb-16 mt-7" />

                <div className="flex flex-wrap justify-center gap-10">
                    {/* Card 1 */}
                    <PinContainer title="Miami Beach" href="#">
                        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                Miami Beach
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    With white, sandy beaches, turquoise waters and
                                    an over-the-top cultural scene, Miami Beach
                                    attracts millions of visitors to its
                                    world-famous shores each year.{" "}
                                </span>
                            </div>
                            <div
                                className="flex flex-1 w-full rounded-lg mt-4 h-full"
                                style={{
                                    backgroundImage: 'url("/images/3d-card1.jpg")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "100%",
                                }}
                            />
                        </div>
                    </PinContainer>
                    <PinContainer title="Hawaii Island" href="#">
                        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/3 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                Hawaii Island
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    Hawaii beaches are among the most beautiful and
                                    exotic in the world. We have long stretches of
                                    soft white sand caressed by warm blue water.{" "}
                                </span>
                            </div>
                            <div
                                className="flex flex-1 w-full rounded-lg mt-4 h-full"
                                style={{
                                    backgroundImage: 'url("/images/3d-card2.jpg")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "100%",
                                }}
                            />
                        </div>
                    </PinContainer>
                    <PinContainer title="Paris" href="#">
                        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/3 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                Paris
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    For 130 years, the Eiffel Tower has been a
                                    powerful and distinctive symbol of the city of
                                    Paris, and by extension, of France
                                </span>
                            </div>
                            <div
                                className="flex flex-1 w-full rounded-lg mt-4 h-full"
                                style={{
                                    backgroundImage: 'url("/images/3d-card3.jpg")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "100%",
                                }}
                            />
                        </div>
                    </PinContainer>
                </div>
            </div>


            {/* Scroll animation  */}
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold bg-slate-950 text-white">
                                How our Admin Panel works <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Admin Dashboard
                                </span>
                            </h1>
                        </>
                    }
                >
                    <img
                        src="/images/scroll.jpg"
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>



            {/* Content Card GIF */}
            <div className="bg-slate-950 py-10 px-5">
                <div className="flex justify-center mb-10">
                    <TextGenerateEffect duration={2} filter={false} words={story} className="text-center" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                                "before:bg-[url(https://i.gifer.com/1epR.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.gifer.com/1epR.gif)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Background Overlays
                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    This card is for some special elements, like displaying background gifs on hover only.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                                "before:bg-[url(https://i.gifer.com/1js1.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.gifer.com/1js1.gif)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Background Overlays
                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    This card is for some special elements, like displaying background gifs on hover only.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(https://i.natgeofe.com/n/135b255f-f37f-4b23-b0c3-2f0a4c1aa065/1106.jpg?w=1280&h=961)] bg-cover",
                                "before:bg-[url(https://i.pinimg.com/originals/5e/d6/83/5ed683741f5ba2d9a5cfbd3f849eac80.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.pinimg.com/originals/5e/d6/83/5ed683741f5ba2d9a5cfbd3f849eac80.gif)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Background Overlays
                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    This card is for some special elements, like displaying background gifs on hover only.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover",
                                "before:bg-[url(https://i.gifer.com/7SYx.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.gifer.com/7SYx.gif)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Background Overlays
                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    This card is for some special elements, like displaying background gifs on hover only.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Vortex  */}
            {/* <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden"> */}
            <div className="w-full h-screen mx-auto rounded-md overflow-hidden">

                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={120}
                    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
                >
                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                        The hell is this?
                    </h2>
                    <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                        This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
                        burned and you&apos;ll have a scar.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                            Order now
                        </button>
                        <button className="px-4 py-2  text-white ">Watch trailer</button>
                    </div>
                </Vortex>
            </div>


            {/* Floating dock footer  */}
            <div className="flex items-center justify-center">
                <FloatingDock
                    mobileClassName="translate-y-20"
                    items={links}
                />
            </div>

        </>
    );
}
