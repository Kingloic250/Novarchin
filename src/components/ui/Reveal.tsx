import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { easeOut } from '../../lib/motion'
import { parseAccent, plain } from '../../lib/text'

type Props = HTMLMotionProps<'div'> & { delay?: number; y?: number }

export function Reveal({ delay = 0, y = 32, children, ...rest }: Props) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: easeOut, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/**
 * Headline whose words rise into place one after another.
 * Wrap words in *asterisks* to set them in the italic serif accent.
 */
export function WordReveal({
  text,
  className,
  delay = 0,
  animateOnMount = false,
}: {
  text: string
  className?: string
  delay?: number
  animateOnMount?: boolean
}) {
  const reduce = useReducedMotion()
  const words = parseAccent(text)
  const target = { y: '0%', opacity: 1 }

  return (
    <span className={className}>
      <span className="sr-only">{plain(text)}</span>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-top">
          <motion.span
            className={`inline-block ${w.serif ? 'serif-accent pr-[0.04em] text-accent' : ''}`}
            initial={reduce ? false : { y: '105%', opacity: 0 }}
            {...(animateOnMount ? { animate: target } : { whileInView: target, viewport: { once: true } })}
            transition={{ duration: 1, ease: easeOut, delay: delay + i * 0.06 }}
          >
            {w.text}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
