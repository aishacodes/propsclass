import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Feature from "./components/Feature";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <NavBar />
      <div className="w-3/5 text-[3.125rem] font-light">
        Welcome to fornit, where style meets comforts
      </div>
      <div className="w-3/5">
        <h1 className="text-[#595959]">
          Our collection of furniture is carefully curated to bring you the best
          in quality and design. Whether you're looking to update your living
          room, refresh your bedroom, or create a cozy outdoor space, we have
          something for every style and budget.
        </h1>
        <div className="mt-4 flex items-center gap-4">
          <button className="w-[5.4rem] h-12 rounded-lg  border border-[#D9D9D9]">
            Button 2
          </button>
          <Button label="button 1" />

          <Button label="button 2" />
          <Button label="button 3" />
          <Button label="button 4" />
        </div>
        <section className="m-20 flex gap-4">
          <Card
            img="/images/vite.svg"
            name="Zainab Abdulmumin"
            address="Oloje Ilorin"
            role="Fullstack developer"
          />
          <Card
            img="/images/Avatar.png"
            name="Aishat Abdulfatah"
            address="Oloje Ilorin "
            role="Developer"
          />
          <Card
            name="Abdullah Uthman"
            address="Gaa akanbi"
            role="developer"
            img="/images/vite.svg"
          />
        </section>
        <section className="grid grid-cols-3">
          <Feature
            img="/vectors/bookmark.svg"
            title="Web & Mobile Development"
            desc=" We design and develop tech solutions for SMEs and Government Agency."
            link="google.com"
          />
          <Feature
            img="/vectors/bookmark.svg"
            title="Bootcamps & Trainings"
            desc="We’re building the next generation of tech talents."
            link="codevillage.org"
          />
          <Feature
            img="/vectors/bookmark.svg"
            title="Workspaces & Tech Hub"
            desc="Work and Connect with other Creatives. All in a fun and cozy environment."
            link="abc.xyz"
          />
        </section>
      </div>
    </main>
  );
}

export default App;
