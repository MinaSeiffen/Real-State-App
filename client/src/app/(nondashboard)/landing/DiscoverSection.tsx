"use client"

import React from 'react';
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVarient = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

function DiscoverSection() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.8}}
            variants={containerVariants}
            className="py-12 mb-16 bg-white"
        >
            <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                <motion.div
                    variants={itemVarient}
                    className="my-12 text-center"
                    >
                    <h2 className="text-3xl font-semibold leading-tight text-gray-800">
                        Discover
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Find your Dream Rental Property Today
                    </p>
                    <p className="mt-2 max-w-3xl mx-auto text-gray-500">
                        Searching for your dream rental property can be a daunting task, but with our advanced search filters and user reviews, finding the perfect home is easier than ever.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 text-center">
                    {[
                        {
                            imageSrc: "/landing-icon-wand.png",
                            title: "Search for Properties",
                            description: "Use our advanced search filters to find the perfect rental property for you.",
                        },
                        {
                            imageSrc: "/landing-icon-calendar.png",
                            title: "Book Your Rental",
                            description: "Book your rental property with ease and get the keys to your new home in no time.",
                        },
                        {
                            imageSrc: "/landing-icon-heart.png",
                            title: "Enjoy your New Home",
                            description: "Relax and enjoy your new home, knowing that you have found the perfect rental property for you.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVarient}
                        >
                            <DiscoverCard imageSrc={item.imageSrc} title={item.title} description={item.description}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

const DiscoverCard = ({
                         imageSrc,
                         title,
                         description,
                     }: {
    imageSrc: string
    title: string
    description: string
}) => (
    <div className="px-4 py-12 rounded-lg shadow-lg bg-primary-50 md:h-72">
        <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
            <Image
                src={imageSrc}
                width={30}
                height={30}
                className="w-full h-full"
                alt={title}
            />
        </div>
        <h3 className="mt-4 text-xl font-medium text-gray-400">{title}</h3>
        <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
)

export default DiscoverSection;