"use client";

import { ballotContests, type Contest } from "@/data/ballotData";
import { useBallotStore } from "@/store/ballotStore";

function BallotChoiceLine({
  name,
  party,
}: {
  name: string;
  party?: string;
}) {
  return (
    <li className="ballot-choice-row">
      <span className="ballot-oval" aria-hidden="true" />
      <div>
        <p className="ballot-choice-name">{name}</p>
        {party ? <p className="ballot-choice-party">{party}</p> : null}
      </div>
    </li>
  );
}

function ContestBlock({
  contest,
  index,
  showExplainer,
}: {
  contest: Contest;
  index: number;
  showExplainer: boolean;
}) {
  const expandedIds = useBallotStore((state) => state.expandedIds);
  const toggleExpanded = useBallotStore((state) => state.toggleExpanded);
  const isExpanded = !!expandedIds[contest.id];

  return (
    <section className="ballot-contest-box">
      <header className="ballot-contest-header">
        <h2>{contest.office}</h2>
        <p>(You may vote for ONE)</p>
      </header>

      <div className="ballot-contest-body">
        <p className="ballot-contest-region">{contest.region}</p>
        <p className="ballot-time-tag">{contest.estimatedTime}</p>

        <ul className="ballot-choice-list">
          {contest.choices.map((choice) => (
            <BallotChoiceLine
              key={choice.id}
              name={choice.name}
              party={choice.party}
            />
          ))}
        </ul>

        <p className="ballot-write-in">Write-in:</p>

        {showExplainer ? (
          <div className="ballot-explainer-wrap">
            <button
              type="button"
              onClick={() => toggleExpanded(contest.id)}
              className="ballot-explainer-toggle"
            >
              {isExpanded ? "Hide plain-language note" : "Show plain-language note"}
            </button>

            {isExpanded ? (
              <p className="ballot-explainer-text">
                {contest.whyItMatters}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
      <span className="ballot-contest-number" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
    </section>
  );
}

function BallotShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="ballot-page reveal-up">
      <aside className="ballot-side-rail">
        <p>SAMPLE BALLOT</p>
      </aside>

      <div className="ballot-paper">
        <header className="ballot-top-header">
          <div>
            <p className="ballot-title">Sample Ballot</p>
            <p>Alexander County, North Carolina</p>
            <p>November 5, 2024</p>
          </div>
          <div className="ballot-code-block">
            <p className="ballot-code">B0001</p>
            <div className="ballot-bars" aria-hidden="true" />
          </div>
        </header>

        <section className="ballot-instructions">
          <p className="ballot-instructions-title">Ballot Marking Instructions</p>
          <p>A. Fill in the oval completely for your choice.</p>
          <p>B. If authorized, write in a name and fill the write-in oval.</p>
          <p>C. If you tear or mis-mark your ballot, request a replacement.</p>
        </section>

        <p className="ballot-section-banner">Partisan Elections</p>

        {children}

        <footer className="ballot-footer-note">
          <span>Continue voting next side</span>
          <span aria-hidden="true">-&gt;</span>
        </footer>
      </div>
    </section>
  );
}

export default function Home() {
  const mode = useBallotStore((state) => state.mode);
  const setMode = useBallotStore((state) => state.setMode);
  const currentIndex = useBallotStore((state) => state.currentIndex);
  const nextCard = useBallotStore((state) => state.nextCard);
  const prevCard = useBallotStore((state) => state.prevCard);
  const jumpTo = useBallotStore((state) => state.jumpTo);

  const currentContest = ballotContests[currentIndex];
  const columns = ballotContests.reduce<Contest[][]>(
    (acc, contest, idx) => {
      acc[idx % 3].push(contest);
      return acc;
    },
    [[], [], []],
  );

  return (
    <div className="min-h-screen bg-[#d4d4d4] px-2 py-4 sm:px-4 sm:py-8">
      <main className="mx-auto w-full max-w-[1100px]">
        <section className="mb-3 flex flex-wrap items-center justify-between gap-3 border-2 border-black bg-[#e5e5e5] px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black">
              UI Showcase Mode
            </p>
            <h1 className="text-2xl leading-tight text-black sm:text-3xl">
              Digital Ballot Guide
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setMode("scroll")}
              className={`border-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition ${
                mode === "scroll"
                  ? "border-black bg-black text-white"
                  : "border-black bg-white text-black hover:bg-neutral-100"
              }`}
            >
              Scroll Ballot
            </button>
            <button
              type="button"
              onClick={() => setMode("flip")}
              className={`border-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition ${
                mode === "flip"
                  ? "border-black bg-black text-white"
                  : "border-black bg-white text-black hover:bg-neutral-100"
              }`}
            >
              Flip Ballot
            </button>
            <span className="self-center text-xs font-semibold uppercase tracking-[0.08em] text-black">
              {ballotContests.length} contests
            </span>
          </div>
        </section>

        {mode === "scroll" ? (
          <BallotShell>
            <div className="ballot-columns-grid">
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="ballot-column">
                  {column.map((contest, contestIdx) => (
                    <ContestBlock
                      key={contest.id}
                      contest={contest}
                      index={columnIndex + contestIdx * 3}
                      showExplainer
                    />
                  ))}
                </div>
              ))}
            </div>
          </BallotShell>
        ) : (
          <BallotShell>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2 border-2 border-black bg-[#d4d4d4] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-black">
              <p>
                Contest {currentIndex + 1} of {ballotContests.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => prevCard()}
                  disabled={currentIndex === 0}
                  className="border border-black bg-white px-2 py-1 disabled:opacity-40"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => nextCard(ballotContests.length)}
                  disabled={currentIndex === ballotContests.length - 1}
                  className="border border-black bg-white px-2 py-1 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="flip-card ballot-column">
              <ContestBlock
                contest={currentContest}
                index={currentIndex}
                showExplainer
              />
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {ballotContests.map((contest, index) => (
                <button
                  key={contest.id}
                  type="button"
                  onClick={() => jumpTo(index)}
                  className={`h-2.5 w-6 rounded-full border border-black transition ${
                    index === currentIndex ? "bg-black" : "bg-[#bdbdbd]"
                  }`}
                  aria-label={`Go to ${contest.office}`}
                />
              ))}
            </div>
          </BallotShell>
        )}
      </main>
    </div>
  );
}
