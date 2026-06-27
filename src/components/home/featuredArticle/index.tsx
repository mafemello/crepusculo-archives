import WikiLink from "../../article/wikilinks";
import { FeaturedArticleProps } from "./types";

export default function FeaturedArticle({ title, description, href }: FeaturedArticleProps) {
    return (
        <>
            <h3 className="text-lg font-medium">
                <WikiLink href={href}>
                    {title}
                </WikiLink>
            </h3>

            <p className="mt-2 text-gray-700">
                {description}
            </p>
        </>
    );
}