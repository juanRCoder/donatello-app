import Link from 'next/link'
import { LucideIcon } from 'lucide-react';

type NavItemProps = {
  Icon: LucideIcon,
  link: string,
  label: string
}
export default function NavItem({Icon, link, label}: NavItemProps) {
  return (
    <Link href={link} className='hover:bg-bg_200 py-2 px-4 cursor-pointer gap-2.5 rounded-md flex transition'>
    <Icon className='w-6 h-6 text-primary_200' strokeWidth={2} />
    <p className="">{label}</p>
  </Link>
  )
}
