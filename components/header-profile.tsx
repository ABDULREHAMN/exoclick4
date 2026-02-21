"use client"

import { CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HeaderProfile() {
  const profileData = {
    displayName: "Yasir Ali",
    displayUsername: "yasirali003",
    accountType: "Publisher",
    accountStatus: "Verified",
    memberSince: "11 Feb 2026",
    badge: {
      verified: true,
      color: "green",
      label: "Verified Publisher",
    },
    siteInfo: {
      primarySite: "soulcnt.com",
      siteStatus: "Active",
    },
    quickStats: {
      totalEarnings: 341.0,
      totalImpressions: 151596,
      totalClicks: 1239,
      todaysEcpm: 74.0,
    },
  }

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{profileData.displayName}</h1>
                {profileData.badge.verified && (
                  <div className="flex items-center gap-1 px-2.5 py-1 bg-green-50 border border-green-200 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-green-700">{profileData.badge.label}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-600">
                @{profileData.displayUsername} • {profileData.accountType} Account
              </p>
              <p className="text-xs text-gray-500">Member since {profileData.memberSince}</p>
            </div>
          </div>

          {/* Site Info */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Primary Site</p>
            <p className="text-sm font-semibold text-gray-900 mb-1">{profileData.siteInfo.primarySite}</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">{profileData.siteInfo.siteStatus}</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs font-medium text-blue-600 uppercase mb-1">Total Earnings</p>
            <p className="text-xl md:text-2xl font-bold text-blue-900">
              ${profileData.quickStats.totalEarnings.toFixed(2)}
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <p className="text-xs font-medium text-purple-600 uppercase mb-1">Impressions</p>
            <p className="text-xl md:text-2xl font-bold text-purple-900">
              {profileData.quickStats.totalImpressions.toLocaleString()}
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-xs font-medium text-orange-600 uppercase mb-1">Clicks</p>
            <p className="text-xl md:text-2xl font-bold text-orange-900">
              {profileData.quickStats.totalClicks.toLocaleString()}
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-xs font-medium text-green-600 uppercase mb-1">Today's eCPM</p>
            <p className="text-xl md:text-2xl font-bold text-green-900">
              ${profileData.quickStats.todaysEcpm.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
