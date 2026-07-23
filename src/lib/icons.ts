import type { LucideIcon } from 'lucide-react'
import {
  Users,
  Stethoscope,
  Trophy,
  ClipboardSignature,
  CodeXml,
  BadgeCheck,
  BriefcaseMedical,
  ShieldCheck,
  FileText,
  Send,
  RefreshCw,
  Target,
  BarChart3,
  TrendingUp,
  UserCheck,
  Clock,
  DollarSign,
  Eye,
  Calendar,
  Lock,
  Globe,
  FlaskConical,
  Activity,
  Heart,
  Brain,
  ShieldAlert,
  Bone,
  HelpCircle,
} from 'lucide-react'

/**
 * Maps Lucide icon name strings (as stored in Payload CMS) to actual
 * React icon components. This allows the admin to specify an icon by name
 * without needing code changes.
 */
const iconMap: Record<string, LucideIcon> = {
  Users,
  Stethoscope,
  Trophy,
  ClipboardSignature,
  CodeXml,
  BadgeCheck,
  BriefcaseMedical,
  ShieldCheck,
  FileText,
  Send,
  RefreshCw,
  Target,
  BarChart3,
  TrendingUp,
  UserCheck,
  Clock,
  DollarSign,
  Eye,
  Calendar,
  Lock,
  Globe,
  FlaskConical,
  Activity,
  Heart,
  Brain,
  ShieldAlert,
  Bone,
  HelpCircle,
}

/**
 * Look up a Lucide icon component by its string name.
 * Falls back to HelpCircle if the name isn't found.
 */
export function getIcon(name: string): LucideIcon {
  return iconMap[name] || HelpCircle
}

export default iconMap
