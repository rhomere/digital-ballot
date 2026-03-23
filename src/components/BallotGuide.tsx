"use client";

import Link from "next/link";
import { useState } from "react";

import { ballotContests, type Contest } from "@/data/ballotData";

function getJusticeName(contest: Contest) {
  const match = contest.prompt?.match(/Justice\s+(.+?)\s+of/i);
  return match?.[1] ?? contest.office;
}

function ChoiceLine({
  choice,
  contestId,
}: {
  choice: Contest["choices"][number];
  contestId: string;
}) {
  const isWriteIn = choice.name === "Write-in";
  const canOpenInsights = !isWriteIn && Boolean(choice.party);
  const insightsHref = `/insights?contest=${encodeURIComponent(contestId)}&choice=${encodeURIComponent(choice.id)}`;

  return (
    <li className="sheet2-choice-row">
      <input
        type="radio"
        className="sheet2-radio"
        name={`contest-${contestId}`}
        aria-label={`Select ${choice.name}`}
      />
      <div className="sheet2-choice-main">
        {isWriteIn ? (
          <>
            <p className="sheet2-choice-name">Write-in</p>
            <p className="sheet2-choice-alt red">Agregado por Escrito</p>
            <p className="sheet2-choice-alt blue">Ekri alamen</p>
          </>
        ) : (
          <>
            {canOpenInsights ? (
              <Link
                href={insightsHref}
                className="sheet2-choice-name sheet2-choice-link"
                aria-label={`Open insights for ${choice.name}`}
              >
                {choice.name}
              </Link>
            ) : (
              <p className="sheet2-choice-name">{choice.name}</p>
            )}
            {choice.runningMate ? <p className="sheet2-running">{choice.runningMate}</p> : null}
          </>
        )}
      </div>
      <div className="sheet2-choice-right">
        <span className="sheet2-party">{choice.party ?? ""}</span>
        <span className="sheet2-num">{choice.ballotNumber ?? ""}</span>
      </div>
    </li>
  );
}

function ContestCard({
  contest,
  showOfficeTitles,
  onInfoClick,
}: {
  contest: Contest;
  showOfficeTitles: boolean;
  onInfoClick: (contest: Contest) => void;
}) {
  return (
    <article className="sheet2-card">
      {showOfficeTitles ? (
        <div className="sheet2-card-office-group">
          <p className="sheet2-card-office">{contest.office.toUpperCase()}</p>
          <p className="sheet2-card-office red">
            {(contest.spanishOffice ?? contest.office).toUpperCase()}
          </p>
          <p className="sheet2-card-office blue">
            {(contest.creoleOffice ?? contest.office).toUpperCase()}
          </p>
          <button
            type="button"
            className="sheet2-info-symbol"
            title="Contest information"
            aria-label={`Open information for ${contest.office}`}
            onClick={() => onInfoClick(contest)}
          >
            i
          </button>
        </div>
      ) : null}
      {contest.prompt ? (
        <Link
          href={`/insights?contest=${encodeURIComponent(contest.id)}&subject=${encodeURIComponent(getJusticeName(contest))}`}
          className="sheet2-prompt-block sheet2-prompt-link"
          aria-label={`Open insights for ${getJusticeName(contest)}`}
        >
          <p className="sheet2-prompt">{contest.prompt}</p>
          <p className="sheet2-prompt red">{contest.spanishPrompt ?? contest.prompt}</p>
          <p className="sheet2-prompt blue">{contest.creolePrompt ?? contest.prompt}</p>
        </Link>
      ) : (
        <p className="sheet2-votefor">
          <span>(Vote for {contest.voteFor})</span>
          <span className="red">(Vote por {contest.voteFor})</span>
          <span className="blue">(Vote pou {contest.voteFor})</span>
        </p>
      )}

      <ul className="sheet2-choice-list">
        {contest.choices.map((choice) => (
          <ChoiceLine key={choice.id} choice={choice} contestId={contest.id} />
        ))}
      </ul>
    </article>
  );
}

export function BallotGuide() {
  const [activeInfoContest, setActiveInfoContest] = useState<Contest | null>(null);

  const topSections = ["partisan", "judicial"] as const;
  const allContests = topSections.flatMap((section) =>
    ballotContests.filter((contest) => contest.section === section),
  );

  const handleOpenInfo = (contest: Contest) => {
    setActiveInfoContest(contest);
  };

  const handleCloseInfo = () => {
    setActiveInfoContest(null);
  };

  const contestsPerColumn = Math.ceil(allContests.length / 2);
  const columns: Contest[][] = Array.from({ length: 2 }, (_, index) =>
    allContests.slice(index * contestsPerColumn, (index + 1) * contestsPerColumn),
  );

  return (
    <section className="sheet2-wrap" aria-label="Official sample ballot options page">
      <div className="sheet2-paper">
        <header className="sheet2-header">
          <h2>Official Sample Ballot - General Election</h2>
          <p className="sheet2-header-row">
            <span className="red">Boleta Oficial de Muestra - Elecciones Generales</span>
            <span className="sheet2-header-star">*</span>
            <span className="blue">Echantiyon Bilten Vot Ofisyel - Eleksyon Jeneral</span>
          </p>
        </header>

        <div className="sheet2-grid">
          {columns.map((column, colIndex) => (
            <div className="sheet2-col" key={`col-${colIndex}`}>
              {column.map((contest, contestIndex) => {
                const previousContest = column[contestIndex - 1];
                const showOfficeTitles =
                  !previousContest ||
                  previousContest.section !== contest.section ||
                  previousContest.office !== contest.office ||
                  previousContest.spanishOffice !== contest.spanishOffice ||
                  previousContest.creoleOffice !== contest.creoleOffice;

                return (
                  <ContestCard
                    key={contest.id}
                    contest={contest}
                    showOfficeTitles={showOfficeTitles}
                    onInfoClick={handleOpenInfo}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {activeInfoContest ? (
          <div
            className="sheet2-info-modal-backdrop"
            role="presentation"
            onClick={handleCloseInfo}
          >
            <div
              className="sheet2-info-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="sheet2-info-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="sheet2-info-modal-close-x"
                aria-label="Close information dialog"
                onClick={handleCloseInfo}
              >
                X
              </button>
              <h3 id="sheet2-info-modal-title">
                {activeInfoContest.office}
              </h3>
              <p>
                {activeInfoContest.whyItMatters ?? "Information is not available for this contest yet."}
              </p>
            </div>
          </div>
        ) : null}

        <footer className="sheet2-footer">
          <span className="sheet2-page-num">2</span>
          <p>REMEMBER TO CHECK BOTH SIDES OF THE BALLOT</p>
          <p>NO OLVIDE REVISAR AMBOS LADOS DE LA BOLETA</p>
          <p>SONJE POU TCHEKE TOUDE BO BILTEN VOT LA</p>
          <span className="sheet2-vote-mark">VOTE</span>
        </footer>
      </div>
    </section>
  );
}
