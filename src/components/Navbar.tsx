import { LayoutDashboard, Layers, Coins, UsersRound, Utensils, ScrollText } from 'lucide-react';
import NavItem from './NavItem';

export default function Navbar() {
  return (
    <aside className="flex flex-col gap-[6px] border-r-2 border-bg_300 min-w-[200px] min-h-screen bg-bg_100 py-[15px] px-2.5">
      <h1 className="text-[28px] font-semibold pb-5 pl-4">
        Donatello
      </h1>
      <nav className='flex flex-col gap-[6px]'>
        <NavItem link='/' Icon={LayoutDashboard} label='dashboard' />
        <NavItem link='/stock' Icon={Layers} label='stock' />
        <NavItem link='/finanzas' Icon={Coins} label='finanzas' />
        <NavItem link='/proovedores' Icon={UsersRound} label='proovedores' />
        <NavItem link='/menus' Icon={Utensils} label='menus' />
        <NavItem link='/pedidos' Icon={ScrollText} label='pedidos' />
      </nav>
    </aside>
  )
}

