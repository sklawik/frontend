import React from "react";

export default function page() {
  return (
    <div className="flex flex-col w-screen h-screen bg-yellow-500">
      <header className="h-12 w-full bg-gray-500">header (including user nav)</header>
      <div className="flex flex-row grow">
        <div className="bg-blue-500 p-1 grow">zone 1</div>
        <div className="bg-green-500 p-1 grow">zone 2</div>
        <div className="bg-red-500 p-1 grow">3</div>
      </div>
      <footer className="w-full h-12 bg-gray-500">footer (audio player)</footer>
    </div>
  );
}
