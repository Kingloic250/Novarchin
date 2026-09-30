import {
  Award, Blocks, BookOpen, Brain, Building, Building2, Cloud, Code2, Compass, Factory, Fingerprint, Globe,
  GraduationCap, Handshake, Heart, Hotel, Infinity as InfinityIcon, Landmark, Layers, Lightbulb, Lock,
  MessageSquare, PenTool, Plug, Scale, Shield, ShoppingBag, Smartphone, Sparkles, Stethoscope, Target, Users,
  Wallet, Zap, type LucideIcon,
} from 'lucide-react'
import type { IconName } from '../../content/site'

const map: Record<IconName, LucideIcon> = {
  code: Code2, building: Building2, smartphone: Smartphone, sparkles: Sparkles, wallet: Wallet, cloud: Cloud,
  plug: Plug, pen: PenTool, shield: Shield, compass: Compass, lightbulb: Lightbulb, award: Award, scale: Scale,
  heart: Heart, users: Users, book: BookOpen, globe: Globe, landmark: Landmark, stethoscope: Stethoscope,
  graduation: GraduationCap, shopping: ShoppingBag, handshake: Handshake, factory: Factory, hotel: Hotel,
  lock: Lock, layers: Layers, zap: Zap, message: MessageSquare, infinity: InfinityIcon, target: Target,
  brain: Brain, blocks: Blocks, city: Building, fingerprint: Fingerprint,
}

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const C = map[name]
  return <C className={className} strokeWidth={1.75} aria-hidden />
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}
