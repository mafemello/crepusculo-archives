import Image from "next/image";
import { InfoboxProps, RowProps } from "./types";

function Row({ label, children }: RowProps) {
    return (
        <tr>
            <th className="w-28 border bg-[#eaecf0] p-2 text-left align-top font-semibold">
                {label}
            </th>

            <td className="border p-2">
                {children}
            </td>
        </tr>
    );
}

export default function Infobox({ title, image, imageAlt, caption, children }: InfoboxProps) {
    return (
        <aside className="float-right mb-6 ml-8 w-[320px] border border-[#a2a9b1] bg-[#f8f9fa] text-sm">
            <div className="border-b border-[#a2a9b1] bg-[#eaecf0] px-3 py-2 text-center font-bold">
                {title}
            </div>

            {image && (
                <>
                    <Image
                        src={image}
                        alt={imageAlt ?? title}
                        width={320}
                        height={420}
                        className="w-full"
                    />

                    {caption && (
                        <div className="border-b border-[#eaecf0] px-3 py-2 text-center text-xs text-[#54595d]">
                            {caption}
                        </div>
                    )}
                </>
            )}

            <table className="w-full border-collapse">
                <tbody>{children}</tbody>
            </table>
        </aside>
    );
}

Infobox.Row = Row;