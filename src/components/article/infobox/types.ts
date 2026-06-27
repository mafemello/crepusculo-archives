import { PropsWithChildren, ReactNode } from "react";

export type InfoboxProps = PropsWithChildren<{
    readonly title: string;
    readonly image?: string;
    readonly imageAlt?: string;
    readonly caption?: ReactNode;
}>;

export type RowProps = {
    readonly label: ReactNode;
    readonly children: ReactNode;
};