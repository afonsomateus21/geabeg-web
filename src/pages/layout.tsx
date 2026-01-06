import { Outlet } from "react-router";
import { CustomSidebar } from "../components/CustomSidebar";
import { HiSearch } from "react-icons/hi";
import { TextInput } from "flowbite-react";
import { searchInputTheme } from "../theme";

export const Layout = () => {
  return (
    <div className="h-screen grid grid-cols-[16rem_1fr] grid-rows-[4rem_1fr] bg-gray-200 overflow-hidden">
      <div className="row-span-2">
        <CustomSidebar />
      </div>

      <header className="flex pr-6 mt-5">
        <TextInput 
          id="email4" 
          type="email" 
          rightIcon={HiSearch} 
          placeholder="Pesquisar..." 
          className="w-full"
          theme={searchInputTheme}
        />
      </header>

      <main className="overflow-y-auto hide-scrollbar flex flex-col">
        <div className="mt-[100px] rounded-tl-2xl bg-white shadow-xxs shadow-black flex-1 w-full overflow-y-auto">
          <Outlet />
        </div>
      </main>

    </div>
  );
}