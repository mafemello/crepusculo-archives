import { PropsWithChildren } from "react";

export default function References({ children }: PropsWithChildren) {
    return (
        <ol className="list-decimal space-y-2 pl-8">
            {children}
        </ol>
    );
}