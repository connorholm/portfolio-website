import type { Metadata } from "next";
import { PageHeader, Shell } from "@/components/ui/Section";
import { DESK, OUTSIDE, type UsesGroup } from "@/data/uses";

export const metadata: Metadata = {
  title: "Uses",
  description: "What I work with at a desk, and what I carry on a trail.",
};

function Column({ heading, groups }: { heading: string; groups: readonly UsesGroup[] }) {
  return (
    <div>
      <h2 className="border-rule font-display text-h3 border-b pb-2">{heading}</h2>
      {groups.map((group) => (
        <section key={group.heading} className="mt-7">
          <h3 className="label mb-3">{group.heading}</h3>
          <ul className="border-rule border-t">
            {group.items.map((item) => (
              <li key={item.name} className="border-rule border-b py-3">
                <p className="font-display text-lg">{item.name}</p>
                {item.note && <p className="text-ink-2 text-sm">{item.note}</p>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default function UsesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uses"
        title="Desk and outside"
        lede="Two columns, because that is genuinely how the week splits. Neither list is aspirational — this is what is actually in use. Kit specific to one sport lives on that activity's own page."
      />

      <Shell className="pb-20">
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <Column heading="Desk" groups={DESK} />
          <Column heading="Outside" groups={OUTSIDE} />
        </div>
      </Shell>
    </>
  );
}
