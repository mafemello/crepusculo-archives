import { SectionProps } from "./types";

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="mt-8">
            <h2 className="mb-4 border-b border-[#a2a9b1] pb-1 text-2xl font-normal">
                {title}
            </h2>

            {children}
        </section>
    );
}