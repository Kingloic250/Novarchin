import { Reveal, WordReveal } from './Reveal'

/** Section title. Wrap words in *asterisks* for the serif accent. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'center' | 'left'
}) {
  const center = align === 'center'
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <Reveal y={12}>
          <p className="eyebrow mb-5">{eyebrow}</p>
        </Reveal>
      )}
      <h2 className="headline text-[38px] sm:text-[48px] md:text-[60px]">
        <WordReveal text={title} />
      </h2>
      {intro && (
        <Reveal delay={0.15}>
          <p className={`mt-6 text-[17px] leading-[1.6] text-ink-2 md:text-[19px] ${center ? 'mx-auto max-w-xl' : ''}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  )
}
