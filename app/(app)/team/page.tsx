"use client";

import { useState } from "react";
import { Users, X, Network } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { TeamMemberAvatar } from "@/components/team/team-member-avatar";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const TEAM_MEMBERS = [
  {
    name: "Shikhaa Prabhudesai",
    role: "Team Leader",
    description: "Frontend / UX",
    gender: "Female",
    stream: "COMP",
    academicYear: "BE",
    image: "/shikhaa.png",
  },
  {
    name: "Rushikesh Gaonkar",
    role: "Team Member",
    description: "AI / RAG",
    gender: "Male",
    stream: "COMP",
    academicYear: "BE",
    image: "/rushikesh.png",
  },
  {
    name: "Vedant Joshi",
    role: "Team Member",
    description: "App (Flutter)",
    gender: "Male",
    stream: "COMP",
    academicYear: "BE",
    image: "/vedant.png",
  },
  {
    name: "Shridhar Kamat",
    role: "Team Member",
    description: "Full Stack",
    gender: "Male",
    stream: "COMP",
    academicYear: "BE",
    image: "/shridhar.png",
  },
  {
    name: "Chinmay Gadgil",
    role: "Team Member",
    description: "Backend",
    gender: "Male",
    stream: "COMP",
    academicYear: "BE",
    image: "/chinmay.png",
  },
  {
    name: "Samruddhi Dessai",
    role: "Team Member",
    description: "Research / Domain",
    gender: "Female",
    stream: "COMP",
    academicYear: "BE",
    image: "/samruddhi.png",
  }
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);

  return (
      <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl bg-forest p-10 sm:p-16 mb-12 overflow-hidden flex flex-col items-center text-center shadow-lg border border-forest/20">
          {/* Subtle connected nodes visual in background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-forest to-forest">
            <Network className="size-96 text-white" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-cream/80 mb-5">
              The Team Behind IP-SHAKTI
            </h2>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
              Straw Hats
            </h1>
            <p className="text-sm sm:text-lg text-cream/90 max-w-xl mx-auto font-medium leading-relaxed">
              Engineering a source-grounded AI assistant for Ayurveda IP research. <br className="hidden sm:block" />
              Smart India Hackathon 2026.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMember(member)}
              className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-forest/30 hover:-translate-y-1 transition-all duration-300 text-left group flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-forest/10 to-transparent opacity-50"></div>
              
              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="mb-5 ring-4 ring-white rounded-full shadow-sm bg-white">
                  <TeamMemberAvatar 
                    name={member.name} 
                    src={member.image} 
                    className="size-24 rounded-full border border-warm-border"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-charcoal mb-1 group-hover:text-forest transition-colors">
                  {member.name}
                </h3>
                <p className="text-[10px] font-bold text-forest uppercase tracking-[0.2em] mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-warm-muted font-medium mb-6">
                  {member.description}
                </p>
                
                <div className="mt-auto flex items-center justify-center gap-2 text-[10px] font-bold text-charcoal/70 uppercase tracking-widest w-full border-t border-warm-border/50 pt-4">
                  <span className="bg-cream px-3 py-1.5 rounded-full">{member.stream}</span>
                  <span className="bg-cream px-3 py-1.5 rounded-full">{member.academicYear}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Member Details Drawer/Dialog */}
        <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
          <DialogContent className="sm:max-w-sm p-0 overflow-hidden bg-white border-warm-border rounded-2xl">
            {selectedMember && (
              <div className="flex flex-col relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-forest/20 to-cream"></div>
                
                <div className="absolute top-4 right-4 z-20">
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="bg-white/50 backdrop-blur-sm p-1.5 rounded-full text-charcoal hover:bg-white transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <div className="px-6 pt-12 pb-6 relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 ring-4 ring-white rounded-full shadow-md bg-white">
                    <TeamMemberAvatar 
                      name={selectedMember.name} 
                      src={selectedMember.image} 
                      className="size-28 rounded-full border border-warm-border"
                    />
                  </div>
                  
                  <DialogTitle className="text-xl font-bold text-charcoal mb-1">
                    {selectedMember.name}
                  </DialogTitle>
                  <DialogDescription className="text-[10px] font-bold text-forest uppercase tracking-[0.2em] mb-6">
                    {selectedMember.role}
                  </DialogDescription>
                  
                  <div className="grid grid-cols-2 gap-4 w-full bg-cream/30 p-4 rounded-xl border border-warm-border/50 text-left">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-warm-muted block mb-1">
                        Stream
                      </span>
                      <span className="text-sm font-medium text-charcoal">
                        {selectedMember.stream}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-warm-muted block mb-1">
                        Academic Year
                      </span>
                      <span className="text-sm font-medium text-charcoal">
                        {selectedMember.academicYear}
                      </span>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-warm-border/50 mt-1">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-warm-muted block mb-1">
                        Project Role Focus
                      </span>
                      <span className="text-sm font-medium text-charcoal">
                        {selectedMember.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
        
      </div>
  );
}
