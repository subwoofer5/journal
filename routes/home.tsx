import { asset, Head } from "$fresh/runtime.ts";
import { Navbar } from "../components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Journal</title>
        <link href={asset("/global.css")} rel="stylesheet" />
        <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
    />
      </Head>
      <body>
        <div class="bg-gradient-to-tr from-indigo-200 to-gray-200 h-screen">

          <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-600 bg-opacity-25 backdrop-blur-sm shadow-lg">
            <div class="text-gray-100 text-xl">
              <div class="p-2.5 mt-1 flex items-center">
              <span class="bg-gradient-to-br text-transparent bg-clip-text from-gray-900  to-indigo-800">
              Endless
            </span>
                <i
                  class="bi bi-x cursor-pointer ml-28 lg:hidden"
                >
                </i>
              </div>
              <div class="my-2  h-[1px]"></div>
            </div>
            <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-900 text-white">
              <i class="bi bi-search text-sm"></i>
              <input
                type="text"
                placeholder="Search"
                class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
              />
            </div>
            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
              <i class="bi bi-house-door-fill"></i>
              <span class="text-[15px] ml-4 text-gray-900 font-bold">Home</span>
            </div>
            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
              <i class="bi bi-bookmark-fill"></i>
              <span class="text-[15px] ml-4 text-gray-900 font-bold">
                Bookmark
              </span>
            </div>
            <div
              class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
              onclick="dropdown()"
            >
              <i class="bi bi-chat-left-text-fill"></i>
              <div class="flex justify-between w-full items-center">
                <span class="text-[15px] ml-4 text-gray-200 font-bold">
                  Chatbox
                </span>
                <span class="text-sm rotate-180" id="arrow">
                  <i class="bi bi-chevron-down"></i>
                </span>
              </div>
            </div>
            <div
              class="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
              id="submenu"
            >
              <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                Social
              </h1>
              <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                Personal
              </h1>
              <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                Friends
              </h1>
            </div>
            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i class="bi bi-box-arrow-in-right"></i>
              <span class="text-[15px] ml-4 text-gray-200 font-bold">
                Logout
              </span>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}