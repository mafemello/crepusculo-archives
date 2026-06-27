import { ReactNode } from "react";

export type ArticleHeaderProps = {
    title: string;
    subtitle?: ReactNode;
    disambiguation?: ReactNode;
};