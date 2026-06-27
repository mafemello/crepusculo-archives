import { PropsWithChildren } from "react";

export type WikilinksProps = PropsWithChildren<{
    readonly href?: string;
    readonly className?: string;
}>;