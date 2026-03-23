"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { ballotContests } from "@/data/ballotData";

type FinancialItem = {
  label: string;
  percent: number;
};

type InsightProfile = {
  campaignPromises: string[];
  financials: FinancialItem[];
  priorWorkExperience: string[];
};

function buildInsightProfile(seed: string): InsightProfile {
  const seedValue = seed.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const raw = [
    (seedValue % 23) + 32,
    ((seedValue * 3) % 19) + 22,
    ((seedValue * 5) % 15) + 14,
  ];
  const total = raw.reduce((sum, value) => sum + value, 0);
  const financials = [
    { label: "Individual Donors", percent: Math.round((raw[0] / total) * 100) },
    { label: "PAC / Committee Support", percent: Math.round((raw[1] / total) * 100) },
    { label: "Self-Funded / Other", percent: Math.round((raw[2] / total) * 100) },
  ];
  financials[financials.length - 1].percent += 100 - financials.reduce((sum, item) => sum + item.percent, 0);

  return {
    campaignPromises: [
      "Expand transparency in budgeting, contracts, and public reporting.",
      "Improve response times for constituent services and casework.",
      "Focus policy decisions on neighborhood-level outcomes and measurable results.",
    ],
    financials,
    priorWorkExperience: [
      "Civic and community leadership experience connected to public service.",
      "Work across government, nonprofit, or legal-adjacent institutions.",
      "Track record of coalition building, constituent outreach, and administrative oversight.",
    ],
  };
}

function getJusticeName(prompt?: string, fallback?: string) {
  const match = prompt?.match(/Justice\s+(.+?)\s+of/i);
  return match?.[1] ?? fallback ?? "Candidate";
}

export default function InsightsPage() {
  const searchParams = useSearchParams();
  const contestId = searchParams.get("contest");
  const choiceId = searchParams.get("choice");
  const subject = searchParams.get("subject");

  const details = useMemo(() => {
    const contest = ballotContests.find((item) => item.id === contestId);
    const choice = contest?.choices.find((item) => item.id === choiceId);
    const title = choice?.name ?? subject ?? getJusticeName(contest?.prompt, contest?.office);
    const seed = `${contest?.id ?? "unknown"}:${choice?.id ?? title}`;

    return {
      contest,
      title,
      profile: buildInsightProfile(seed),
    };
  }, [choiceId, contestId, subject]);

  if (!details.contest) {
    return (
      <main className="insights-shell">
        <section className="insights-card">
          <div className="insights-top-strip" />
          <div className="insights-body">
            <h1>Insights</h1>
            <p className="insights-summary">No matching candidate or contest was found for this view.</p>
            <Link href="/ballot" className="insights-back-link">
              Return to ballot
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="insights-shell">
      <section className="insights-card">
        <div className="insights-top-strip" />
        <header className="insights-header">
          <p className="insights-kicker">Insights</p>
          <h1>{details.title}</h1>
          <p className="insights-office">{details.contest.office}</p>
          <p className="insights-summary">
            {details.contest.whyItMatters ?? "Context for this race is not available yet."}
          </p>
        </header>

        <div className="insights-body">
          <section className="insights-section">
            <h2>Campaign Promises</h2>
            <ul className="insights-list">
              {details.profile.campaignPromises.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="insights-section">
            <h2>Financials</h2>
            <ul className="insights-financials">
              {details.profile.financials.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.percent}%</strong>
                </li>
              ))}
            </ul>
          </section>

          <section className="insights-section">
            <h2>Prior Work Experience</h2>
            <ul className="insights-list">
              {details.profile.priorWorkExperience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <Link href="/ballot" className="insights-back-link">
            Return to ballot
          </Link>
        </div>
      </section>
    </main>
  );
}
