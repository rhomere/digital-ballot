export type Choice = {
  id: string;
  name: string;
  party?: string;
  summary: string;
};

export type Contest = {
  id: string;
  office: string;
  region: string;
  whyItMatters: string;
  estimatedTime: string;
  choices: Choice[];
};

export const ballotContests: Contest[] = [
  {
    id: "president",
    office: "President and Vice President",
    region: "United States",
    whyItMatters:
      "Sets national priorities on the economy, foreign policy, climate, and federal agency leadership.",
    estimatedTime: "2-4 min",
    choices: [
      {
        id: "a",
        name: "Jordan Lee / Maya Chen",
        party: "Forward Alliance",
        summary:
          "Supports lower childcare costs, expanded clean-energy jobs, and debt-free community college.",
      },
      {
        id: "b",
        name: "Elena Ortiz / Grant Walker",
        party: "Civic Reform Party",
        summary:
          "Focuses on small-business tax relief, border modernization, and public safety grants.",
      },
      {
        id: "c",
        name: "Write-In",
        summary: "Use this line to write in an eligible candidate pair.",
      },
    ],
  },
  {
    id: "senate",
    office: "United States Senator",
    region: "Statewide",
    whyItMatters:
      "Votes on federal judges, major legislation, and national budget priorities that affect your state.",
    estimatedTime: "2-3 min",
    choices: [
      {
        id: "a",
        name: "Nadia Brooks",
        party: "Forward Alliance",
        summary:
          "Prioritizes healthcare access, apprenticeship programs, and high-speed rail expansion.",
      },
      {
        id: "b",
        name: "Thomas Reed",
        party: "Civic Reform Party",
        summary:
          "Advocates for lower federal spending, domestic manufacturing, and veterans' services.",
      },
      {
        id: "c",
        name: "Write-In",
        summary: "Use this line to write in an eligible candidate.",
      },
    ],
  },
  {
    id: "governor",
    office: "Governor",
    region: "State",
    whyItMatters:
      "Leads the executive branch, signs or vetoes laws, and manages state emergency response.",
    estimatedTime: "2-3 min",
    choices: [
      {
        id: "a",
        name: "Priya Nandan",
        party: "Forward Alliance",
        summary:
          "Campaigns on affordable housing, transit safety, and statewide school modernization.",
      },
      {
        id: "b",
        name: "Marcus Hale",
        party: "Civic Reform Party",
        summary:
          "Runs on lower utility costs, water resilience projects, and small-town revitalization.",
      },
      {
        id: "c",
        name: "Write-In",
        summary: "Use this line to write in an eligible candidate.",
      },
    ],
  },
  {
    id: "mayor",
    office: "Mayor",
    region: "City",
    whyItMatters:
      "Shapes local policy for housing, transit, policing priorities, and city services.",
    estimatedTime: "2 min",
    choices: [
      {
        id: "a",
        name: "Olivia Price",
        party: "Independent",
        summary:
          "Supports zoning reform, safer bike networks, and business corridor grants.",
      },
      {
        id: "b",
        name: "Daniel Moss",
        party: "Independent",
        summary:
          "Emphasizes sanitation reliability, emergency response staffing, and youth programs.",
      },
      {
        id: "c",
        name: "Write-In",
        summary: "Use this line to write in an eligible candidate.",
      },
    ],
  },
  {
    id: "prop-a",
    office: "Proposition A",
    region: "County",
    whyItMatters:
      "Would fund road repairs and flood-control projects through a temporary sales-tax increase.",
    estimatedTime: "1-2 min",
    choices: [
      {
        id: "yes",
        name: "Yes",
        summary:
          "Approves a 0.25% county sales tax for eight years, restricted to infrastructure projects.",
      },
      {
        id: "no",
        name: "No",
        summary:
          "Rejects the tax increase and keeps current funding levels for infrastructure.",
      },
    ],
  },
  {
    id: "school-board",
    office: "School Board Trustee, District 4",
    region: "District 4",
    whyItMatters:
      "Helps decide curriculum policy, school budgets, superintendent oversight, and facility upgrades.",
    estimatedTime: "2 min",
    choices: [
      {
        id: "a",
        name: "Amy Soto",
        party: "Nonpartisan",
        summary:
          "Wants stronger literacy outcomes, modern arts labs, and educator retention incentives.",
      },
      {
        id: "b",
        name: "Bryce Coleman",
        party: "Nonpartisan",
        summary:
          "Supports career-tech pathways, transparent budgeting dashboards, and parent advisory councils.",
      },
      {
        id: "c",
        name: "Write-In",
        summary: "Use this line to write in an eligible candidate.",
      },
    ],
  },
];
