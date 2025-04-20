import React from "react";
import ServiceCard from "./ServiceCard";

function AboutSummary() {
    return (
        <div className="container p-16 space-y-20">
            <section>
                <h1 className="section-title">Who We Are</h1>
                <p>
                    We are a team of experienced developers and designers,
                    <br /> creating high quality web and mobile solutions
                </p>
            </section>
            <section>
                <h1 className="section-title">Services</h1>
                <div className="grid gap-x-8 grid-cols-3">
                    <ServiceCard
                        imgUrl="/assets/img/services-icons/web-dev-icon.webp"
                        title="Web Development"
                        description="Custom websites tailored to your business needs."
                    />
                    <ServiceCard
                        imgUrl="/assets/img/services-icons/mobile-dev-icon.webp"
                        title="Mobile App Development"
                        description="Building responsive and reactive-inch mobile applications."
                    />
                    <ServiceCard
                        imgUrl="/assets/img/services-icons/ui-ux-icon.webp"
                        title="UI/UX Design"
                        description="Building responsive and reactive-inch mobile applications."
                    />
                </div>
            </section>
        </div>
    );
}

export default AboutSummary;
