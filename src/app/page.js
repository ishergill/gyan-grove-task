"use client";
import Header from "./components/Header";
import ShowSection from "./components/ShowSection";
import EventSection from "./components/EventSection";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSeachQuery] = useState();
  return (
    <main>
      <Navbar searchQuery={searchQuery} setSeachQuery={setSeachQuery} />
      {searchQuery?.length ? null : (
        <>
          <Header />
          <ShowSection />
        </>
      )}

      <EventSection searchQuery={searchQuery} />
    </main>
  );
}
