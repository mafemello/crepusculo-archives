import { PropsWithChildren, ReactNode } from "react";

export type HomeCardProps = PropsWithChildren<{
    readonly title: ReactNode;
}>;