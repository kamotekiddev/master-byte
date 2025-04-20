import React from "react";
import FounderCard from "./FounderCard";

function OurTeamSection() {
    return (
        <div className="container p-16">
            <h3 className="section-title">Team</h3>
            <section className="grid grid-cols-4 gap-x-4">
                <FounderCard
                    title="Carl Iriez Cabiles"
                    position="Chief Executive Officer & Data Scientist"
                    href=""
                    src="/assets/img/founders/carl.webp"
                />
                <FounderCard
                    title="Jayson Jhem Ventura"
                    position="Co-Founder & Data Scientist"
                    href=""
                    src="/assets/img/founders/jhem.webp"
                />
                <FounderCard
                    title="Joshua Dela Cruz"
                    position="Co-Founder & Software Engineer"
                    href=""
                    src="/assets/img/founders/joshua.webp"
                />
                <FounderCard
                    title="Christian De Los Santos"
                    position="Co-Founder & AI Engineer"
                    href=""
                    src="/assets/img/founders/christian.webp"
                />
            </section>
        </div>
    );
}

export default OurTeamSection;
