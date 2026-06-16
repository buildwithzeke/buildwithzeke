//icons
import { Icon } from "@iconify/react";

//ui data 
import { handles } from "@/constants";
import ContactForm from "../forms/ContactForm";


export default function ContactSection() {
    return (
        <section id="connect" className="grid gap-10 lg:gap-8 border-t border-[var(--line)] px-5 py-12 lg:grid-cols-[.9fr_1.2fr_.9fr] lg:px-12">

            <p className="section-title">Let&apos;s Build Something Amazing Together</p>

            <ContactForm />

            <div className="space-y-4">
                {[{ icon: "solar:letter-bold", value: "ayebidunezekiel@gmail.com" }, { icon: "solar:global-bold", value: "www.buildwithzeke.com" }, { icon: "solar:phone-bold", value: "@buildwithzeke" }].map((item, index) => (
                    <p key={index} className="flex items-center gap-3 font-semibold">
                        <span className="icon-ring h-9 w-9 text-xs"><Icon icon={item.icon} width={20} /></span>
                        {item.value}
                    </p>
                ))}
                <div className="flex flex-wrap gap-3 pt-3 ml-15">
                    {handles.map((item, index) => (
                        <a key={index} href={item.link} target="_blank" className="icon-ring h-9 w-9 text-xs">
                            <Icon icon={item.icon} width={20} />
                        </a>
                    ))}
                </div>
            </div>
        </section >
    );
}