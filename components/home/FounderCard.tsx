import React from "react";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
    src: ImageProps["src"];
    title: string;
    position: string;
}

function FounderCard({ src, title, position, ...linkProps }: Props) {
    return (
        <Link {...linkProps} className="relative">
            <Image
                src={src}
                width={275}
                height={275}
                alt={title}
                className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 p-4 text-accent">
                <h3 className="text-sm">{title}</h3>
                <p className="text-xs">{position}</p>
            </div>
        </Link>
    );
}

export default FounderCard;
