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
];

function TeamCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.08 }}
      className="group w-full max-w-[260px] sm:max-w-[280px]"
    >
      <div className="overflow-hidden rounded-2xl border border-linel bg-white shadow-[0_12px_32px_-20px_rgba(10,11,13,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-20px_rgba(59,141,224,0.35)]">
        <div className="relative aspect-[3/3.5] overflow-hidden bg-[#eef2f6]">
          <Image
            src={member.photo}
            alt={`Portrait photo of ${member.name}, ${member.role} at MuxDigitals`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            style={{ objectPosition: member.objectPosition ?? "center top" }}
            sizes="(max-width: 640px) 80vw, 280px"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="px-4 py-3.5 text-center">
          <h3 className="text-[15px] font-semibold tracking-tight text-ink">
            {member.name}
          </h3>
          <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-accent-deep">
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

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-5 sm:mt-10 sm:gap-6">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
