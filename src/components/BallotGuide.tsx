"use client";

import { ballotContests, type Contest } from "@/data/ballotData";

function ChoiceLine({
  choice,
  contestId,
}: {
  choice: Contest["choices"][number];
  contestId: string;
}) {
  const isWriteIn = choice.name === "Write-in";

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
            <p className="sheet2-choice-name">{choice.name}</p>
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

function ContestCard({ contest }: { contest: Contest }) {
  return (
    <article className="sheet2-card">
      <p className="sheet2-card-office">{contest.office.toUpperCase()}</p>
      <p className="sheet2-card-office red">{contest.office.toUpperCase()}</p>
      <p className="sheet2-card-office blue">{contest.office.toUpperCase()}</p>
      <p className="sheet2-votefor">
        <span>(Vote for {contest.voteFor})</span>
        <span className="red">(Vote por {contest.voteFor})</span>
        <span className="blue">(Vote pou {contest.voteFor})</span>
      </p>

      <ul className="sheet2-choice-list">
        {contest.choices.map((choice) => (
          <ChoiceLine key={choice.id} choice={choice} contestId={contest.id} />
        ))}
      </ul>
    </article>
  );
}

export function BallotGuide() {
  const topSections = ["partisan", "judicial"] as const;
  const allContests = topSections.flatMap((section) =>
    ballotContests.filter((contest) => contest.section === section),
  );

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
              {column.map((contest) => (
                <ContestCard key={contest.id} contest={contest} />
              ))}
            </div>
          ))}
        </div>

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
