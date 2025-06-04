import { YumeSidebar } from "./YumeSidebar";
import { LauncherContent } from "./LauncherContent";

export const YumeLauncher = () => {
  return (
    <div className="min-h-screen bg-[#141414] flex">
      {/* Outer container with dark border */}
      <div className="flex w-full max-w-[919px] h-[536px] mx-auto my-auto rounded-[14px] border-[5px] border-black/20 bg-[#141414] relative">
        {/* Left Sidebar */}
        <YumeSidebar />

        {/* Main Content */}
        <LauncherContent />
      </div>
    </div>
  );
};
