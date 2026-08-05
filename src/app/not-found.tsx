import Link from "next/link";
import { Shell } from "@/components/ui/Section";
import { NAV } from "@/data/site";

export default function NotFound() {
  return (
    <Shell className="py-24">
      <p className="label mb-4">Off course</p>
      <h1 className="text-h1">This page isn&rsquo;t here</h1>
      <p className="text-lede text-ink-2 mt-4 max-w-[52ch]">
        Wrong turn, or something that used to live at this address and doesn&rsquo;t any more. Here
        is everything that does exist:
      </p>
      <ul className="border-rule mt-8 border-t">
        {NAV.map((item) => (
          <li key={item.href} className="border-rule border-b">
            <Link href={item.href} className="group flex flex-col gap-0.5 py-4">
              <span className="font-display text-h3 group-hover:text-accent">{item.label}</span>
              <span className="text-ink-2 text-sm">{item.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
