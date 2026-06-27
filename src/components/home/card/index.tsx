import { HomeCardProps } from "./types";

export default function HomeCard({ title, children }: HomeCardProps) {
    return (
        <section className="border border-[#a2a9b1] bg-white p-5">
            <h2 className="mb-3 text-xl font-semibold">
                {title}
            </h2>

            {children}
        </section>
    );
}