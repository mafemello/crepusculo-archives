import Link from "next/link";
import { WikilinksProps } from "./types";

export default function WikiLink({ href = "#", className, children }: WikilinksProps) {
    return (
        <Link
            href={href}
            className={`text-[#0645ad] hover:underline ${className}`}
        >
            {children}
        </Link>
    );
}