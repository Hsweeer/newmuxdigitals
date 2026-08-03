"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE, Reveal } from "./ui";

type Member = {
  name: string;
  role: string;
  photo: string;
  objectPosition?: string;
};

const TEAM: Member[] = [
  {
    name: "Khalid Shabbir Rao",
    role: "Founder",
    photo: "/team/khalid-shabbir.jpeg",
    objectPosition: "center 12%",
  },
  {
    name: "Sheroz Khalid",
    role: "CEO",
    photo: "/team/sheroz-khalid.jpeg",
    objectPosition: "center 18%",
  },
  {
    name: "Hashir Khalid",
    role: "Co-founder & COO",
    photo: "/team/hashir-khalid.jpg?v=2",
    objectPosition: "center center",
  },
  {
    name: "Atta ul Mohiman",
    role: "CTO",
    photo: "/team/cto.jpg",
    objectPosition: "center 18%",
  },
];

function TeamCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.06 }}
      className="group w-[200px] shrink-0 sm:w-[220px] lg:w-[240px]"
    >
      <div className="overflow-hidden rounded-2xl border border-linel bg-white shadow-[0_10px_28px_-18px_rgba(10,11,13,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(59,141,224,0.3)]">
        <div className="relative aspect-[3/3.4] overflow-hidden bg-[#eef2f6]">
          <Image
            src={member.photo}
            alt={`Portrait photo of ${member.name}, ${member.role} at MuxDigitals`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            style={{ objectPosition: member.objectPosition ?? "center top" }}
            sizes="240px"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="px-3 py-3 text-center">
          <h3 className="truncate text-[14px] font-semibold tracking-tight text-ink sm:text-[15px]">
            {member.name}
          </h3>
          <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-accent-deep">
            {member.role}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative bg-bg pb-2">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep">
              Leadership
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Meet the{" "}
              <span className="font-serif italic">team.</span>
            </h2>
          </Reveal>
        </div>

        {/* One row — scroll/carousel on smaller screens, centered on large */}
        <div className="mt-8 sm:mt-9">
          <div className="-mx-5 flex justify-start gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] snap-x snap-mandatory sm:mx-0 sm:justify-center sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
            {TEAM.map((member, i) => (
              <div key={member.name} className="snap-center">
                <TeamCard member={member} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
