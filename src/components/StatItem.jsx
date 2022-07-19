import React from "react";

function StatItem({ data, isPending, error, index, statName, statLabel }) {
  return (
    <div>
      {isPending ? (
        <div className="text-white text-center leading-none">loading...</div>
      ) : (
        data &&
        data[index] && (
          <div className="mb-6 lg:mb-0 p-2">
            <h2 className="text-5xl lg:text-7xl text-white font-display font-bold text-center leading-none">
              {data[index][statName]}
            </h2>
            <p className="text-base lg:text-xl text-white font-display text-center uppercase tracking-[2px] lg:tracking-[6px] opacity-60">
              {statLabel}
            </p>
          </div>
        )
      )}
      {error && console.log(error)}
    </div>
  );
}

export default StatItem;
