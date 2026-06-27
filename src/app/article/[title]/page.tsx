import Viaje from "@/articles/viaje";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        title: string;
    }>;
};

export default async function ArticlePage({ params }: Props) {
    const { title } = await params;

    switch (title) {
        case "viaje":
            return <Viaje />;

        default:
            notFound();
    }
}