"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { HeaderProfile } from "@/components/header-profile"
import { DashboardContent } from "@/components/dashboard-content"

export default function DashboardPage() {
  const router = useRouter()
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn !== "true") {
      router.push("/login")
    }

    // Force cache busting on every mount
    if (typeof window !== "undefined") {
      // Prevent browser caching
      sessionStorage.setItem("dashboardRefresh", Date.now().toString())
    }
  }, [router])

  useEffect(() => {
    // Auto-refresh dashboard data every 30 seconds
    const refreshInterval = setInterval(() => {
      setRefreshKey((prev) => prev + 1)
      // Force revalidation of cached data
      if (typeof window !== "undefined") {
        sessionStorage.setItem("dashboardRefresh", Date.now().toString())
      }
    }, 30000) // 30 seconds

    return () => clearInterval(refreshInterval)
  }, [])

  return (
    <>
      <HeaderProfile key={`header-${refreshKey}`} />
      <DashboardContent key={`dashboard-${refreshKey}`} />
    </>
  )
}
