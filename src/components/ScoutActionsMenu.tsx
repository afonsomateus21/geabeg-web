import type { ScoutActionsMenuProps } from "../types/scout"

export const ScoutActionsMenu = ({ 
  onEditMember, 
  onDeleteMember 
}: ScoutActionsMenuProps) => {
  return (
    <div className="
      absolute
      top-0
      right-4
      w-40
      bg-white
      border
      border-gray-200
      rounded-md
      shadow-lg
      z-50
    ">
      <button
        className="w-full px-4 py-2 text-left hover:bg-gray-100"
        onClick={onEditMember}
      >
        Editar
      </button>

      <button
        className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
        onClick={onDeleteMember}
      >
        Excluir
      </button>
    </div>
  )
}