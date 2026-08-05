import type { Metadata } from "next";
import { Tag } from "@/components/ui/Chip";
import { PageHeader, Measure, Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ACTIVE_PROJECTS, ARCHIVED_PROJECTS, EDUCATION, ROLES, SKILLS } from "@/data/work";
import { formatShortMonth } from "@/lib/format";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Machine learning, mobile, and web projects: what they were for, what was hard, and what came of them.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="What I build, and what came of it"
        lede="Mostly machine learning and the engineering around it, with a long detour through mobile. Each of these is here because something actually happened: it shipped, it won something, or it taught me the thing I needed next."
      />

      <Section rail="Roles" note="Where I've worked">
        <h2 className="sr-only">Roles</h2>
        <ol className="border-rule border-t">
          {ROLES.map((role) => (
            <li key={`${role.org}-${role.title}`} className="border-rule border-b py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-h3">
                  {role.title}
                  <span className="text-ink-3"> · {role.org}</span>
                </h3>
                <p className="tabular text-ink-3 font-mono text-[0.66rem] tracking-[0.1em] uppercase">
                  {formatShortMonth(`${role.start}-01`)} —{" "}
                  {role.end ? formatShortMonth(`${role.end}-01`) : "present"} · {role.location}
                </p>
              </div>
              <p className="text-ink-2 mt-2 max-w-[62ch]">{role.summary}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {role.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {role.href && (
                <a
                  href={role.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-ink mt-3 inline-block font-mono text-[0.66rem] tracking-[0.12em] uppercase hover:underline"
                >
                  Visit →
                </a>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section rail="Projects" note="The built things">
        <h2 className="text-h2">Projects</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {ACTIVE_PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 2} />
          ))}
        </div>

        {ARCHIVED_PROJECTS.length > 0 && (
          <details className="border-rule bg-panel mt-10 border">
            <summary className="text-ink-3 hover:text-accent cursor-pointer px-4 py-3 font-mono text-[0.68rem] tracking-[0.13em] uppercase">
              Archive: {ARCHIVED_PROJECTS.length} earlier projects
            </summary>
            <ul className="border-rule border-t">
              {ARCHIVED_PROJECTS.map((p) => (
                <li key={p.slug} className="border-rule border-b px-4 py-4 last:border-b-0">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-display text-lg">{p.title}</h3>
                    <span className="tabular text-ink-3 font-mono text-[0.64rem]">{p.year}</span>
                  </div>
                  <p className="text-ink-2 mt-1 max-w-[62ch] text-sm">{p.outcome}</p>
                  {p.source && (
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-3 hover:text-accent mt-1.5 inline-block font-mono text-[0.64rem] tracking-[0.12em] uppercase"
                    >
                      Source →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </details>
        )}
      </Section>

      <Section rail="Tools" note="Grouped by use">
        <h2 className="text-h2">What I work in</h2>
        <Measure className="mt-4">
          <p className="text-ink-2">
            Grouped by the kind of problem rather than listed as a wall of logos. Depth varies: the
            machine learning and backend rows are where I spend most of my time.
          </p>
        </Measure>
        <dl className="border-rule mt-7 border-t">
          {SKILLS.map((group) => (
            <div
              key={group.area}
              className="border-rule grid gap-x-8 gap-y-1 border-b py-4 sm:grid-cols-[11rem_minmax(0,1fr)]"
            >
              <dt className="label pt-1">{group.area}</dt>
              <dd className="text-ink-2">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section rail="Education" note="Two lines">
        <h2 className="text-h2">Education</h2>
        <ul className="border-rule mt-6 border-t">
          {EDUCATION.map((e) => (
            <li
              key={e.school}
              className="border-rule flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b py-4"
            >
              <span className="font-display text-lg">
                {e.degree} <span className="text-ink-3">· {e.school}</span>
              </span>
              <span className="tabular text-ink-3 font-mono text-sm">{e.graduated}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
