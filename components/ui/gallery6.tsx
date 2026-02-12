
"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export interface GalleryItem {
    id: string;
    title: string;
    summary: string;
    url: string;
    image: string;
}

export interface Gallery6Props {
    heading?: string;
    demoUrl?: string;
    items?: GalleryItem[];
}

const Gallery6 = ({
    heading = "Gallery",
    demoUrl = "https://www.shadcnblocks.com",
    items = [
        {
            id: "item-1",
            title: "Build Modern UIs",
            summary:
                "Create stunning user interfaces with our comprehensive design system.",
            url: "#",
            image: "/images/block/placeholder-dark-1.svg",
        },
        {
            id: "item-2",
            title: "Computer Vision Technology",
            summary:
                "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
            url: "#",
            image: "/images/block/placeholder-dark-1.svg",
        },
        {
            id: "item-3",
            title: "Machine Learning Automation",
            summary:
                "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
            url: "#",
            image: "/images/block/placeholder-dark-1.svg",
        },
        {
            id: "item-4",
            title: "Predictive Analytics",
            summary:
                "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
            url: "#",
            image: "/images/block/placeholder-dark-1.svg",
        },
        {
            id: "item-5",
            title: "Neural Network Architecture",
            summary:
                "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
            url: "#",
            image: "/images/block/placeholder-dark-1.svg",
        },
    ],
}: Gallery6Props) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
                    <div>
                        <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#124029] md:mb-4 md:text-5xl lg:mb-6 font-space">
                            {heading}
                        </h2>
                        <a
                            href={demoUrl}
                            className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg text-[#124029]/80 hover:text-[#124029] transition-colors"
                        >
                            Book a demo
                            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                    <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="bg-white hover:bg-gray-50 border-gray-200 text-[#124029] disabled:opacity-50"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="bg-white hover:bg-gray-50 border-gray-200 text-[#124029] disabled:opacity-50"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>

                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {items.map((item) => (
                            <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <a
                                    href={item.url}
                                    className="group flex flex-col h-full bg-[#E7F3EF]/30 rounded-[24px] overflow-hidden border border-transparent hover:border-[#124029]/10 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110 relative z-10"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-grow p-6">
                                        <div className="mb-3 text-xl font-bold text-[#124029] font-space line-clamp-2">
                                            {item.title}
                                        </div>
                                        <div className="mb-6 text-sm text-[#124029]/70 font-medium line-clamp-3 flex-grow">
                                            {item.summary}
                                        </div>
                                        <div className="flex items-center text-sm font-bold text-[#124029] mt-auto">
                                            Read Article
                                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export { Gallery6 };
