export type RecentArticle = {
    readonly title: string;
    readonly href: string;
};

export type RecentArticlesProps = {
    readonly articles: RecentArticle[];
};