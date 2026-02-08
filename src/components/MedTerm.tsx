interface MedTermProps {
  term: string
  children?: React.ReactNode
}

/**
 * Wraps medical terms in a clickable link to Wiktionary.
 * Usage: <MedTerm term="Osteoporose" /> or <MedTerm term="Osteoporose">custom text</MedTerm>
 */
export default function MedTerm({ term, children }: MedTermProps) {
  const url = `https://de.wiktionary.org/wiki/${encodeURIComponent(term)}`
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="med-term"
      title={`${term} im Wörterbuch nachschlagen`}
    >
      {children || term}
    </a>
  )
}
