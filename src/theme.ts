import { createTheme } from "flowbite-react";

export const theme = createTheme({
  sidebar: {
    root: {
      inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-white px-3 py-4" 
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-black hover:bg-tertiary/50",
      active: "bg-tertiary font-semibold",
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
      base: "!bg-white focus:!bg-gray-200 !rounded-2xl border-2 !border-secondary"
    }
  }
});

export const scoutsTableTheme = createTheme({
  row: {
    hovered: "hover:bg-gray-100",
    striped: "odd:bg-primary even:bg-primary"
  }
});