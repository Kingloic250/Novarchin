import { useEffect } from 'react'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Novarchin` : "Novarchin — Engineering Africa's Digital Future"
  }, [title])
}
