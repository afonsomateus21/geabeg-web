import { createTheme } from "flowbite-react";

export const theme = createTheme({
  sidebar: {
    root: {
      inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-200 px-3 py-4" 
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-black hover:bg-gray-300",
      active: "bg-gray-300 font-semibold",
      icon: {
        base: "h-6 w-6 shrink-0 text-black transition duration-75 group-hover:text-gray-900",
        active: "text-gray-700"
      },
    }
  }
});

export const searchInputTheme = createTheme({
  field: {
    input: {
      base: "!bg-gray-300 focus:!bg-gray-200 !rounded-2xl"
    }
  }
});

export const scoutsTableTheme = createTheme({
  row: {
    hovered: "hover:bg-gray-200",
    striped: "odd:bg-white even:bg-gray-50"
  }
});