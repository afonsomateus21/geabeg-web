import { Button, HomeIcon, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { FaFolder } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import { api } from "../api";

export const CustomSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    try {
      const response = await api.post(
        "/reports",
        {
          start_date: "2017-01-01",
          end_date: "2035-12-31"
        },
        {
          responseType: "blob"
        }
      );

      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;

      link.download = "relatorio.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Sidebar className="relative !bg-white">
      <SidebarItems className="mt-8">
        <SidebarItemGroup>
          <Button 
            className="
              !bg-black
              [&:hover]:!bg-gray-800
            "
            onClick={() => navigate("/")}
          >
            <HomeIcon className="h-6 w-6" />
          </Button>
          <SidebarItem 
            onClick={() => navigate("/membros")}
            icon={FiUsers}
            active={location.pathname === "/membros"}
          >
            Membros
          </SidebarItem>
          <SidebarItem 
            onClick={() => navigate("/produtos")}
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
            onClick={ handleGenerateReport }
          >
            <FaFolder className="mr-2 h-5 w-5" />
            Gerar Relatório
          </Button>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}