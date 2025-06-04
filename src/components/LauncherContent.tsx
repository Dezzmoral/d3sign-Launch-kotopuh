import { Tag, ArrowRight } from "lucide-react";
import { LaunchButton } from "./LaunchButton";
import { Progress } from "@/components/ui/progress";

export const LauncherContent = () => {
  return (
    <div className="absolute left-[200px] top-[3px] w-[720px] h-[533px] rounded-[14px]">
      {/* Main content background */}
      <div className="w-full h-full rounded-[14px] bg-[#0D0D0D]/80 backdrop-blur-[1.5px] relative overflow-hidden">
        {/* Background image area */}
        <div className="absolute left-[19px] top-[19px] w-[681px] h-[316px] rounded-[10px] relative overflow-hidden">
          {/* Game screenshot background - simulated with gradient patterns */}
          <div className="w-full h-full relative">
            {/* Base background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800"></div>

            {/* Pattern overlay to simulate game content */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-8 left-12 w-32 h-24 bg-emerald-600/40 rounded blur-md"></div>
              <div className="absolute top-20 right-16 w-28 h-20 bg-blue-500/30 rounded blur-lg"></div>
              <div className="absolute bottom-16 left-20 w-40 h-16 bg-purple-500/20 rounded blur-sm"></div>
              <div className="absolute bottom-8 right-12 w-24 h-32 bg-orange-500/25 rounded blur-md"></div>
            </div>

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
          </div>

          {/* Overlay with blur effect */}
          <div className="absolute inset-0 rounded-[10px] border border-black/20 bg-[#1C1C1C]/5 backdrop-blur-[6px]"></div>
        </div>

        {/* Update information overlay */}
        <div className="absolute left-[35px] top-[253px] z-10">
          <div className="text-[#999] font-inter text-[15px] font-light mb-1">
            UPDATE
          </div>
          <div className="text-white font-khula text-[25px] font-bold">
            Yume 1.20.1
          </div>
          <div className="text-[#999] font-inter text-[10px] font-light">
            Patch, fixed some bugs in client
          </div>
        </div>

        {/* Date */}
        <div className="absolute left-[95px] top-[253px] text-white font-inter text-[15px] font-light">
          04.06.2025
        </div>

        {/* Bottom section with version info and loading */}
        <div className="absolute left-[19px] top-[373px] w-[681px] h-[69px] rounded-[10px] bg-[#151515] backdrop-blur-[1.5px] flex items-center justify-between px-4">
          {/* Left side - Version info */}
          <div className="flex items-center gap-3">
            {/* Version tag */}
            <div className="flex items-center gap-2 bg-[#191919] backdrop-blur-[1.5px] rounded-lg px-3 py-3 h-[44px]">
              <Tag size={16} color="#D5D5D5" />
              <div className="px-2 py-1 rounded-sm border border-black/20 bg-[#1D1D1D]/80 backdrop-blur-[1.5px]">
                <span className="text-white font-inter text-[15px] font-normal">
                  v1.1.3
                </span>
              </div>
              <span className="text-white font-inter text-xs font-normal">
                Current version
              </span>
            </div>
          </div>

          {/* Center - Loading info */}
          <div className="flex items-center gap-4">
            <span className="text-[#D5D5D5] font-inter text-[17px] font-normal">
              Loading files...
            </span>

            {/* Progress section */}
            <div className="flex items-center gap-3">
              <span className="text-[#D5D5D5] font-inter text-[15px] font-normal">
                53%
              </span>

              {/* Custom progress bar */}
              <div className="relative">
                <div className="w-[159px] h-[5px] rounded-sm bg-[#291C35]"></div>
                <div className="absolute top-0 left-0 w-[79px] h-[5px] rounded-sm bg-gradient-to-r from-[#CB8FFF] to-[#AD4FFF] animate-pulse"></div>
              </div>

              <span className="text-[#919191] font-inter text-[15px] font-normal">
                protect/jvm.dll
              </span>
            </div>
          </div>
        </div>

        {/* Launch button */}
        <LaunchButton />

        {/* Credit */}
        <div className="absolute right-[12px] bottom-[16px] text-[#434343] font-inter text-[8px] font-normal">
          @sk3ddesign
        </div>
      </div>
    </div>
  );
};
