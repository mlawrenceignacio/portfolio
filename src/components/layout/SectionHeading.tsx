interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs uppercase tracking-[0.28em] text-emerald-400/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
