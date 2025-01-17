import { LayoutDashboard } from 'lucide-react';
import TitleBar from "@/components/TitleBar";
import QuarterlyFinance from '@/components/dashboard/QuarterlyFinance';

export default function Dashboard() {
  // para poner bloques uno debajo de otros juan, debes colocar dentro de una caja, 2 cajas y darle flex-col con item-start asi haras un efecto mezclandose. asi evitaras el hueco que deja
  return (
    <section className='px-8 pt-8 flex flex-col gap-16'>
      <TitleBar Icon={LayoutDashboard} title='Dashboard' />
      <article className='inline-flex gap-6 flex-wrap items-start'>
        <div className="px-6 py-4 rounded-md border-2 border-bg_200">
          <p className="text-lg font-semibold">NAME RESTAURANT</p>
        </div>
        <QuarterlyFinance />
      </article>
    </section>
  );
}
