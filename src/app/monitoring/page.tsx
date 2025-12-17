'use client';

import React from 'react';
import { NavHeader } from '@/components/nav-header';
import { StatusBadge } from '@/components/status-badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { monitoringStatuses, alerts } from '@/lib/mock-data';
import { Camera, Activity, AlertCircle, CheckCircle2, Clock, Shield } from 'lucide-react';

export default function MonitoringPage() {
  const activeCount = monitoringStatuses.filter(s => s.status === 'active').length;
  const warningCount = monitoringStatuses.filter(s => s.status === 'warning').length;

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-10 h-10" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Live Monitoring Center</h1>
              <p className="text-white/90 mt-1">Real-time security surveillance and control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Status Overview */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-success">{activeCount}</span>
                  <span className="text-sm text-muted-foreground">/ {monitoringStatuses.length}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Warnings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-warning">{warningCount}</span>
                  <span className="text-sm text-muted-foreground">require attention</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">2.4</span>
                  <span className="text-sm text-muted-foreground">minutes avg</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  System Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-success">98%</span>
                  <span className="text-sm text-muted-foreground">uptime</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Feed Grid */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Active Surveillance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {monitoringStatuses.map((status) => (
                  <Card key={status.id} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          {status.type === 'camera' && <Camera className="w-5 h-5 text-primary" />}
                          {status.type === 'drone' && <Activity className="w-5 h-5 text-primary" />}
                          {status.type === 'sensor' && <Shield className="w-5 h-5 text-primary" />}
                          <CardTitle className="text-base">{status.location}</CardTitle>
                        </div>
                        <StatusBadge status={status.status} />
                      </div>
                      <CardDescription className="text-xs">
                        Updated {status.lastUpdate}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Mock camera feed visualization */}
                      <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
                        <div className="relative z-10 text-white/60 text-sm font-mono">
                          {status.type === 'camera' && 'LIVE FEED'}
                          {status.type === 'drone' && 'AERIAL VIEW'}
                          {status.type === 'sensor' && 'SENSOR DATA'}
                        </div>
                        {/* Timestamp overlay */}
                        <div className="absolute top-2 left-2 text-white/80 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                          {new Date().toLocaleTimeString()}
                        </div>
                        {/* Recording indicator */}
                        {status.status === 'active' && (
                          <div className="absolute top-2 right-2 flex items-center gap-1 text-white/80 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            REC
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* System Controls */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Controls</CardTitle>
                <CardDescription>Manage your security systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                    <Camera className="w-6 h-6 mb-2 text-primary" />
                    <span className="text-sm font-medium">All Cameras</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                    <Activity className="w-6 h-6 mb-2 text-primary" />
                    <span className="text-sm font-medium">Drones</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                    <Shield className="w-6 h-6 mb-2 text-primary" />
                    <span className="text-sm font-medium">Sensors</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                    <AlertCircle className="w-6 h-6 mb-2 text-primary" />
                    <span className="text-sm font-medium">Alerts</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>Activity notifications and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex gap-3 pb-4 border-b last:border-0 last:pb-0"
                  >
                    <div className="mt-1">
                      {alert.type === 'resolved' && (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      )}
                      {alert.type === 'pending' && (
                        <AlertCircle className="w-5 h-5 text-warning" />
                      )}
                      {alert.type === 'scheduled' && (
                        <Clock className="w-5 h-5 text-info" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm leading-snug">{alert.message}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {alert.timestamp}
                        </span>
                        <Badge
                          variant={
                            alert.severity === 'critical'
                              ? 'destructive'
                              : alert.severity === 'warning'
                              ? 'secondary'
                              : 'outline'
                          }
                          className="text-xs"
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Network Connection</span>
                  <StatusBadge status="active">Online</StatusBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Cloud Storage</span>
                  <StatusBadge status="active">Connected</StatusBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Backup Systems</span>
                  <StatusBadge status="active">Ready</StatusBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Emergency Protocol</span>
                  <StatusBadge status="active">Armed</StatusBadge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6" />
            <span className="font-bold text-xl">Lion Eye Protection Services</span>
          </div>
          <p className="text-white/80 mb-2">Professional Security Solutions</p>
          <p className="text-sm text-white/60">© 2024 Lion Eye Protection Services (PTY) Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
