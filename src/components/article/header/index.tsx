import React from "react";
import { ArticleHeaderProps } from "./types";

export default function ArticleHeader({
    title,
    subtitle = "From Crepúsculo Wiki, the free encyclopedia",
    disambiguation,
}: ArticleHeaderProps) {
    return (
        <React.Fragment>
            <h1 className="border-b border-[#a2a9b1] pb-2 text-4xl font-normal">
                {title}
            </h1>

            <p className="mt-1 mb-4 text-sm text-[#54595d]">
                {subtitle}
            </p>

            {disambiguation && (
                <p className="mb-6 italic text-[#54595d]">
                    {disambiguation}
                </p>
            )}
        </React.Fragment>
    );
}