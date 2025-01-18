import { LucideIcon, CircleUserRound } from 'lucide-react';

type TitleBarProps = {
  Icon: LucideIcon,
  title: string
}

export default function TitleBar({ Icon, title }: TitleBarProps) {
  return (
    <header className='flex items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <Icon className='w-8 h-8 text-primary_200' strokeWidth={2}/>
        <h3 className='text-xl'>{title}</h3>
      </div>
      <div className='flex gap-2 items-center'>
        <h3 className='text-xl'>Juan Ramirez</h3>
        <CircleUserRound className='cursor-pointer w-10 h-10 text-primary_200' strokeWidth={2}/>
      </div>
    </header>
  )
}
