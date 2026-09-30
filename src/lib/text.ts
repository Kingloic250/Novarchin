/** Strips the `*accent*` markers so the text reads naturally to screen readers. */
export const plain = (text: string) => text.replace(/\*/g, '')

/** Splits a headline into words, flagging those wrapped in *asterisks* as serif accents. */
export function parseAccent(text: string) {
  let serif = false
  return text.split(' ').map((raw) => {
    if (raw.startsWith('*')) serif = true
    const word = { text: raw.replace(/\*/g, ''), serif }
    if (raw.replace(/[.,!?']+$/, '').endsWith('*')) serif = false
    return word
  })
}
