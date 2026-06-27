import { ParagraphProps } from "./types";

export default function Paragraph({ children, className = "" }: ParagraphProps) {
    return (
        <p className={`mb-4 ${className}`}>
            {children}
        </p>
    );
}