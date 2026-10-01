import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { WhatsAppIcon } from '../ui/Icon'
import { whatsappUrl } from '../../content/site'
import { easeOut } from '../../lib/motion'

/** Floating WhatsApp chat button; appears once the visitor scrolls past the hero. */
export function WhatsAppButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!whatsappUrl) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Novarchin on WhatsApp (opens in a new tab)"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9, transition: { duration: 0.2 } }}
          transition={{ duration: 0.45, ease: easeOut }}
          className="liquid-glass is-raised group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-14 items-center gap-0 rounded-full pl-[15px] pr-[15px] text-ink md:right-6 md:bottom-6"
        >
          <span className="grid size-[26px] place-items-center text-[#25D366]">
            <WhatsAppIcon className="size-[26px]" />
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-[14px] font-medium opacity-0 transition-all duration-500 ease-out-expo group-hover:ml-2.5 group-hover:max-w-[10rem] group-hover:opacity-100 group-focus-visible:ml-2.5 group-focus-visible:max-w-[10rem] group-focus-visible:opacity-100">
            Chat on WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
