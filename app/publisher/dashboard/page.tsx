"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { HeaderProfile } from "@/components/header-profile"
import { DashboardContent } from "@/components/dashboard-content"

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn !== "true") {
      router.push("/login")
    }
  }, [router])

  return (
    <>
      <HeaderProfile />
      <DashboardContent />
    </>
  )
}
