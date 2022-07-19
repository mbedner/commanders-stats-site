import { useFetch } from "../hooks/useFetch";

function Hero({ year }) {
  const url = `https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/win-stats/${year}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1bac5a30abmshf0e208374fce5d6p17f852jsnff6665d8bc75",
      "X-RapidAPI-Host": "nfl-team-stats.p.rapidapi.com",
    },
  };
  const { data, isPending, error } = useFetch(url, options);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-3 mb-6">
          <span>
            <div className="bg-white w-3 h-3"></div>
            <div className="bg-secondary w-3 h-3"></div>
          </span>
          <h3 className="text-secondary font-display text-4xl leading-none mt-2 tracking-wide">
            {year}
          </h3>
        </div>
        <div className="flex xl:flex-col sm:items-center xl:items-start xl:gap-0 lg:gap-4 gap-2 sm:flex-row flex-col items-start">
          <h1
            id="wash"
            className="font-bold 2xl:text-[160px] lg:text-[85px] font-display uppercase tracking-wide text-white leading-none xs:text-6xl text-5xl relative z-50"
          >
            Washington
          </h1>
          <h1
            id="comms"
            className="font-bold 2xl:text-[160px] lg:text-[85px] font-display text-secondary uppercase lg:leading-[85px] xs:text-6xl text-5xl relative z-50"
          >
            Commanders
          </h1>
        </div>
        <div className="2xl:w-[78%] xl:w-2/3  w-full flex justify-center items-center flex-col 2xl:my-20 my-6">
          <div className="h-3 w-full bg-secondary"></div>
          <div className="py-8">
            {isPending ? (
              <div className="text-white">loading...</div>
            ) : (
              data &&
              data[10] && (
                <>
                  <h2 className="2xl:text-[120px] lg:text-8xl text-6xl text-white font-display font-bold text-center leading-none">
                    {data[10].wins} - {data[10].losses}
                  </h2>
                  <p className="2xl:text-2xl lg:text-lg text-white font-display text-center uppercase tracking-[4px] lg:tracking-[8px] opacity-60">
                    Season Record
                  </p>
                </>
              )
            )}
            {error && console.log(error)}
          </div>
          <div className="h-3 w-full bg-secondary"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
