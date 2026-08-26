const SUFFIX = "Digital Governance Africa";

export function PageMeta({ title, description }: { title: string; description: string }) {
  return (
    <>
      <title>{title === SUFFIX ? title : `${title} | ${SUFFIX}`}</title>
      <meta name="description" content={description} />
    </>
  );
}
