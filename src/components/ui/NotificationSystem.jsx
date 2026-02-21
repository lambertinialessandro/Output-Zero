import useGameStore from 'app/store/gameStore';
import { AnimatePresence, motion } from 'framer-motion';

function NotificationSystem() {
  const notifications = useGameStore((state) => state.notifications);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-3 pointer-events-none">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            className="relative bg-gray-900 border border-brand-500 p-4 w-80"
          >
            <div className="absolute -top-2 -left-2 w-2 h-2 border-t-2 border-l-2 border-brand-500" />
            <div className="absolute -bottom-2 -right-2 w-2 h-2 border-b-2 border-r-2 border-brand-500" />

            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] font-black text-brand-500 tracking-[0.2em] uppercase">
                [ Achievement Unlocked ]
              </span>
              <div className="w-1.5 h-1.5 bg-brand-500 animate-pulse" />
            </div>
            <h4 className="text-white font-black text-lg tracking-tight leading-none uppercase mb-1">{n.title}</h4>
            <p className="text-[10px] text-zinc-400 font-mono leading-tight">{n.description}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default NotificationSystem;
