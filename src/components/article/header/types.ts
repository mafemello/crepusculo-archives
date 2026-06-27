import { ReactNode } from "react";

export type ArticleHeaderProps = {
    readonly title: string;
    readonly subtitle?: ReactNode;
    readonly disambiguation?: ReactNode;
};