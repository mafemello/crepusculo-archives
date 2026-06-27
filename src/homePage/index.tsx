import React from "react";
import HomeCard from "../components/home/card";
import FeaturedArticle from "../components/home/featuredArticle";
import RecentArticles from "../components/home/recentArticles";
import HomeSearch from "../components/home/search";

export default function MainPage() {
    return (
        <main className="min-h-screen bg-[#f8f9fa] text-[#202122]">
            <div className="mx-auto max-w-6xl p-8">

                <React.Fragment>
                    <h1 className="mb-2 font-serif text-4xl">
                        Crepúsculo Wiki
                    </h1>

                    <p className="mb-8 text-gray-700">
                        A collaborative encyclopedia documenting our history,
                        flip cup championships, favourite moments and
                        questionable decisions.
                    </p>
                </React.Fragment>

                <HomeSearch />

                <div className="mt-10 grid gap-6 md:grid-cols-2">

                    <HomeCard title="Featured article">
                        <FeaturedArticle
                            title="Gabriel Baltazar Domingos"
                            description="One of the most influential figures in modern history."
                            href="/article/viaje"
                        />
                    </HomeCard>

                    <HomeCard title="Recent articles">
                        <RecentArticles
                            articles={[
                                {
                                    title: "Gabriel Baltazar Domingos",
                                    href: "/article/viaje",
                                },
                                {
                                    title: "Flip Cup 2025",
                                    href: "#",
                                },
                                {
                                    title: "The Machistas VS Feministas beef history",
                                    href: "",
                                },
                            ]}
                        />
                    </HomeCard>

                </div>

            </div>
        </main>
    );
}