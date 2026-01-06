import { Button, HomeIcon, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { FaFolder } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useLocation } from "react-router";

export const CustomSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar className="relative !bg-white">
      <SidebarItems className="mt-8">
        <SidebarItemGroup>
          <Button 
            className="
              !bg-black
              [&:hover]:!bg-gray-800
            "
          >
            <HomeIcon className="h-6 w-6" />
          </Button>
          <SidebarItem 
            href="/escoteiros" 
            icon={FiUsers}
            active={location.pathname === "/escoteiros"}
          >
            Escoteiros
          </SidebarItem>
          <SidebarItem 
            href="/produtos" 
            icon={MdOutlineAttachMoney}
            active={location.pathname === "/produtos"}
          >
            Produtos
          </SidebarItem>
          <Button 
            pill 
            className="
              absolute bottom-10
              !bg-black
              [&:hover]:!bg-gray-800
            "
          >
            <FaFolder className="mr-2 h-5 w-5" />
            Gerar Relatório
          </Button>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}