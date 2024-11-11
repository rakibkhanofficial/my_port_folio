import React, { useState, useEffect } from "react";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface GitHubResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar: ContributionCalendar;
      };
    };
  };
  errors?: Array<{ message: string }>;
}

type ContributionMatrix = number[][];

interface CalendarProps {
  username: string;
  githubToken?: string;
}

const AnimatedGitHubCalendar: React.FC<CalendarProps> = ({
  username="rakibkhanofficial",
  githubToken="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",
}) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [contributions, setContributions] = useState<ContributionMatrix>(() =>
    Array.from({ length: 52 }, () => Array.from({ length: 7 }, () => 0)),
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalContributions, setTotalContributions] = useState<number>(0);

  useEffect(() => {
    const fetchContributions = async (): Promise<void> => {
      try {
        const query = `
          query($username: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $username) {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `;

        const from = new Date(selectedYear, 0, 1).toISOString();
        const to = new Date(selectedYear, 11, 31).toISOString();

        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        if (githubToken) {
          headers.Authorization = `bearer ${githubToken}`;
        }

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers,
          body: JSON.stringify({
            query,
            variables: { username, from, to },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = (await response.json()) as GitHubResponse;

        if (data.errors && data.errors.length > 0) {
          throw new Error(data.errors[0]?.message ?? "");
        }

        const contributionData =
          data.data?.user?.contributionsCollection?.contributionCalendar;

        if (!contributionData) {
          throw new Error("No contribution data found");
        }

        setTotalContributions(contributionData.totalContributions);
        const matrix = processGithubData(contributionData.weeks);
        setContributions(matrix);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch GitHub data",
        );
      } finally {
        setLoading(false);
      }
    };

    void fetchContributions();
  }, [username, githubToken, selectedYear]);

  const processGithubData = (weeks: ContributionWeek[]): ContributionMatrix => {
    const matrix: ContributionMatrix = Array.from({ length: 53 }, () =>
      Array.from({ length: 7 }, () => 0),
    );

    weeks.forEach((week, weekIndex) => {
      if (weekIndex >= matrix.length) return;

      week.contributionDays.forEach((day) => {
        const dayOfWeek = new Date(day.date).getDay();
        // @ts-expect-error type error is not solved
        matrix[weekIndex][dayOfWeek] = day.contributionCount;
      });
    });

    return matrix;
  };

  const getColor = (count: number): string => {
    if (count === 0) return "bg-gray-100 dark:bg-gray-800";
    if (count === 1) return "bg-green-200 dark:bg-green-900";
    if (count <= 3) return "bg-green-300 dark:bg-green-700";
    if (count <= 6) return "bg-green-400 dark:bg-green-600";
    return "bg-green-500 dark:bg-green-500";
  };

  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const availableYears = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => currentYear - i,
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="mx-auto w-full">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-8 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-400 dark:to-purple-400">
              {totalContributions.toLocaleString()} Contributions in{" "}
              {selectedYear}
            </h2>
            <select
              title="select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="rounded-lg border border-gray-200 bg-white/50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800/50"
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto z-[-150] rounded-lg bg-white/50 p-6 shadow-lg dark:bg-gray-800/50">
            <div className="relative">
              {/* Month labels */}
              <div className="mb-2 flex">
                <div className="w-8" />
                {months.map((month) => (
                  <div
                    key={month}
                    className="flex-1 text-sm text-gray-600 dark:text-gray-400"
                  >
                    {month}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="flex gap-1">
                {contributions.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((count, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`h-3 w-3 rounded-sm ${getColor(count)} transition-all hover:ring-2 hover:ring-blue-400`}
                        title={`${count} contributions on day ${dayIndex + 1} of week ${weekIndex + 1}`}
                      >
                        <span className="sr-only">{count} contributions</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Less</span>
                {[0, 1, 3, 6, 9].map((level) => (
                  <div
                    key={level}
                    className={`h-3 w-3 rounded-sm ${getColor(level)}`}
                    title={`${level} contributions`}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGitHubCalendar;
