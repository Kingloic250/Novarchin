import { Button } from '../components/ui/Button'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFoundPage() {
  usePageTitle('Page not found')
  return (
    <section className="container-x grid min-h-[80svh] place-items-center pt-14 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="headline mt-5 text-[48px] md:text-[80px]">This page <span className="serif-accent text-accent">doesn't</span> exist.</h1>
        <p className="mt-4 text-[19px] text-ink-2">The link may be broken or the page may have moved.</p>
        <div className="mt-8">
          <Button to="/">Back to home</Button>
        </div>
      </div>
    </section>
  )
}
