interface MedTermProps {
  term: string
  children?: React.ReactNode
}

/**
 * Wraps medical terms in a clickable link to Google search.
 * Opens a "Was ist [term] einfach erklärt" search for clear, concise answers.
 * Usage: <MedTerm term="Osteoporose" /> or <MedTerm term="Osteoporose">custom text</MedTerm>
 */
export default function MedTerm({ term, children }: MedTermProps) {
  const query = `Was ist ${term} einfach erklärt`
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="med-term"
      title={`"${term}" bei Google nachschlagen`}
    >
      {children || term}
    </a>
  )
}
