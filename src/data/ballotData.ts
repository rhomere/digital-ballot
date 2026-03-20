export type Choice = {
  id: string;
  name: string;
  runningMate?: string;
  party?: string;
  ballotNumber?: number;
};

export type ContestSection = "partisan" | "judicial" | "amendment";

export type Contest = {
  id: string;
  section: ContestSection;
  office: string;
  region?: string;
  voteFor: number;
  whyItMatters?: string;
  choices: Choice[];
  // Amendment / judicial-specific
  amendmentNo?: string;
  article?: string;
  fullText?: string;
};

export const ballotContests: Contest[] = [
  // ── PARTISAN ELECTIONS ──────────────────────────────────────────────────
  {
    id: "president",
    section: "partisan",
    office: "President and Vice President",
    region: "United States",
    voteFor: 1,
    whyItMatters: "Sets national priorities on foreign policy, the economy, climate, and federal agency leadership.",
    choices: [
      { id: "trump",    name: "Donald J. Trump",    runningMate: "JD Vance",        party: "REP", ballotNumber: 10 },
      { id: "harris",   name: "Kamala D. Harris",   runningMate: "Tim Walz",        party: "DEM", ballotNumber: 11 },
      { id: "oliver",   name: "Chase Oliver",       runningMate: "Mike ter Maat",   party: "LPF", ballotNumber: 12 },
      { id: "delacruz", name: "Claudia De la Cruz", runningMate: "Karina Garcia",   party: "PSL", ballotNumber: 13 },
      { id: "terry",    name: "Randall Terry",      runningMate: "Stephen Broden",  party: "CPF", ballotNumber: 14 },
      { id: "sonski",   name: "Peter Sonski",       runningMate: "Lauren Onak",     party: "ASP", ballotNumber: 15 },
      { id: "stein",    name: "Jill Stein",         runningMate: "Rudolph Ware",    party: "GRE", ballotNumber: 16 },
      { id: "write-in", name: "Write-in" },
    ],
  },
  {
    id: "us-senator",
    section: "partisan",
    office: "United States Senator",
    region: "Statewide",
    voteFor: 1,
    whyItMatters: "Votes on federal judges, major legislation, and national budget priorities that affect Florida.",
    choices: [
      { id: "scott",          name: "Rick Scott",              party: "REP", ballotNumber: 20 },
      { id: "mucarsel-powell",name: "Debbie Mucarsel-Powell",  party: "DEM", ballotNumber: 21 },
      { id: "bonoan",         name: "Feena Bonoan",            party: "LPF", ballotNumber: 22 },
      { id: "nguyen",         name: "Tuan TQ Nguyen",          party: "NPA", ballotNumber: 23 },
      { id: "everidge",       name: "Ben Everidge",            party: "NPA", ballotNumber: 24 },
      { id: "write-in",       name: "Write-in" },
    ],
  },
  {
    id: "congress-26",
    section: "partisan",
    office: "Representative in Congress, District 26",
    region: "Congressional District 26",
    voteFor: 1,
    whyItMatters: "Represents the district in the U.S. House of Representatives, voting on federal legislation and the federal budget.",
    choices: [
      { id: "diaz-balart", name: "Mario Diaz-Balart", party: "REP", ballotNumber: 32 },
      { id: "atkins",      name: "Joey Atkins",       party: "DEM", ballotNumber: 33 },
      { id: "write-in",    name: "Write-in" },
    ],
  },
  // ── JUDICIAL RETENTION ──────────────────────────────────────────────────
  {
    id: "justice-francis",
    section: "judicial",
    office: "Justice of the Supreme Court",
    region: "Shall Justice Renatha Francis of the Supreme Court be retained in office?",
    voteFor: 1,
    whyItMatters: "Retention votes determine whether appointed justices continue serving on the Florida Supreme Court.",
    choices: [
      { id: "yes", name: "Yes / Sí / Wi", ballotNumber: 80 },
      { id: "no",  name: "No / No / Non", ballotNumber: 81 },
    ],
  },
  {
    id: "justice-sasso",
    section: "judicial",
    office: "Justice of the Supreme Court",
    region: "Shall Justice Meredith Sasso of the Supreme Court be retained in office?",
    voteFor: 1,
    whyItMatters: "Retention votes determine whether appointed justices continue serving on the Florida Supreme Court.",
    choices: [
      { id: "yes", name: "Yes / Sí / Wi", ballotNumber: 82 },
      { id: "no",  name: "No / No / Non", ballotNumber: 83 },
    ],
  },
  // ── CONSTITUTIONAL AMENDMENTS ───────────────────────────────────────────
  {
    id: "amendment-1",
    section: "amendment",
    amendmentNo: "NO. 1",
    article: "ARTICLE IX, SECTION 4 AND ARTICLE XII",
    office: "Partisan Election of Members of District School Boards",
    voteFor: 1,
    whyItMatters: "Changes how school board members are elected, requiring partisan elections starting November 2026.",
    fullText: "Proposing amendments to the State Constitution to require members of a district school board to be elected in a partisan election rather than a nonpartisan election and to specify that the amendment only applies to elections held on or after the November 2026 general election. However, partisan primary elections may occur before the 2026 general election for purposes of nominating political party candidates to that office for placement on the 2026 general election ballot.",
    choices: [
      { id: "yes", name: "Yes / Sí / Wi", ballotNumber: 250 },
      { id: "no",  name: "No / No / Non", ballotNumber: 251 },
    ],
  },
  {
    id: "amendment-2",
    section: "amendment",
    amendmentNo: "NO. 2",
    article: "ARTICLE I, SECTION 28",
    office: "Right to Fish and Hunt",
    voteFor: 1,
    whyItMatters: "Would enshrine fishing and hunting, including traditional methods, as a public right in the Florida Constitution.",
    fullText: "Proposing an amendment to the State Constitution to preserve forever fishing and hunting, including by the use of traditional methods, as a public right and preferred means of responsibly managing and controlling fish and wildlife. Specifies that the amendment does not limit the authority granted to the Fish and Wildlife Conservation Commission under Section 9 of Article IV of the State Constitution.",
    choices: [
      { id: "yes", name: "Yes / Sí / Wi", ballotNumber: 252 },
      { id: "no",  name: "No / No / Non", ballotNumber: 253 },
    ],
  },
  {
    id: "amendment-3",
    section: "amendment",
    amendmentNo: "NO. 3",
    article: "ARTICLE X, SECTION 29",
    office: "Adult Personal Use of Marijuana",
    voteFor: 1,
    whyItMatters: "Would allow adults 21+ to possess and use marijuana for non-medical purposes and authorize licensed cannabis businesses.",
    fullText: "Allows adults 21 years or older to possess, purchase, or use marijuana products and marijuana accessories for non-medical personal consumption by smoking, ingestion, or otherwise; allows Medical Marijuana Treatment Centers, and other state licensed entities, to acquire, cultivate, process, manufacture, sell, and distribute such products and accessories. Applies to Florida law; does not change, or immunize violations of, federal law. Establishes possession limits for personal use. Allows consistent legislation. Defines terms. Provides effective date.",
    choices: [
      { id: "yes", name: "Yes / Sí / Wi", ballotNumber: 254 },
      { id: "no",  name: "No / No / Non", ballotNumber: 255 },
    ],
  },
  {
    id: "amendment-4",
    section: "amendment",
    amendmentNo: "NO. 4",
    article: "ARTICLE I, NEW SECTION",
    office: "Amendment to Limit Government Interference with Abortion",
    voteFor: 1,
    whyItMatters: "Would prohibit laws that restrict abortion before viability or when necessary to protect the patient's health.",
    fullText: "No law shall prohibit, penalize, delay, or restrict abortion before viability or when necessary to protect the patient's health, as determined by the patient's healthcare provider. This amendment does not change the Legislature's constitutional authority to require notification to a parent or guardian before a minor has an abortion.",
    choices: [
      { id: "yes", name: "Yes / Sí / Wi", ballotNumber: 256 },
      { id: "no",  name: "No / No / Non", ballotNumber: 257 },
    ],
  },
  {
    id: "amendment-5",
    section: "amendment",
    amendmentNo: "NO. 5",
    article: "ARTICLE VII, SECTION 6 AND ARTICLE XII",
    office: "Annual Adjustments to the Value of Certain Homestead Exemptions",
    voteFor: 1,
    whyItMatters: "Would automatically adjust homestead property tax exemptions for inflation each year starting January 1, 2025.",
    fullText: "Proposing an amendment to the State Constitution to require an annual adjustment for inflation to the value of current or future homestead exemptions that apply solely to levies other than school district levies and for which every person who has legal or equitable title to real estate and maintains thereon the permanent residence of the owner, or another person legally or naturally dependent upon the owner is eligible. This amendment takes effect January 1, 2025.",
    choices: [
      { id: "yes", name: "Yes / Sí / Wi", ballotNumber: 258 },
      { id: "no",  name: "No / No / Non", ballotNumber: 259 },
    ],
  },
  {
    id: "amendment-6",
    section: "amendment",
    amendmentNo: "NO. 6",
    article: "ARTICLE VI, SECTION 7",
    office: "Repeal of Public Campaign Financing Requirement",
    voteFor: 1,
    whyItMatters: "Would remove the constitutional requirement for public financing of statewide campaigns that agree to spending limits.",
    fullText: "Proposing the repeal of the provision in the State Constitution which requires public financing for campaigns of candidates for elective statewide office who agree to campaign spending limits.",
    choices: [
      { id: "yes", name: "Yes / Sí / Wi", ballotNumber: 260 },
      { id: "no",  name: "No / No / Non", ballotNumber: 261 },
    ],
  },
  // ── COUNTY STRAW BALLOT ─────────────────────────────────────────────────
  {
    id: "straw-wifi",
    section: "amendment",
    amendmentNo: "STRAW BALLOT",
    article: "NON-BINDING",
    office: "Countywide Public Wi-Fi Access",
    voteFor: 1,
    whyItMatters: "A non-binding straw poll on whether the county should expand free public Wi-Fi countywide.",
    fullText: "Should Miami-Dade County take action to expand free public Wi-Fi access countywide, including advocating for any necessary changes to state or federal law?",
    choices: [
      { id: "yes", name: "Yes / Sí / Wi", ballotNumber: 262 },
      { id: "no",  name: "No / No / Non", ballotNumber: 263 },
    ],
  },
];
