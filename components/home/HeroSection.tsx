import React from "react";
import Button from "./Button";

function HeroSection() {
    return (
        <div className="min-h-[560px] p-4 grid place-items-center bg-linear-to-r from-background-secondary to-background-primary via-background-primary">
            <section className="space-y-10 text-center">
                <h1 className="bg-linear-to-r from-white to-accent text-6xl text-transparent bg-clip-text leading-tight">
                    We Build Beautiful,
                    <br /> Scalable Digital Solutions
                </h1>
                <div className="space-x-4">
                    <Button color="accent">Let&apos;s Talk</Button>
                    <Button>Our Works</Button>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;
