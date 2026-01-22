import { Button, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, Modal, Label, TextInput, SidebarLogo } from "flowbite-react";
import { FaFolder, FaHome } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import { api } from "../api";
import { useState } from "react";

export const CustomSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState<string>("2017-01-01");
  const [endDate, setEndDate] = useState<string>("2035-12-31");

  const handleGenerateReport = async () => {
    try {
      const response = await api.post(
        "/reports",
        {
          start_date: startDate,
          end_date: endDate
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
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Sidebar className="relative">
        <SidebarItems className="mt-8">
          <SidebarItemGroup>
            <SidebarItem className="hover:bg-white">
              <div className="h-[120px] w-full flex justify-center items-center">
                <img className="h-full w-[100px]" src="/logo-geabeg.png" />
              </div>
            </SidebarItem>
            <Button 
              className="
                !bg-secondary
                [&:hover]:!bg-secondary/70
              "
              onClick={() => navigate("/")}
            >
              <FaHome className="h-6 w-6" />
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
                !bg-secondary
                [&:hover]:!bg-secondary/70
              "
              onClick={() => setIsModalOpen(true)}
            >
              <FaFolder className="mr-2 h-5 w-5" />
              Gerar Relatório
            </Button>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Gerar Relatório
          </h3>
          <div className="space-y-6">
            <div>
              <Label htmlFor="start-date">Data de Início</Label>
              <TextInput
                id="start-date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="end-date">Data de Fim</Label>
              <TextInput
                id="end-date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-4">
              <Button color="gray" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleGenerateReport}>Gerar</Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}