import React from 'react';
import { Calendar, MapPin, MessageSquare, Activity, ShieldCheck, Database, Cpu, Terminal } from 'lucide-react';

interface ProjectVisualPreviewProps {
  projectId: string;
}

export const ProjectVisualPreview: React.FC<ProjectVisualPreviewProps> = ({ projectId }) => {
  switch (projectId) {
    case 'regebook':
    case 'regesuite':
      return (
        <div className="w-full h-44 sm:h-52 bg-zinc-950 relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none">
          {/* Top simulated browser bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-zinc-800/80 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="text-[10px] font-mono text-zinc-400 ml-2">regebook.app/portal</span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
              Catering ERP
            </span>
          </div>

          {/* Center mock interface: Booking calendar & package selector */}
          <div className="relative z-10 grid grid-cols-12 gap-2.5 my-auto">
            <div className="col-span-7 bg-zinc-900/80 border border-zinc-800 rounded-lg p-2.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-medium text-zinc-200 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-zinc-400" />
                  Reservation Schedule
                </span>
                <span className="text-[9px] font-mono text-emerald-400">Available</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-[8px] font-mono text-zinc-400 text-center">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                  <span
                    key={d}
                    className={`py-0.5 rounded ${
                      d === 4
                        ? 'bg-zinc-200 text-zinc-950 font-bold'
                        : d === 6
                        ? 'bg-zinc-800 text-zinc-300'
                        : 'bg-zinc-900/60'
                    }`}
                  >
                    {d + 10}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-5 flex flex-col justify-between gap-2">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2">
                <div className="text-[9px] font-mono text-zinc-400">Selected Tier</div>
                <div className="text-xs font-semibold text-zinc-100">Grand Gala Luxe</div>
                <div className="text-[9px] text-zinc-400 font-mono mt-0.5">MERN Client Sync</div>
              </div>
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-1.5 flex items-center justify-between text-[9px] font-mono text-zinc-300">
                <span>Slots Confirmed</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-zinc-400">
            <span>React Native Mobile Staff Sync</span>
            <span className="text-zinc-300">MongoDB Cluster Active</span>
          </div>
        </div>
      );

    case 'ebantay':
      return (
        <div className="w-full h-44 sm:h-52 bg-zinc-950 relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none">
          {/* Top telemetry bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-zinc-800/80 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-zinc-200 font-semibold">eBantay GIS Radar</span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
              AI Triage Online
            </span>
          </div>

          {/* Center mock interface: Leaflet Map & Incident Cards */}
          <div className="relative z-10 grid grid-cols-12 gap-2.5 my-auto">
            <div className="col-span-8 bg-zinc-900/80 border border-zinc-800 rounded-lg p-2.5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-zinc-200 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  Barangay Sector 4
                </span>
                <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700">
                  Priority 1
                </span>
              </div>
              <div className="text-[9px] text-zinc-300">Municipal Hazard: Road Tree Obstruction</div>
              <div className="mt-1.5 text-[8px] font-mono text-zinc-400 flex items-center gap-2">
                <span>14.5995° N</span>
                <span>120.9842° E</span>
              </div>
            </div>

            <div className="col-span-4 bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 flex flex-col justify-center text-center">
              <ShieldCheck className="w-4 h-4 text-zinc-300 mx-auto mb-1" />
              <span className="text-[10px] font-semibold text-zinc-100">AI Verified</span>
              <span className="text-[8px] font-mono text-zinc-400 mt-0.5">Expo Mobile GPS</span>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-zinc-400">
            <span>Leaflet Mapping Engine</span>
            <span className="text-zinc-300">Live Dispatch Ready</span>
          </div>
        </div>
      );

    case 'student-hub':
      return (
        <div className="w-full h-44 sm:h-52 bg-zinc-950 relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none">
          {/* Top header */}
          <div className="relative z-10 flex items-center justify-between border-b border-zinc-800/80 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
              <span className="text-[10px] font-mono text-zinc-200 font-semibold">Student Hub • Flutter</span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
              Supabase RLS
            </span>
          </div>

          {/* Center mock interface: Mobile task & peer collaboration feed */}
          <div className="relative z-10 grid grid-cols-12 gap-2.5 my-auto">
            <div className="col-span-7 bg-zinc-900/80 border border-zinc-800 rounded-lg p-2.5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold text-zinc-200 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-zinc-400" />
                  Study Session
                </span>
              </div>
              <div className="text-[9px] text-zinc-300">Exam Prep: Algorithms & Data Structures</div>
              <div className="mt-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[8px] font-mono text-zinc-400">14 peers connected</span>
              </div>
            </div>

            <div className="col-span-5 bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 flex flex-col justify-between">
              <div className="flex items-center gap-1 text-[9px] font-mono text-zinc-300">
                <MessageSquare className="w-3 h-3 text-zinc-400" />
                <span>Notes Sync</span>
              </div>
              <div className="text-[9px] font-mono text-zinc-400 mt-1">PostgreSQL Realtime</div>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-zinc-400">
            <span>Material 3 Responsive UI</span>
            <span className="text-zinc-300">Supabase DB</span>
          </div>
        </div>
      );

    case 'python-system-info':
      return (
        <div className="w-full h-44 sm:h-52 bg-zinc-950 relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none">
          {/* Top window title */}
          <div className="relative z-10 flex items-center justify-between border-b border-zinc-800/80 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-zinc-400" />
              <span className="text-[10px] font-mono text-zinc-200 font-semibold">SysInfo_Diagnostic.exe</span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
              Windows OS API
            </span>
          </div>

          {/* Center mock interface: CPU & RAM metrics */}
          <div className="relative z-10 grid grid-cols-12 gap-2.5 my-auto">
            <div className="col-span-6 bg-zinc-900/80 border border-zinc-800 rounded-lg p-2">
              <div className="flex items-center justify-between text-[9px] font-mono text-zinc-300 mb-1">
                <span className="flex items-center gap-1 text-zinc-200">
                  <Cpu className="w-3 h-3 text-zinc-400" />
                  CPU Load
                </span>
                <span className="text-zinc-100 font-bold">24%</span>
              </div>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-zinc-300 rounded-full" />
              </div>
              <div className="text-[8px] font-mono text-zinc-400 mt-1.5">8 Cores • 3.8 GHz</div>
            </div>

            <div className="col-span-6 bg-zinc-900/80 border border-zinc-800 rounded-lg p-2">
              <div className="flex items-center justify-between text-[9px] font-mono text-zinc-300 mb-1">
                <span className="flex items-center gap-1 text-zinc-200">
                  <Database className="w-3 h-3 text-zinc-400" />
                  Memory
                </span>
                <span className="text-zinc-100 font-bold">5.8 GB</span>
              </div>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-zinc-300 rounded-full" />
              </div>
              <div className="text-[8px] font-mono text-zinc-400 mt-1.5">DDR4 Active</div>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-zinc-400">
            <span>Psutil Multi-Thread Telemetry</span>
            <span className="text-zinc-300">Native Windows GUI</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-44 sm:h-52 bg-zinc-950 flex items-center justify-center text-zinc-400 font-mono text-xs">
          <Terminal className="w-4 h-4 mr-2" />
          Interactive Architecture Preview
        </div>
      );
  }
};
