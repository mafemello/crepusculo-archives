import WikiLink from "../../article/wikilinks";
import { RecentArticlesProps } from "./types";

export default function RecentArticles({ articles }: RecentArticlesProps) {
    return (
        <ul className="space-y-2">
            {articles.map(article => (
                <li key={article.href}>
                    <WikiLink href={article.href}>
                        {article.title}
                    </WikiLink>
                </li>
            ))}
        </ul>
    );
}