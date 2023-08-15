"use client";

import React, { createContext, useContext, useState } from "react";
import beatlesAlbums from "../albums";

type PlayerContextType = {
  value: number | undefined;
  setValue: (newValue: number | undefined) => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState<number | undefined>(undefined);

  const contextValue: PlayerContextType = {
    value,
    setValue,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}

const ContextClickPlayer = () => {
  const { value, setValue } = usePlayer();
  if (value === undefined) {
    return null;
  }

  const selectedValue = beatlesAlbums.find((album) => album.id == value);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100">
      <div className="flex-1 bg-gray-200 h-1.5 dark:bg-gray-700">
        <div className="bg-green-500 h-1.5" style={{ width: "5.03636%" }} />
      </div>
      <div className="container mx-auto max-w-screen-lg px-3 py-2 sm:px-6 sm:py-4 flex items-center gap-5">
        <img
          src={selectedValue?.coverLink}
          width={60}
          height={60}
          className="block rounded-md"
        />
        <div className="flex-1 min-w-0">
          <p className="text-xl font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            {selectedValue?.title}
          </p>
          <p className="text-xl text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
            {selectedValue?.band}
          </p>
        </div>
        <audio src="/mp3/song1.mp3" />
        <div className="flex gap-6 items-center text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 hidden sm:block"
          >
            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
          </svg>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 sm:w-14 sm:h-14"
            >
              <path
                fillRule="evenodd"
                d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 hidden sm:block"
          >
            <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const Player = () => {
  const { value } = usePlayer();

  return (
    <div className="span text-xl font-bold text-white">
      <span className="tabular-nums">{value}</span> Clicks
    </div>
  );
};

export default ContextClickPlayer;
