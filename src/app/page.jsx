"use client";
import { useState } from "react";

const profilesArr = [
  {
    id: 1,
    name: "bold",
    age: 20,
    img: "https://picsum.photos/100/100",
  },
  {
    id: 2,
    name: "dorj",
    age: 25,
    img: "https://picsum.photos/100/100",
  },
  {
    id: 3,
    name: "purew",
    age: 33,
    img: "https://picsum.photos/100/100",
  },
  {
    id: 4,
    name: "turuu",
    age: 13,
    img: "https://picsum.photos/100/100",
  },
];
export default function Home() {
  const [profiles, setprofiles] = useState(profilesArr);
  const clearAll = () => {
    setprofiles([]);
  };

  return (
    <div className="flex justify-center items-center back bg-pink-100 h-screen">
      <div className="h-fit flex justify-center items-center flex-col gap-10 w-fit bg-amber-50">
        <h1 className="text-3xl">{profiles.length} BIRTHDAYS TODAY</h1>
        <div className="flex gap-10 flex-col">
          {profiles.map((profile) => {
            return (
              <div className="flex gap-2 " key={profile.id}>
                <img src={profile.img} alt="" className="rounded-full" />
                <div className="flex flex-col  ">
                  <h1 className="text-4xl ">{profile.name}</h1>
                  <p className="">{profile.age}</p>
                </div>
              </div>
            );
          })}
          <button className="w-xl bg-pink-500" onClick={clearAll}>
            clear all
          </button>
        </div>
      </div>
    </div>
  );
}
