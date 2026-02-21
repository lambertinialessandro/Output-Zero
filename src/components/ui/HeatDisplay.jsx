import useGameStore, { selectResourceHeat } from 'app/store/gameStore';
import { format } from 'app/utils/format';
import { useMemo } from 'react';
import AnimatedNumber from './shared/AnimatedNumber';

function HeatAnimatedNumber() {
  const heat = useGameStore(selectResourceHeat);
  const formatted = format(heat);

  return useMemo(() => <AnimatedNumber value={heat} />, [formatted]);
}

function HeatDisplay() {
  return (
    <>
      <div className="relative group flex flex-col items-start px-0 py-5">
        <div className="text-[10px] font-bold text-zinc-500 tracking-[0.4em] uppercase mb-1">
          Thermal Energy Reservoir
        </div>

        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-black text-gray-400 tracking-tighter">
            <HeatAnimatedNumber />
          </span>
          <span className="text-brand-500 font-mono text-sm animate-pulse">[ HEAT_UNITS ]</span>
        </div>
      </div>
    </>
  );
}

export default HeatDisplay;
