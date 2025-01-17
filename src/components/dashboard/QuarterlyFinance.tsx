import { DollarSign, ArrowUp, ArrowDown } from 'lucide-react';

export default function QuarterlyFinance() {
  const quarterFinances = [
    { type: "ganancias", amount: 17.524 },
    { type: "ventas", amount: 17.524 },
    { type: "gastos", amount: 17.524 }
  ]
  const selectIcon = (icon: string) => icon === "ganancias" ? DollarSign : (icon === "ventas" ? ArrowUp : ArrowDown);
  const selectColor = (type: string) =>  type === 'ganancias' ? 'text-accent_200' : type === 'ventas' ? 'text-cst_green' : 'text-cst_red';
  return (
    <div className="px-6 py-4 rounded-md border-2 border-bg_200 inline-flex justify-start flex-col gap-2">
      <h3 className="text-lg font-semibold">FINANZAS DEL TRIMESTRE</h3>
      <section className='flex flex-wrap gap-4 items-start'>
        {quarterFinances.map(fn => {
          const Icon = selectIcon(fn.type);
          const type = selectColor(fn.type);
          return (<div key={fn.type} className='flex p-3 rounded-md border-2 border-bg_200 gap-2'>
            <Icon className={`h-6 w-5 ${type}`} />
            <p>{fn.type}</p>
            <p className={`${type}`}>$ {fn.amount}</p>
          </div>
          )
        })}
      </section>
    </div>
  )
}
