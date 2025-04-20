import Image from "next/image";
import React from "react";

interface Props {
    title: string;
    imgUrl: string;
    description: string;
}

function ServiceCard({ title, imgUrl, description }: Props) {
    return (
        <article className="bg-background-secondary rounded-lg p-6 min-h-[300px] flex flex-col justify-center gap-y-6">
            <Image width={64} height={64} src={imgUrl} alt={`${title} icon`} />
            <h3 className="text-2xl">{title}</h3>
            <p>{description}</p>
        </article>
    );
}

export default ServiceCard;
