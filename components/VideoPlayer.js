'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = (e) => {
    e.preventDefault();
    
    if (!videoRef.current) return;

    try {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Video playback error:', error);
    }
  };

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
      >
        <source src="/videos/process.mp4" type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer"
        onClick={handlePlay}
      >
        <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group">
          {isPlaying ? (
            <svg className="w-6 h-6 text-[#8B7355]" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" fill="currentColor" />
              <rect x="14" y="4" width="4" height="16" fill="currentColor" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#8B7355]" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
