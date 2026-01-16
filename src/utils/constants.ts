export const filters = [
  { id: "lobinho", label: "Lobinho" },
  { id: "escoteiro", label: "Escoteiro" },
  { id: "senior", label: "Senior" },
  { id: "pioneiro", label: "Pioneiro" },
] as const;

export const productPageFilters = [
  { id: "product", label: "Produtos" },
  { id: "donation", label: "Doações" }
] as const;

export const actionModalButtonOptions = [
  { id: "payment", label: "Confirmar pagamento" },
  { id: "exemption", label: "Aplicar isenção" }
] as const;

export const scoutCategories  = [
  { value: "lobinho", label: "Lobinho" },
  { value: "escoteiro", label: "Escoteiro" },
  { value: "senior", label: "Senior" },
  { value: "pioneiro", label: "Pioneiro" },
]

export const paymentCategories  = [
  { value: "pending", label: "Pendente" },
  { value: "paid", label: "Pago" },
  { value: "not_paid", label: "Não pago" },
  { value: "isento", label: "Isento" },
]

export const ufs = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO",
  "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI",
  "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];