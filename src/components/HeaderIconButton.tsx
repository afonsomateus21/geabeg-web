import type { HeaderIconButtonProps } from "../types/common"

export const HeaderIconButton = ({ title, children, ...props }: HeaderIconButtonProps) => {
  return (
    <button 
      {...props}
      className="flex gap-2 items-center cursor-pointer"
    >
      <div 
        className="h-6 w-6 p-0 rounded-full flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300"
      >
        {children}
      </div>
      <span className="select-none">{title}</span>
    </button>
  )
}