import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Line from "./Line";
import StatItem from "./StatItem";

function StatsContainer({ year }) {
  const [isOffense, setIsOffense] = useState(true);

  const passUrl = `https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/passing-stats/offense/${year}`;
  const rushUrl = `https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/rushing-stats/offense/${year}`;
  const defPassUrl = `https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/passing-stats/defense/${year}`;
  const defRushUrl = `https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/rushing-stats/defense/${year}`;
  const index = 0;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1bac5a30abmshf0e208374fce5d6p17f852jsnff6665d8bc75",
      "X-RapidAPI-Host": "nfl-team-stats.p.rapidapi.com",
    },
  };
  const {
    data: pass,
    isPending: passLoading,
    error: passError,
  } = useFetch(passUrl, options);
  const {
    data: rush,
    isPending: rushLoading,
    error: rushError,
  } = useFetch(rushUrl, options);
  const {
    data: defPass,
    isPending: defPassLoading,
    error: defPassError,
  } = useFetch(defPassUrl, options);
  const {
    data: defRush,
    isPending: defRushLoading,
    error: defRushError,
  } = useFetch(defRushUrl, options);

  return (
    <div className="w-full p-2 lg:p-12 xl:p-16 pt-6 lg:pt-6 xl:pt-6 shadow-xl bg-primary z-50 relative block mb-12 mt-4">
      <ul className="flex flex-row gap-12 mb-12 lg:mb-16 justify-center lg:justify-start">
        <button onClick={() => setIsOffense(true)}>
          <li
            className={
              isOffense
                ? "text-xl text-white font-display uppercase tracking-[6px] text-center border-b-4 border-secondary"
                : "text-xl text-white font-display uppercase tracking-[6px] text-center"
            }
          >
            Offense
          </li>
        </button>
        <button onClick={() => setIsOffense(false)}>
          <li
            className={
              !isOffense
                ? "text-xl text-white font-display uppercase tracking-[6px] text-center border-b-4 border-secondary"
                : "text-xl text-white font-display uppercase tracking-[6px] text-center"
            }
          >
            Defense
          </li>
        </button>
      </ul>

      <div className=" justify-between items-center grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row">
        {isOffense ? (
          <>
            <StatItem
              data={pass}
              isPending={passLoading}
              error={passError}
              index={index}
              statName="passYards"
              statLabel="Passing Total"
            />
            <Line />
            <StatItem
              data={pass}
              isPending={passLoading}
              error={passError}
              index={index}
              statName="touchdowns"
              statLabel="Passing TDs"
            />
            <Line />
            <StatItem
              data={pass}
              isPending={passLoading}
              error={passError}
              index={index}
              statName="completions"
              statLabel="pass completions"
            />
            <Line />
            <StatItem
              data={rush}
              isPending={rushLoading}
              error={rushError}
              index={index}
              statName="yards"
              statLabel="Rushing Total"
            />
            <Line />
            <StatItem
              data={rush}
              isPending={rushLoading}
              error={rushError}
              index={index}
              statName="touchdowns"
              statLabel="Rushing TDs"
            />
          </>
        ) : (
          <>
            <StatItem
              data={defPass}
              isPending={defPassLoading}
              error={defPassError}
              index={index}
              statName="passYards"
              statLabel="Passing Total"
            />
            <Line />
            <StatItem
              data={defPass}
              isPending={defPassLoading}
              error={defPassError}
              index={index}
              statName="touchdowns"
              statLabel="Passing TDs"
            />
            <Line />
            <StatItem
              data={defPass}
              isPending={defPassLoading}
              error={defPassError}
              index={index}
              statName="completions"
              statLabel="pass completions"
            />
            <Line />
            <StatItem
              data={defRush}
              isPending={defRushLoading}
              error={defRushError}
              index={index}
              statName="yards"
              statLabel="Rushing Total"
            />
            <Line />
            <StatItem
              data={defRush}
              isPending={defRushLoading}
              error={defRushError}
              index={index}
              statName="touchdowns"
              statLabel="Rushing TDs"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default StatsContainer;
