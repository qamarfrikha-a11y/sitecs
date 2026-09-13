import React, { useState, useEffect } from "react";
import { githubImage } from "../data/imageUrls";

export default function EventImage({ event }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || event.images.length < 2) return undefined;
    const rotation = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % event.images.length);
    }, 4200);
    return () => window.clearInterval(rotation);
  }, [event.images.length, isPaused]);

  return (
    <div className="event-image-frame" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <img key={event.images[activeImage]} src={githubImage(event.images[activeImage])} alt={`${event.title} event highlight`} className="event-image" />
      <div className="event-image-dots" aria-hidden="true">
        {event.images.map((image, index) => (
          <span key={image} className={index === activeImage ? "event-image-dot event-image-dot-active" : "event-image-dot"} />
        ))}
      </div>
    </div>
  );
}
