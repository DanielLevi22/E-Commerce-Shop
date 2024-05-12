"use client"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactNode } from "react"

const  client  = new QueryClient()
export  function Provider({children} : { children: ReactNode}) {
  return (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  )
}