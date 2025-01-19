'use client'
import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import ModalAddSupply from "./ModalAddSupply";


export default function OptionsSupply({ supplyId }: { supplyId: string }) {
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  console.log(supplyId)
  return (
    <div className='flex items-center gap-4 ml-4'>
      <span className="p-3 rounded-full cursor-pointer hover:bg-primary_200" onClick={()=>setModalUpdate(true)}>
        <FaEdit className="text-lg text-white" />
      </span>
      <span className="p-3 rounded-full cursor-pointer hover:bg-primary_200">
        <FaRegTrashAlt className="text-lg text-white" />
      </span>
      {modalUpdate && <ModalAddSupply action="editar" onClick={()=>setModalUpdate(false)}/>}
    </div>
  )
}
