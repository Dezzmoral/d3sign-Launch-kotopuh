import { YumeSidebar } from "./YumeSidebar";
import { LauncherContent } from "./LauncherContent";

export const YumeLauncher = () => {
  return (
    <div className="min-h-screen bg-[#141414] flex items-center justify-center p-4">
      {/* Outer container with dark border */}
      <div className="flex w-[919px] h-[536px] rounded-[14px] border-[5px] border-black/20 bg-[#141414] relative overflow-hidden">
        {/* Left Sidebar */}
        <YumeSidebar />

        {/* Main Content */}
        <LauncherContent />
      </div>
    </div>
  );
};
