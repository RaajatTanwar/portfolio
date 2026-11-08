export function SectionHeading({
  eyebrow,
  title,
  note,
  num,
  kanji,
}: {
  eyebrow: string;
  title: string;
  note?: string;
  num: string;
  kanji: string;
}) {
  return (
    <div className="section-heading reveal">
      <div>
        <p className="eyebrow"><span className="eyebrow-num">{num}</span>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
      <span className="section-kanji" aria-hidden="true">{kanji}</span>
    </div>
  );
}
