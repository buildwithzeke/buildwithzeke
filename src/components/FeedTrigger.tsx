import { CloudCog, MessageSquare } from "lucide-react";

export default function FeedTrigger() {
    return (
        <div className="fixed p-2 right-5 bottom-5 z-50 flex rounded-full border border-[var(--line)] bg-[var(--accent)] p-1 shadow-xl backdrop-blur bg-linear-to-br from-transparent via-[var(--panel)] to-transparent">
            <MessageSquare width={20} height={20} className="text-[var(--muted)] hover:text-[var(--text)] cursor-pointer" />
        </div>
    );
}