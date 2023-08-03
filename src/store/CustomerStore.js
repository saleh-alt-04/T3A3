import { create } from "zustand"

export const useCustomerStore = create((set) => ({
  customers: null,
  setCustomer: (customers) => set({ customers }),
}))
