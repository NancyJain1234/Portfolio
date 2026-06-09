import { useEffect, useState } from "react";

const API_URL =
  "https://4tuojd3urjilgxo4cvzz5alin40poezc.lambda-url.ap-south-1.on.aws/";

type MediaItem = {
  id: string;
  title: string;
  description: string;
  type: string;
  fileUrl: string;
  fileName: string;
};

const MediaGallery = () => {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [status, setStatus] = useState("Loading media...");

  useEffect(() => {
    const loadMedia = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "getMedia",
          }),
        });

        const data = await response.json();

        console.log("MEDIA DATA:", data);

        if (!response.ok || !data.success) {
          setStatus(data.error || data.message || "Failed to load media");
          return;
        }

        const mediaItems = data.items || [];

        setItems(mediaItems);
        setStatus(`Loaded ${mediaItems.length} media items`);
      } catch (error) {
        console.error("Media loading error:", error);
        setStatus("Failed to load media");
      }
    };

    loadMedia();
  }, []);

  return (
    <section id="media" className="section bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          Media
        </p>

        <h2 className="section-title">Certificates & Events</h2>

        <p className="mb-6 text-sky-300">{status}</p>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-sky-500/30 bg-slate-800 p-5 shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mb-4 text-sm text-slate-300">
                {item.description}
              </p>

              {item.fileName?.toLowerCase().endsWith(".pdf") ? (
                <div className="flex h-52 flex-col items-center justify-center rounded-xl bg-slate-700 p-4">
                  <div className="mb-3 text-5xl">📄</div>

                  <a
                    href={item.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-sky-500 px-4 py-2 font-medium text-white hover:bg-sky-600"
                  >
                    View PDF
                  </a>
                </div>
              ) : item.type === "project_video" ? (
                <video controls className="w-full rounded-xl">
                  <source src={item.fileUrl} />
                </video>
              ) : (
                <img
                  src={item.fileUrl}
                  alt={item.title}
                  className="h-52 w-full rounded-xl bg-slate-700 object-cover"
                />
              )}

              <p className="mt-3 text-xs text-slate-400">
                Type: {item.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;