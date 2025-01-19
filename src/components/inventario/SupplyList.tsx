import OptionsSupply from "./OptionsSupply"

export default function SupplyList() {
  const supplies = [
    { id: 'assgg12345', name: 'patatas', quantity: 100, supplier: 'Caminos E.I.R.L' },
    { id: '1shjfsv584', name: 'zanahorias', quantity: 30, supplier: 'Jordan Softkic' },
    { id: '326hsc1462', name: 'pollo', quantity: 10, supplier: 'mercado' }
  ]

  return (
    <div className="relative overflow-x-auto mt-10">
      <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-lg text-cst_white bg-primary_200/80 border border-cst_white/50">
          <tr >
            <th scope="col" className="w-60 p-3 border border-cst_white/50">
              Insumos
            </th>
            <th scope="col" className="w-36 pr-10 p-3 border border-cst_white/50">
              Cantidad
            </th>
            <th scope="col" className="w-44 pr-10 p-3 border border-cst_white/50">
              Proovedor
            </th>
          </tr>
        </thead>
        <tbody>
          {supplies.map(spl => (
            <tr key={spl.id} className="hover:bg-primary_200/25 transition text-cst_white border border-cst_white/50 relative group">
              <th scope="row" className="border-r border-cst_white/50 p-3 font-medium">{spl.name}</th>
              <th scope="row" className="border-r border-cst_white/50 p-3 font-medium">{spl.quantity}</th>
              <th scope="row" className="p-3 font-medium">{spl.supplier}</th>
              <td className='hidden group-hover:block absolute top-0 lef-0 h-full'>
                <OptionsSupply supplyId={spl.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}
