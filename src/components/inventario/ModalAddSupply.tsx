import { X } from 'lucide-react';
import InputCustom from '../InputCustom';
import BtnCustom from '../BtnCustom';

export default function ModalAddSupply({ onClick }: { onClick: () => void }) {
  return (
    <aside className='fixed top-0 left-0 min-h-screen w-full bg-black/50 flex justify-center items-start' onClick={onClick}>
      <section className='w-full sm:w-auto min-h-screen sm:min-h-0 sm:mt-10 p-5 bg-[#121212]' onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between items-center sm:min-w-96'>
          <h1 className='text-2xl font-bold'>añadir insumo</h1>
          <X className='h-6 w-6 cursor-pointer' onClick={onClick} />
        </div>
        <form className='flex flex-col gap-4 mt-4'>
          <InputCustom label="nombre" variant='outlined' bordeColor='#292929' labelColor="#E5E7EB88" textColor="#E5E7EB"/>
          <InputCustom label="cantidad" variant='outlined' bordeColor='#292929' labelColor="#E5E7EB88" textColor="#E5E7EB"/>
          <InputCustom label="proovedor" variant='outlined' bordeColor='#292929' labelColor="#E5E7EB88" textColor="#E5E7EB"/>
          <BtnCustom type='submit' bg="#C2402A" variant='contained' px="16px" py="8px">
            <span className="text-medium text-base">agregar insumo</span>
          </BtnCustom>
        </form>
      </section>
    </aside>
  )
}
