"use client";
import { motion } from "framer-motion";
import beatlesAlbums from "../../../albums";
import { usePlayer } from "../../context-player";
import { transition } from "../../transition";

export default function Page({ params: { id } }: { params: { id: number } }) {
  const album = beatlesAlbums.find((album) => album.id == id);
  const { value, setValue } = usePlayer();

  return (
    <div>
      <div className="container mx-auto max-w-screen-lg px-6 lg:px-0 flex flex-col items-start md:items-end md:flex-row pt-8 pb-12 overflow-hidden">
        <div className="flex-1 flex flex-col justify-end pt-8 mr-32">
          <motion.div layoutId={`album-${id}-info`} transition={transition}>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
              {album?.title}
            </h1>
            <p className="mt-3 text-3xl">{album?.band}</p>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="mt-3 flex"
          >
            <button
              onClick={() => setValue(id)}
              type="button"
              className="text-green-600 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-10 py-3 text-center inline-flex items-center dark:focus:ring-blue-500 mr-4"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 mr-2 -ml-1 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Play
            </button>
            <button
              type="button"
              className="text-green-600 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-10 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-4"
            >
              <svg
                className="w-6 h-6 mr-2 -ml-1 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
              Shuffle
            </button>
          </motion.div>
        </div>
        <motion.div
          layoutId={`album-${id}`}
          transition={transition}
          className="relative shadow-xl w-72 md:w-auto"
        >
          <img
            src={album?.coverLink}
            alt={album?.title}
            width={400}
            height={400}
            className="block rounded-md tag-album-cover relative bg-white"
            style={{ viewTransitionName: "record-2177412" }}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="container mx-auto max-w-screen-lg mb-10"
      >
        <ul className="text-xl">
          <li className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center">
            <span className="text-gray-500 w-8 mr-2">1</span>
            <span className="font-medium">Jenny Was a Friend of Mine</span>
            <span className="text-gray-500 ml-auto">4:05</span>
          </li>
          <li className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center">
            <span className="text-gray-500 w-8 mr-2">2</span>
            <span className="font-medium">Mr. Brightside</span>
            <span className="text-gray-500 ml-auto">3:43</span>
          </li>
          <li className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center">
            <span className="text-gray-500 w-8 mr-2">3</span>
            <span className="font-medium">Smile Like You Mean It</span>
            <span className="text-gray-500 ml-auto">3:55</span>
          </li>
          <li className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center">
            <span className="text-gray-500 w-8 mr-2">4</span>
            <span className="font-medium">Somebody Told Me</span>
            <span className="text-gray-500 ml-auto">3:17</span>
          </li>
          <li className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center">
            <span className="text-gray-500 w-8 mr-2">5</span>
            <span className="font-medium">All These Things That I’ve Done</span>
            <span className="text-gray-500 ml-auto">5:02</span>
          </li>
          <li className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center">
            <span className="text-gray-500 w-8 mr-2">6</span>
            <span className="font-medium">Andy, You’re a Star</span>
            <span className="text-gray-500 ml-auto">3:14</span>
          </li>
          <li className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center">
            <span className="text-gray-500 w-8 mr-2">7</span>
            <span className="font-medium">On Top</span>
            <span className="text-gray-500 ml-auto">4:19</span>
          </li>
          <li className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center">
            <span className="text-gray-500 w-8 mr-2">8</span>
            <span className="font-medium">Change Your Mind</span>
            <span className="text-gray-500 ml-auto">3:11</span>
          </li>
          <li className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center">
            <span className="text-gray-500 w-8 mr-2">9</span>
            <span className="font-medium">Believe Me Natalie</span>
            <span className="text-gray-500 ml-auto">5:07</span>
          </li>
          <li className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center">
            <span className="text-gray-500 w-8 mr-2">10</span>
            <span className="font-medium">Midnight Show</span>
            <span className="text-gray-500 ml-auto">4:03</span>
          </li>
          <li className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex border-b first:border-t items-center">
            <span className="text-gray-500 w-8 mr-2">11</span>
            <span className="font-medium">Everything Will Be Alright</span>
            <span className="text-gray-500 ml-auto">5:45</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
