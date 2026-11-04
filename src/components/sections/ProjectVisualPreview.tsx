import React from 'react';
import { Calendar, MapPin, MessageSquare, Activity, ShieldAlert, CheckCircle, Database, Cpu } from 'lucide-react';

interface ProjectVisualPreviewProps {
  projectId: string;
}

export const ProjectVisualPreview: React.FC<ProjectVisualPreviewProps> = ({ projectId }) => {
  switch (projectId) {
    case 'regesuite':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-[#12101e] via-[#17142b] to-[#0d0c15] relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none">
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

          {/* Top simulated browser bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-purple-500/20 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="text-[10px] font-mono text-purple-300/70 ml-2">rege-suite.client.portal/booking</span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
              REGE Catering
            </span>
          </div>

          {/* Center mock interface: Booking calendar & package selector */}
          <div className="relative z-10 grid grid-cols-12 gap-3 my-auto">
            <div className="col-span-7 bg-[#1c1836]/90 border border-purple-500/20 rounded-xl p-3 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-white flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-accent-violet" />
                  November Schedule
                </span>
                <span className="text-[9px] font-mono text-emerald-400">Available</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-[8px] font-mono text-zinc-400 text-center">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                  <span
                    key={d}
                    className={`p-1 rounded ${
                      d === 4
                        ? 'bg-accent-violet text-white font-bold shadow-sm'
                        : d === 6
                        ? 'bg-purple-900/40 text-purple-300'
                        : 'bg-white/[0.02]'
                    }`}
                  >
                    {d + 10}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-5 flex flex-col justify-between gap-2">
              <div className="bg-[#1c1836]/90 border border-purple-500/20 rounded-xl p-2.5">
                <div className="text-[9px] font-mono text-zinc-400">Selected Tier</div>
                <div className="text-xs font-bold text-white">Grand Gala Luxe</div>
                <div className="text-[9px] text-accent-violet-light font-mono mt-0.5">MERN Client Sync</div>
              </div>
              <div className="bg-[#1c1836]/90 border border-purple-500/20 rounded-xl p-2 flex items-center justify-between text-[9px] font-mono text-emerald-400">
                <span>Slots Confirmed</span>
                <CheckCircle className="w-3 h-3 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-zinc-400">
            <span>React Native Mobile Staff App Synced</span>
            <span className="text-accent-violet">MongoDB Cluster Active</span>
          </div>
        </div>
      );

    case 'ebantay':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-[#0c1824] via-[#0f2133] to-[#071018] relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none">
          {/* Subtle GIS map grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />

          {/* Top telemetry bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[10px] font-mono text-cyan-300 font-bold">eBantay GIS Live Radar</span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              AI Incident Triage
            </span>
          </div>

          {/* Center mock interface: Leaflet Map & Incident Cards */}
          <div className="relative z-10 grid grid-cols-12 gap-3 my-auto">
            <div className="col-span-8 bg-[#10273c]/90 border border-cyan-500/25 rounded-xl p-3 relative overflow-hidden shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-white flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-400 animate-bounce" />
                  Barangay Sector 4
                </span>
                <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                  Priority High
                </span>
              </div>
              <div className="text-[9px] text-zinc-300">Hazard: Street Tree Obstruction</div>
              <div className="mt-2 text-[8px] font-mono text-cyan-400/80 flex items-center gap-2">
                <span>Lat: 14.5995° N</span>
                <span>Long: 120.9842° E</span>
              </div>
            </div>

            <div className="col-span-4 bg-[#10273c]/90 border border-cyan-500/25 rounded-xl p-2.5 flex flex-col justify-center text-center">
              <ShieldAlert className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <span className="text-[10px] font-bold text-white">AI Verified</span>
              <span className="text-[8px] font-mono text-zinc-400 mt-0.5">Expo Mobile GPS</span>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-zinc-400">
            <span>Leaflet Mapping Engine</span>
            <span className="text-accent-blue">Real-Time Dispatch Active</span>
          </div>
        </div>
      );

    case 'student-hub':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-[#191024] via-[#211233] to-[#0e0716] relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none">
          {/* Subtle dots */}
          <div className="absolute inset-0 bg-[radial-gradient(#A855F7_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

          {/* Top header */}
          <div className="relative z-10 flex items-center justify-between border-b border-purple-500/20 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span className="text-[10px] font-mono text-purple-200 font-bold">Student Hub • Flutter Mobile</span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Supabase RLS
            </span>
          </div>

          {/* Center mock interface: Mobile task & peer collaboration feed */}
          <div className="relative z-10 grid grid-cols-12 gap-3 my-auto">
            <div className="col-span-7 bg-[#26173b]/90 border border-purple-500/25 rounded-xl p-3 shadow-lg">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-white flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-purple-400" />
                  Algorithms Study Room
                </span>
              </div>
              <div className="text-[9px] text-zinc-300">Exam Prep: Graph Traversals</div>
              <div className="mt-2 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[8px] font-mono text-zinc-400">14 peers collaborating</span>
              </div>
            </div>

            <div className="col-span-5 bg-[#26173b]/90 border border-purple-500/25 rounded-xl p-2.5 flex flex-col justify-between">
              <div className="flex items-center gap-1 text-[9px] font-mono text-zinc-300">
                <MessageSquare className="w-3 h-3 text-purple-300" />
                <span>Notes Sync</span>
              </div>
              <div className="text-[9px] font-mono text-purple-300 mt-1">PostgreSQL Realtime</div>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-zinc-400">
            <span>Material 3 Responsive Flutter</span>
            <span className="text-purple-400">Cross-Platform Sync</span>
          </div>
        </div>
      );

    case 'python-system-info':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-[#0c1c14] via-[#0f241a] to-[#07100b] relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

          {/* Top window title */}
          <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400/80" />
              <span className="text-[10px] font-mono text-emerald-300 font-bold">SysInfo_Diagnostic_v2.exe</span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Windows OS API
            </span>
          </div>

          {/* Center mock interface: CPU & RAM metrics */}
          <div className="relative z-10 grid grid-cols-12 gap-3 my-auto">
            <div className="col-span-6 bg-[#122e20]/90 border border-emerald-500/25 rounded-xl p-2.5 shadow-lg">
              <div className="flex items-center justify-between text-[9px] font-mono text-zinc-300 mb-1">
                <span className="flex items-center gap-1 text-white">
                  <Cpu className="w-3 h-3 text-emerald-400" />
                  CPU Load
                </span>
                <span className="text-emerald-400 font-bold">24%</span>
              </div>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-emerald-400 rounded-full" />
              </div>
              <div className="text-[8px] font-mono text-zinc-400 mt-1.5">8 Cores • 3.8 GHz Base</div>
            </div>

            <div className="col-span-6 bg-[#122e20]/90 border border-emerald-500/25 rounded-xl p-2.5 shadow-lg">
              <div className="flex items-center justify-between text-[9px] font-mono text-zinc-300 mb-1">
                <span className="flex items-center gap-1 text-white">
                  <Database className="w-3 h-3 text-emerald-400" />
                  RAM Usage
                </span>
                <span className="text-emerald-400 font-bold">5.8 / 16 GB</span>
              </div>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-emerald-400 rounded-full" />
              </div>
              <div className="text-[8px] font-mono text-zinc-400 mt-1.5">DDR4 3200MHz Active</div>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-zinc-400">
            <span>Psutil Multi-Thread Telemetry</span>
            <span className="text-emerald-400">Native Windows GUI</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-48 bg-zinc-900 flex items-center justify-center text-zinc-500 font-mono text-xs">
          Interactive Architecture Preview
        </div>
      );
  }
};

