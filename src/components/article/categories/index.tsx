import WikiLink from "../wikilinks";
import { CategoriesProps } from "./types";

export default function Categories({ categories }: CategoriesProps) {
    return (
        <div className="mt-12 border border-[#c8ccd1] bg-[#f8f9fa] p-3 text-sm">
            <span className="font-medium">Categories:</span>{" "}

            {categories.map((category, index) => (
                <span key={category.name}>
                    <WikiLink href={category.href}>
                        {category.name}
                    </WikiLink>

                    {index < categories.length - 1 && " · "}
                </span>
            ))}
        </div>
    );
}