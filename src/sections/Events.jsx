import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { EVENTS_DATA } from '../data/clubData';
import { Calendar, MapPin, Clock, Tag, ArrowUpRight, Flame, CheckCircle } from 'lucide-react';

export default function Events() {
  const [filter, setFilter] = useState('all');

  const filteredEvents = EVENTS_DATA.filter((e) => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return e.status === 'upcoming';
    if (filter === 'past') return e.status === 'past';
    return true;
  });

  return (
    <section id="events" className="flex flex-col w-full bg-[#0A090F] py-16 px-4 sm:px-6 md:py-24 md:px-12 gap-10 md:gap-14 border-b border-[#232332]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            tag="[07] HACKATHONS & SESSIONS"
            title={"CODING SHOWDOWNS.\nNATIONAL SUMMITS."}
            subtitle="From national-level hackathons and algorithmic duel arenas to hands-on embedded IoT bootcamps, explore our calendar of high-impact events."
          />

          {/* Status & Filter Bar */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start md:self-auto">
            {/* Next Event Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#14141E] border border-[#FF7300]/40 text-[#FF7300] font-mono text-[10px] sm:text-[11px] font-bold tracking-[1px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7300] animate-pulse" />
              <span>NEXT EVENT: YET TO ANNOUNCE</span>
            </div>

            <div className="flex items-center gap-2 p-1 bg-[#14141E] border border-[#232332]">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 font-mono text-[10px] sm:text-[11px] font-bold tracking-[1px] transition-all ${
                  filter === 'all'
                    ? 'bg-[#3DDC84] text-[#0A090F]'
                    : 'text-[#888899] hover:text-white'
                }`}
              >
                [ARCHIVES ({EVENTS_DATA.length})]
              </button>
            </div>
          </div>
        </div>

        {/* Next Event Teaser Announcement Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#14141E]/90 border border-[#FF7300]/30 shadow-[0_0_20px_rgba(255,115,0,0.06)] font-mono text-[11px]">
          <div className="flex items-start sm:items-center gap-3">
            <span className="px-2 py-0.5 bg-[#FF7300] text-black text-[9px] font-bold tracking-wider shrink-0 mt-0.5 sm:mt-0">
              UPCOMING
            </span>
            <div>
              <span className="text-white font-bold">NEXT EVENT: YET TO ANNOUNCE</span>
              <span className="text-[#888899] ml-2 hidden md:inline">— The organizing committee is curating our next flagship summit. Official theme & registration links will drop soon.</span>
            </div>
          </div>
          <span className="text-[10px] text-[#FF7300] tracking-wider shrink-0">
            [STATUS: PLANNING]
          </span>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const isUpcoming = event.status === 'upcoming';

            return (
              <div
                key={event.id}
                className={`pixel-card flex flex-col justify-between overflow-hidden group ${
                  isUpcoming 
                    ? 'border-[#FF7300]/60 shadow-[0_0_20px_rgba(255,115,0,0.1)] hover:border-[#FF7300]' 
                    : 'hover:border-[#3DDC84]'
                }`}
              >
                {/* Event Image Banner */}
                <div className="relative h-44 w-full bg-[#181824] overflow-hidden border-b border-[#232332]">
                  <img
                    src={event.image}
                    alt={event.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-90 group-hover:brightness-100"
                    onError={(e) => {
                      // Fallback gradient if direct banner fails
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A090F] via-transparent to-black/30" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`font-mono text-[9px] font-bold px-2 py-0.5 border ${
                        isUpcoming
                          ? 'bg-[#FF7300] text-white border-[#FF7300]'
                          : 'bg-[#111118]/90 text-[#3DDC84] border-[#3DDC84]/40'
                      }`}
                    >
                      {isUpcoming ? '● ' + event.badge : '✓ ' + event.badge}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="font-mono text-[9px] bg-black/80 text-white px-2 py-0.5 border border-[#333]">
                      {event.price}
                    </span>
                  </div>
                </div>

                {/* Event Details Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-grotesk text-[19px] font-bold text-white group-hover:text-[#3DDC84] transition-colors mb-2">
                      {event.name}
                    </h3>

                    {/* Metadata: Date, Time, Venue */}
                    <div className="space-y-1.5 mb-4 text-[11px] font-mono text-[#888899]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#3DDC84] shrink-0" />
                        <span className="text-[#F5F5F0]">{event.date}</span>
                        <span>•</span>
                        <Clock className="w-3.5 h-3.5 text-[#888899] shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="font-sans text-[13px] text-[#A1A1AA] leading-relaxed mb-4 line-clamp-3">
                      {event.description}
                    </p>
                  </div>

                  {/* Tags & Action */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {event.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[9px] px-2 py-0.5 bg-[#14141E] text-[#888899] border border-[#232332]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#232332] flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#888899]">
                        {isUpcoming ? 'SLOTS LIMITED' : 'COMPLETED'}
                      </span>
                      {isUpcoming ? (
                        <a
                          href="#apply"
                          className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#FF7300] hover:text-white transition-colors"
                        >
                          <span>REGISTER NOW</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="font-mono text-[10px] text-[#3DDC84] flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          ARCHIVED
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

