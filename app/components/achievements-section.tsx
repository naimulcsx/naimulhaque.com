import { Brain, Code, Star, Trophy } from "lucide-react";

export function AchievementsSection() {
  return (
    <section id="achievements">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-100 sm:text-2xl">
          Achievements
        </h3>

        <p className="text-sm leading-relaxed text-gray-300/90 md:text-base">
          Solved over 1800+ problems with strong knowledge in Data Structure and
          Algorithms, Competed in over 120+ online, regional and national
          contests.
        </p>
        <div className="!mt-6 space-y-4">
          {[
            {
              position: "6th",
              event: "IIUC Inter University Programming Contest 2023",
              team: "IIUC_Retired_Coders",
              issuedBy: "International Islamic University Chittagong",
              date: "Sep 2023",
              ranklist:
                "https://toph.co/c/15th-iiuc-inter-university-2023/standings"
            },
            {
              position: "61th",
              event: "ICPC Asia Dhaka Regional Contest 2021",
              team: "IIUC_ENDGAME",
              issuedBy: "Bangladesh University of Business and Technology",
              date: "Oct 2022",
              ranklist:
                "https://algo.codemarshal.org/contests/dhaka-21-main/standings"
            },
            {
              position: "6th",
              event: "EDU Inter University Programming Contest 2022",
              team: "IIUC_LUMINOUS",
              issuedBy: "East Delta University",
              date: "Oct 2022"
            },
            {
              position: "54th",
              event: "ICPC Asia Dhaka Regional Online Preliminary Contest 2021",
              team: "IIUC_ENDGAME",
              issuedBy: "Bangladesh University of Business and Technology",
              date: "Sep 2022",
              ranklist:
                "https://algo.codemarshal.org/contests/icpc-dhaka-21-preli/standings"
            },
            {
              position: "4th",
              event: "RMSTU Bangabandhu Online Programming Contest 2021",
              team: "IIUC_SCORPIONS",
              issuedBy: "Rangamati Science and Technology University",
              date: "May 2021",
              ranklist:
                "https://toph.co/c/rmstu-bangabandhu-online-divisional-2021/standings"
            },
            {
              position: "4th",
              event: "NSTU ICE Fest Regional Programming Contest 2020",
              team: "IIUC_InsideOut",
              issuedBy: "Noakhali Science and Technology University",
              date: "Jan 2020",
              ranklist:
                "https://toph.co/c/nstu-ice-fest-regional-2020/standings"
            },
            {
              position: "5th",
              event: "IIUC Inter University Programming Contest 2020",
              team: "IIUC_InsideOut",
              issuedBy: "International Islamic University Chittagong",
              date: "Jan 2020",
              ranklist:
                "https://algo.codemarshal.org/contests/iiuc-2020/standings"
            },
            {
              position: "7th",
              event: "BAIUST Inter University Programming Contest 2020",
              team: "IIUC_InsideOut",
              issuedBy:
                "Bangladesh Army International University of Science and Technology",
              date: "Jan 2020",
              ranklist:
                "https://drive.google.com/file/d/1n274rybru1TzYLpIIcZ8dbPl0jHh1dFc/view"
            },
            {
              position: "87th",
              event: "MIST National Collegiate Programming Contest 2020",
              team: "IIUC_InsideOut",
              issuedBy: "Military Institute of Science and Technology",
              date: "Jan 2020",
              ranklist:
                "https://algo.codemarshal.org/contests/mist-ncpc-2020/standings"
            }
          ].map((achievement, index) => {
            const position = parseInt(
              achievement.position.replace(/[^0-9]/g, "")
            );
            const isTopTen = position <= 10;

            return (
              <div
                key={index}
                className={`relative flex items-start gap-3 p-4 ${isTopTen ? "rounded-lg border border-primary-400/20 bg-primary-400/5" : ""}`}
              >
                {isTopTen && (
                  <div className="absolute right-4 top-4 hidden h-6 w-6 items-center justify-center gap-2 rounded-full md:flex">
                    <Star className="h-4 w-4 fill-primary-400 text-primary-400" />
                  </div>
                )}
                <Trophy className="mt-1 h-6 w-12 text-primary-400" />
                <div>
                  <div className="mb-1.5 leading-5">
                    <span className="text-sm font-medium text-gray-200">
                      {achievement.position}
                    </span>
                    <span className="text-sm text-gray-300">
                      {" "}
                      · {achievement.event}
                    </span>
                  </div>
                  <span className="block text-sm text-gray-500">
                    {achievement.team}
                  </span>
                  <div className="mt-1 flex flex-col gap-1 text-xs text-gray-500">
                    <span>
                      Issued by {achievement.issuedBy} · {achievement.date}
                    </span>
                    {achievement.ranklist && (
                      <a
                        href={achievement.ranklist}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-primary-400 hover:underline"
                      >
                        Full Ranklist →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
