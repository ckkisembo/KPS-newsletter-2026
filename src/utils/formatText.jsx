// Turns text containing *italic* and **bold** markers into React elements.
// Example: 'Is this *normal*?' becomes: Is this <em>normal</em>?
export function formatText(text) {
  // The brackets in split() keep the marked pieces, so we can spot them below
  const parts = text.split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('***')) return <strong key={index}><em>{part.slice(3, -3)}</em></strong>;
    if (part.startsWith('**'))  return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*'))   return <em key={index}>{part.slice(1, -1)}</em>;
    return part;
  });
}
