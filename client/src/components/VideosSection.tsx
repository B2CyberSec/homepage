/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Videos: Three explanation videos in a dark editorial layout.
 * Sarcastic intros for each video.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play } from "lucide-react";
import { useState } from "react";

const VIDEO1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/video1_nis2_mit_untertitel_3d3a8711.mp4";
const VIDEO2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/video2_experte_48h_mit_untertitel_afa636f1.mp4";
const VIDEO3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/video3_security_quick_check_mit_untertitel_53a484ec.mp4";

const videos = [
  {
    src: VIDEO1,
    title: "NIS-2: Was Sie wissen müssen",
    subtitle: "In unter 3 Minuten erklärt. Weil Sie keine Zeit haben, 200 Seiten EU-Richtlinie zu lesen.",
    tag: "NIS-2 Compliance",
  },
  {
    src: VIDEO2,
    title: "Experte in 48 Stunden",
    subtitle: "Sie brauchen einen Security-Experten? Gestern? Wir liefern in 48 Stunden.",
    tag: "Staff Augmentation",
  },
  {
    src: VIDEO3,
    title: "Security Quick Check",
    subtitle: "990 €. 48 Stunden. Sie wissen, wo Sie stehen. Kein Bullshit.",
    tag: "Quick Check",
  },
];

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group">
      {/* Video */}
      <div className="relative aspect-video bg-[#111] overflow-hidden mb-4">
        {!playing ? (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center z-10 group/play"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#ff4500] hover:bg-[#ff5a1a] transition-all">
              <Play className="text-white ml-1" size={28} fill="white" />
            </div>
          </button>
        ) : null}
        <video
          src={video.src}
          controls={playing}
          autoPlay={playing}
          className="w-full h-full object-cover"
          playsInline
          preload="metadata"
        />
        {!playing && (
          <div className="absolute inset-0 bg-black/40" />
        )}
      </div>

      {/* Info */}
      <div className="flex items-start gap-3">
        <span
          className="inline-block px-2 py-1 bg-[#ff4500]/10 text-[#ff4500] text-xs font-bold uppercase tracking-wider flex-shrink-0"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {video.tag}
        </span>
        <div>
          <h4 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            {video.title}
          </h4>
          <p className="text-white/50 text-sm mt-1">{video.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function VideosSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="videos" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div ref={ref} className="container">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // Sehen statt lesen
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Zu faul zum Lesen?
            <br />
            <span className="text-white/40">Verstehen wir.</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl">
            Drei Videos. Drei Minuten. Danach wissen Sie mehr als 80% Ihrer Konkurrenz über IT-Sicherheit.
          </p>
        </div>

        {/* Videos Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
