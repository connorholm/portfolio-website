import Image from "next/image";
import { Tag } from "@/components/ui/Chip";
import { ProjectGlyph } from "@/components/work/ProjectGlyph";
import type { Project } from "@/data/work";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="border-rule bg-panel flex flex-col border">
      {project.image ? (
        <div className="border-rule bg-panel-2 relative aspect-[16/10] overflow-hidden border-b">
          <Image
            src={project.image}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        project.icon && (
          <div className="border-rule bg-panel-2 relative aspect-[16/10] overflow-hidden border-b p-6">
            <ProjectGlyph kind={project.icon} />
          </div>
        )
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="label">{project.year}</p>
          <h3 className="text-h3 mt-1">{project.title}</h3>
        </div>

        <p className="text-ink text-sm">{project.outcome}</p>
        <p className="text-ink-2 text-sm">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {(project.source || project.visit) && (
          <div className="border-rule flex flex-wrap gap-4 border-t pt-3">
            {project.visit && (
              <a
                href={project.visit}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-ink font-mono text-[0.66rem] tracking-[0.12em] uppercase hover:underline"
              >
                Visit →
              </a>
            )}
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-3 hover:text-accent font-mono text-[0.66rem] tracking-[0.12em] uppercase"
              >
                Source →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
