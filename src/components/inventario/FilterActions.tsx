'use client'
import { SearchIcon } from "lucide-react";
import BtnCustom from "../BtnCustom";
import { SlidersHorizontal, Plus } from 'lucide-react';
import { useState } from "react";
import ModalAddSupply from "./ModalAddSupply";

export default function FilterActions() {
  const [stateActions, setStateActions] = useState({
    showFilters: false,
    addSupply: false
  })
  return (
    <section className="flex flex-wrap justify-between gap-5">
      {/* SearchInput */}
      <div className="w-full lg:w-1/2 flex border-2 border-bg_200 px-4 py-1 rounded-xl">
        <input placeholder='buscar insumo..' className="w-full text-cst_white placeholder:text-cst_white/50 font-light bg-transparent border-none outline-none" />
        <span className="p-2 flex items-center justify-center cursor-pointer ">
          <SearchIcon className="text-cst_white" />
        </span>
      </div>
      {/* Filter and AddButon */}
      <div className="flex items-center gap-5">
        <BtnCustom type="button" variant="contained" color="#E5E7EB" bg="#C2402A" px="16px" py="8px" gap="12px">
          <SlidersHorizontal />
          <span className="text-medium text-base">Filtros</span>
        </BtnCustom>
        <BtnCustom type="button" variant="contained" color="#E5E7EB" bg="#C2402A" px="16px" py="8px" gap="8px" 
          onClick={() => setStateActions(state => ({...state, addSupply: true }))}
        >
          <Plus />
          <span className="text-medium text-base">Agregar</span>
        </BtnCustom>
      </div>
      {stateActions.addSupply && <ModalAddSupply action="agregar" onClick={()=> setStateActions(state => ({...state, addSupply: false}))}/>}
    </section>

  )
}
