export type RecentArticle = {
    title: string;
    href: string;
};

export type RecentArticlesProps = {
    articles: RecentArticle[];
};