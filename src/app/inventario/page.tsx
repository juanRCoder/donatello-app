import FilterActions from '@/components/inventario/FilterActions'
import TitleBar from '@/components/TitleBar'
import { Layers } from 'lucide-react'
import React from 'react'

export default function InventarioPage() {
  return (
    <section className='px-8 pt-8 flex flex-col gap-16'>
      <TitleBar Icon={Layers} title='Inventario'/>     
      <article>
        <FilterActions />
        <p className='py-4 text-sm font-light text-cst_white/50'>Seleccionar el insumo para habilitar botones de “editart” o “eliminar”.</p>
      </article>
    </section>
  )
}
