import { FiCheckCircle } from "react-icons/fi";

const QrIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01" />
  </svg>
);

export function TicketMockup() {
  return (
    <div className="w-full h-48 sm:h-56 bg-muted/40 p-4 sm:p-5 flex flex-col justify-between text-foreground font-mono select-none border-b-3 border-foreground">
      {/* Top SAP ID Header */}
      <div className="text-center bg-card py-2 px-3 border-2 border-foreground shadow-[2px_2px_0px_0px_var(--foreground)]">
        <div className="text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase font-bold">
          SAP ID
        </div>
        <div className="text-xl sm:text-2xl font-black tracking-wider text-foreground mt-0.5">
          7000000013
        </div>
      </div>

      {/* Form Collection Details */}
      <div className="space-y-1 text-[11px] sm:text-xs text-muted-foreground mt-2 bg-card p-2.5 border-2 border-foreground/30">
        <div className="text-[10px] font-bold text-foreground uppercase tracking-wider mb-1 flex justify-between items-center">
          <span>Form Collection</span>
          <span className="text-[9px] px-1.5 py-0.2 bg-foreground/10 text-foreground font-black border border-foreground/20">CONFIRMED</span>
        </div>
        <div className="flex justify-between items-center py-0.5 border-b border-foreground/10">
          <span>Date</span>
          <span className="text-foreground font-bold">27/08/26</span>
        </div>
        <div className="flex justify-between items-center py-0.5 border-b border-foreground/10">
          <span>Time Slot</span>
          <span className="text-foreground font-bold">11.00 AM TO 12.00 PM</span>
        </div>
        <div className="flex justify-between items-center py-0.5">
          <span>Deposit Fee</span>
          <span className="text-foreground font-bold">₹2</span>
        </div>
      </div>

      {/* Footer Validity Note */}
      <div className="text-[9px] text-muted-foreground truncate pt-1">
        Note: Valid for three days including the date of issue...
      </div>
    </div>
  );
}

export function MerchIDMockup() {
  return (
    <div className="w-full h-48 sm:h-56 bg-muted/40 p-4 sm:p-5 flex items-center justify-between gap-4 text-foreground font-mono select-none border-b-3 border-foreground overflow-hidden">
      {/* Left Text Block */}
      <div className="flex-1 space-y-2">
        <div className="text-[10px] text-[#ff6633] font-black tracking-widest uppercase">
          FULL-STACK · IDENTITY
        </div>
        <div className="text-lg sm:text-xl font-black text-foreground leading-tight">
          Merch<span className="text-[#ff6633]">ID</span> Engine
        </div>
        <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug line-clamp-3 font-medium">
          Physical merchandise QR codes linked to customizable profiles & 6 animated theme presets.
        </p>
      </div>

      {/* Right Digital Member Card Mockup */}
      <div className="w-36 sm:w-40 h-44 bg-card border-2 border-foreground rounded-xl p-2.5 flex flex-col justify-between shadow-[4px_4px_0px_0px_var(--foreground)] relative shrink-0">
        <div className="flex items-center justify-between text-[8px] text-muted-foreground font-bold border-b border-foreground/15 pb-1">
          <span>MPSTME ACM</span>
          <span className="text-[#ff6633] font-black">MEMBER ID</span>
        </div>

        {/* QR Code and Member Info */}
        <div className="flex flex-col items-center justify-center my-auto py-1 space-y-1">
          <div className="size-10 bg-foreground/10 border-2 border-foreground flex items-center justify-center text-[#ff6633]">
            <QrIcon className="size-6" />
          </div>
          <div className="text-[10px] font-black text-foreground text-center truncate w-full">
            Aliasgar Lakkadghat
          </div>
          <span className="text-[7.5px] bg-[#ff6633] text-black px-1.5 py-0.5 rounded font-black tracking-widest">
            ACM TECH LEAD
          </span>
        </div>

        <div className="flex items-center justify-center gap-1 text-[7.5px] text-emerald-600 dark:text-emerald-400 font-bold border-t border-foreground/10 pt-1">
          <FiCheckCircle className="size-2.5" />
          <span>member.mpstmeacm.com</span>
        </div>
      </div>
    </div>
  );
}

// Alias for backward compatibility
export const PhoneMockup = MerchIDMockup;
