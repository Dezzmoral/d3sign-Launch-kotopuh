import { ArrowRight } from "lucide-react";

export const LaunchButton = () => {
  return (
    <button className="absolute left-[460px] top-[469px] w-[248px] h-[44px] rounded-[10px] border border-black/20 bg-gradient-to-r from-[#CB8FFF]/80 to-[#AD4FFF]/80 backdrop-blur-[1.5px] flex items-center justify-center gap-3 hover:from-[#CB8FFF]/90 hover:to-[#AD4FFF]/90 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 group active:scale-[0.98]">
      {/* Launch text */}
      <span className="text-white font-inter text-[15px] font-normal">
        Launch
      </span>

      {/* Arrow icon */}
      <ArrowRight
        size={12}
        color="white"
        strokeWidth={2}
        className="group-hover:translate-x-1 transition-transform duration-200"
      />
    </button>
  );
};
