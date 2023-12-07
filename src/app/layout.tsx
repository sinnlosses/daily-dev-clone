import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { MainLayout } from "@/components/layouts"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TODO: Input Title",
  description: "TODO: Input Description",
}

export default MainLayout
