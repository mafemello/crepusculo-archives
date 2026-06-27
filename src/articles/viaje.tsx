import Categories from "../components/article/categories";
import ArticleHeader from "../components/article/header";
import Infobox from "../components/article/infobox";
import Paragraph from "../components/article/paragraph";
import References from "../components/article/references";
import Section from "../components/article/section";
import WikiLink from "../components/article/wikilinks";

export default function GabrielBaltazarPage() {
    return (
        <div className="bg-white text-[#202122] min-h-screen">
            <div className="max-w-6xl mx-auto px-8 py-8">

                <Infobox
                    title="Gabriel Baltazar Domingos"
                    image="/gabriel.jpg"
                    caption="Domingos in his natural habitat (circa 2024)"
                >
                    <Infobox.Row label="Born">
                        25 June 1998
                        <br />
                        Batatais, São Paulo, Brazil
                    </Infobox.Row>

                    <Infobox.Row label="Residence">
                        São Paulo, Brazil
                    </Infobox.Row>

                    <Infobox.Row label="Education">
                        University of São Paulo
                    </Infobox.Row>

                    <Infobox.Row label="Occupation">
                        Product Manager
                    </Infobox.Row>

                    <Infobox.Row label="Also known as">
                        Viaje
                    </Infobox.Row>

                    <Infobox.Row label="Member of">
                        Academia Brasileira de <WikiLink>Art & Artinhas</WikiLink> (ABAA)
                    </Infobox.Row>

                    <Infobox.Row label="Known for">
                        Roller coaster expertise
                        <br />
                        Belunteria
                        <br />
                        Mexican culture
                    </Infobox.Row>

                    <Infobox.Row label="Languages">
                        Portuguese
                        <br />
                        Spanish
                        <br />
                        English
                        <br />
                        Quebequês
                    </Infobox.Row>

                    <Infobox.Row label="Awards">
                        Birthday Boy 2026
                        <br />
                        Wedding Attendance World Record
                    </Infobox.Row>
                </Infobox>

                <ArticleHeader
                    title="Gabriel Baltazar Domingos"
                    disambiguation={
                        <>
                            For other people named Gabriel Domingos, see{" "}
                            <WikiLink href="#">
                                Gabriel Domingos (disambiguation)
                            </WikiLink>.
                        </>
                    }
                />

                <Paragraph>
                    <strong>Gabriel Baltazar Domingos</strong>, commonly known as
                    <strong> Viaje</strong> (born 25 June 1998), is a Brazilian product manager,
                    amateur cinema critic, architect wanna-be, roller coaster expert,
                    watercolor enthusiast, occasional actor, and noted practitioner of
                    <WikiLink> belunteria</WikiLink>.
                </Paragraph>

                <Paragraph>
                    Born in <WikiLink>Batatais, São Paulo</WikiLink>,
                    Domingos graduated with a bachelor's degree in
                    <WikiLink> Information Systems</WikiLink> from
                    the <WikiLink>University of São Paulo (USP)</WikiLink>.
                    He is best known for his leadership in student organizations, his
                    extensive network of friendships throughout the world, his expertise in
                    job interviews and career transitions, and his ability to attend a
                    statistically improbable number of weddings each year.
                </Paragraph>


                <Section title="The making of Viaje">
                    <Paragraph>
                        Upon entering the University of São Paulo, Domingos quickly acquired the nickname "Viaje".
                        While its original etymology remains disputed,
                        subsequent events would prove the nickname remarkably prophetic.
                    </Paragraph>

                    <Paragraph>
                        During the academic years, Viaje developed
                        interests in technology, architecture, literature, visual arts and
                        the strategic consumption of beer (and <WikiLink> other stuff</WikiLink>)
                        in social environments.
                    </Paragraph>


                    <Paragraph>
                        Domingos participated in
                        <WikiLink> PET Computação</WikiLink>,
                        contributing to teaching, outreach and academic
                        activities. He later served as president of
                        <WikiLink> SEMCOMP</WikiLink>,
                        where he became known for coordinating large student initiatives and
                        successfully managing groups of highly opinionated computer
                        science students.
                    </Paragraph>


                    <Paragraph>
                        Following graduation, Domingos entered the technology
                        industry and eventually became a <WikiLink> Product Manager </WikiLink>
                        in several tech companies.
                    </Paragraph>

                    <Paragraph>
                        Throughout his career, he gained recognition for an unusual specialization in
                        job interviews and career transitions.
                        Friends and colleagues have noted his ability to navigate hiring processes
                        with a frequency that has led some observers to classify him as a migratory species.
                    </Paragraph>

                    <Paragraph>
                        He also achieved <WikiLink>legal victory in a labor dispute</WikiLink> against a
                        former employer, an accomplishment regarded by some
                        historians as one of the defining victories of the modern
                        era (compensation reportedly remaining pending at the time of publication).
                    </Paragraph>
                </Section>

                <Section title="Período mexicano">
                    <Paragraph>
                        Durante su adolescencia, Domingos participó en un programa de intercambio en México.
                        La experiencia tuvo un impacto duradero en su identidad cultural,
                        sus intereses personales y su manera de ver el mundo.
                    </Paragraph>

                    <Paragraph>
                        Tras regresar a Brasil, alcanzó fluidez en español y desarrolló una
                        profunda admiración por la cultura mexicana, incluyendo su historia,
                        gastronomía, tradiciones y expresiones artísticas.
                    </Paragraph>

                    <Paragraph>
                        Diversos estudios han demostrado que puede cambiar del portugués al español
                        en cuestión de segundos, especialmente cuando identifica a
                        cualquier persona procedente de América Latina o cuando desea contar
                        una historia que considera más graciosa en español.
                    </Paragraph>

                    <Paragraph>
                        Amigos cercanos afirman que Domingos mantiene hasta hoy una fuerte conexión emocional
                        con México y que, en determinadas circunstancias, es capaz de hablar español
                        durante horas sin que nadie se lo haya pedido.
                    </Paragraph>
                </Section>

                <Section title="Acting career">
                    <Paragraph>
                        Domingos has occasionally participated in theatrical productions.
                        His most notable performance occurred during a staging of
                        <WikiLink> Shakespeare's Romeo & Juliet</WikiLink>, in which he delivered a
                        <WikiLink> slap </WikiLink> that became one of the
                        most celebrated moments of the theatrical arts.

                    </Paragraph>

                    <figure className="mb-4 max-w-xl"> <img src="/slap.gif" alt="Domingos performing in Romeo & Juliet" className="border border-[#a2a9b1]" /> <figcaption className="mt-2 text-sm text-[#54595d] italic">
                        Domingos delivering the now-famous slap during a performance of Romeo & Juliet (circa 2025). </figcaption> </figure>

                    <Paragraph>
                        Contemporary accounts indicate that audience reaction was overwhelmingly positive.
                    </Paragraph>
                </Section>


                <Section title="Personal life & friendships">
                    <Paragraph>
                        Domingos currently resides on <WikiLink> Bela Cintra St.</WikiLink>, in São Paulo,
                        with his long-term friend <WikiLink> João "Lana" dos Reis</WikiLink>. In a remarkably
                        short period of time, the pair have become central figures in
                        <WikiLink> Cintran folklore </WikiLink> and some of the most important characters
                        in the <WikiLink> Bela Cintra literary canon</WikiLink>.
                        Their adventures have been extensively documented by contemporaries and frequently
                        involve late-night conversations, cultural excursions, questionable decision-making,
                        expeditions to <WikiLink> Bela Paulista </WikiLink> and increasingly dubious
                        after-parties at <WikiLink> Presidenta</WikiLink>.
                        Primary sources suggest that a significant portion of modern Cintran folklore can be
                        traced directly to events involving the pair.
                    </Paragraph>

                    <Paragraph>
                        Prior to this arrangement, he spent a significant period living with
                        <WikiLink> Daniel "Bulu" Sivaldi</WikiLink>. Historians generally regard this era as an
                        important transitional phase in the development of <WikiLink> modern belunteria</WikiLink>.
                        Earlier records reference the prehistoric <WikiLink> PVT period</WikiLink>, a little-known
                        civilization composed of <WikiLink> Paulin "Bigodin"</WikiLink>,
                        Viaje and <WikiLink> Tristão</WikiLink>. Due to limited surviving documentation,
                        much of this era remains the subject of scholarly debate.
                    </Paragraph>

                    <Paragraph>
                        Domingos is currently in a long-term relationship with the famous
                        <WikiLink> Iara</WikiLink>, with whom he forms one of the most widely
                        admired couples within contemporary
                        <WikiLink> Batata studies</WikiLink>.<sup>[12]</sup> See also:{" "}
                        <WikiLink> Festa do Leite de Batatais</WikiLink>.
                    </Paragraph>

                    <Paragraph>
                        Domingos also maintains close friendships with a large number of people distributed
                        across multiple places and social circles and is particularly associated with
                        the "Batatas", a group of lifelong friends originating from Batatais.
                    </Paragraph>

                    <Paragraph> However, historians generally agree that his deepest and most enduring
                        friendships are found among those who attended university alongside him.
                        Together, they shared countless hours of study, several liters of
                        <WikiLink> Corote</WikiLink>, and an apparently infinite number of birthday songs.
                        This group, collectively known as <WikiLink> Crepúsculo</WikiLink>, remains one of the
                        defining institutions of contemporary Domingos scholarship.
                        Members are known for their ability to communicate through references
                        incomprehensible to outsiders and for an apparent inability to exist
                        outside of <WikiLink> amalgamas</WikiLink>.
                        While Domingos has formed meaningful relationships throughout every stage of his life,
                        researchers suggest that the members of Crepúsculo occupy a somewhat
                        more permanent residence within his heart.
                    </Paragraph>
                </Section>


                <Section title="Legacy">
                    <Paragraph>
                        The long-term impact of Domingos remains the subject of ongoing
                        academic debate. While his contributions to roller coaster studies,
                        theatre, architecture appreciation and belunteria are
                        well documented, scholars generally agree that his most significant
                        achievement lies elsewhere.
                    </Paragraph>

                    <Paragraph>
                        Throughout his life, Domingos has demonstrated an unusual ability to
                        create lasting friendships and meaningful communities.
                        Numerous accounts describe him as a person capable of making others
                        feel welcomed, valued and included. Despite regularly having post hangout anxiety,
                        available evidence suggests that most people remember him as one of the reasons
                        those moments became worth remembering in the first place.
                    </Paragraph>

                    <Paragraph>
                        Historians have noted that many of the stories surrounding Domingos are not
                        remarkable because of where they took place, but because of who was present.
                        In this interpretation, the friendships themselves constitute his most enduring work.
                    </Paragraph>

                    <Paragraph className="italic">
                        At this point, this encyclopedia can no longer reasonably claim
                        neutrality.
                        <br />
                        <br />
                        Viaje, valorizo muito nossa amizade
                        e tenho muito carinho por todas as memórias que temos juntos. Adoro fofocar com você,
                        rir até doer a bochecha e depois discutir os últimos episódios do Foro de Teresina.
                        Feliz aniversário! Sua presença é um presente na vida de todo mundo que te conhece ♡
                        <br />
                        <br />

                        DISCURSO DISCURSO DISCURSO
                        RODADA DOS PERDEDOOORESSS RODADA DOS PERDEDOREEEES
                        DERRAMA SENHOR DERRAMA SENHOR DERRAMA SOB ELE O SEU AMOOOOR
                        É MARMELADA É MARMELADA É MARMELADA
                        COM QUEM SERÁ COM QUEM SER'DISCURSOOOO DISCURSOOOO DISCURSOOOOO

                    </Paragraph>
                </Section>

                <Section title="References">
                    <References>
                        <li>Multiple witnesses.</li>
                        <li>It was revealed during a <i>belunt</i> session.</li>
                        <li>Ana Clara sources from Brasília.</li>
                        <li>Crepúsculo oral tradition.</li>
                        <li>Ambar.</li>
                        <li>The <i>Eu beijei a crush e foi de língua™</i> archives.</li>
                        <li><i>Academia Brasileira de Art & Artinhas</i> proceedings.</li>
                    </References>
                </Section>

                <Categories
                    categories={[
                        { name: "1998 births" },
                        { name: "Favourite people" },
                        {
                            name: "University of São Paulo alumni",
                            href: "/article/category/usp-alumni",
                        },
                        { name: "Brazilian belunt pioneers" },
                        { name: "Experts in roller coaster" },
                        { name: "Bffs" },
                    ]}
                />
            </div>
        </div >
    );
}
