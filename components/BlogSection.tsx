
import React from 'react';
import { Gallery6 } from "@/components/ui/gallery6";

const demoData = {
    heading: "Latest from our Blog",
    demoUrl: "#",
    items: [
        {
            id: "item-1",
            title: "The Future of Online Learning",
            summary:
                "Explore how AI and personalized mentorship are reshaping education.",
            url: "#",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: "item-2",
            title: "Mastering Mathematics with Visuals",
            summary:
                "Why visual learning is the key to understanding complex concepts.",
            url: "#",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: "item-3",
            title: "Science beyond the Textbook",
            summary:
                "Hands-on experiments you can do at home to learn physics.",
            url: "#",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: "item-4",
            title: "Coding for Kids: Where to Start?",
            summary:
                "A guide for parents on introducing programming to young minds.",
            url: "#",
            image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: "item-5",
            title: "Preparing for Board Exams",
            summary:
                "Strategies to manage stress and maximize retention during exams.",
            url: "#",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
        },
    ],
};

const BlogSection: React.FC = () => {
    return <Gallery6 {...demoData} />;
};

export default BlogSection;
