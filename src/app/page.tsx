import { BallotGuide } from "@/components/BallotGuide";

export default function Home() {
  return (
    <>
      <main className="cover-shell">
        <section className="cover-card" aria-label="Official sample ballot cover">
          <div className="cover-top-strip" />

          <div className="cover-stars" aria-hidden="true">
            <span className="cover-star">★</span>
            <span className="cover-star">★</span>
            <span className="cover-star">★</span>
            <span className="cover-star">★</span>
            <span className="cover-star">★</span>
            <span className="cover-star cover-star-large">★</span>
          </div>

          <div className="cover-content">
            <div className="cover-brand-line">
              <div className="cover-vote-logo" aria-label="Your Voice Your Vote">
                <p className="cover-vote-top">YOUR VOICE, YOUR</p>
                <p className="cover-vote-main">VOTE</p>
              </div>
              <div className="cover-mdc-logo" aria-label="Miami-Dade County">
                <p className="cover-mdc-main">MIAMI-DADE</p>
                <p className="cover-mdc-sub">COUNTY</p>
              </div>
            </div>

            <p className="cover-dept-en">Miami-Dade County Elections Department</p>
            <p className="cover-dept-es">Departamento de Elecciones del Condado de Miami-Dade</p>
            <p className="cover-dept-ht">Depatman Eleksyon Konte Miami-Dade</p>

            <div className="cover-divider" aria-hidden="true">
              <span className="cover-divider-line" />
              <span className="cover-divider-star">★</span>
              <span className="cover-divider-line" />
            </div>

            <h1 className="cover-title-en">Official Sample Ballot</h1>
            <h2 className="cover-title-en">General Election</h2>
            <h3 className="cover-title-en">Tuesday, November 5, 2024</h3>

            <p className="cover-title-es cover-title-es-first">Boleta Oficial de Muestra</p>
            <p className="cover-title-es">Elecciones Generales</p>
            <p className="cover-title-es">Martes 5 de noviembre del 2024</p>

            <p className="cover-title-ht cover-title-ht-first">Echantiyon Bilten Vot Ofisyel</p>
            <p className="cover-title-ht">Eleksyon Jeneral</p>
            <p className="cover-title-ht">Madi 5 novanm 2024</p>

            <div className="cover-social" aria-label="Social links">
              <span className="cover-social-ico">f</span>
              <span className="cover-social-ico">X</span>
              <span className="cover-social-ico">ig</span>
              <span className="cover-social-handle">@MDCElections</span>
            </div>
          </div>

          <div className="cover-qr" aria-hidden="true" />

          <footer className="cover-footer">
            <p>For more information, visit www.miamidade.gov/elections or call 305-499-VOTE (8683).</p>
            <p>For TTY, call 305-499-8480. To obtain this information in an accessible format, please call 305-499-8460.</p>
            <p>Para mas informacion, visite www.miamidade.gov/elections o llame al 305-499-VOTE (8683).</p>
            <p>Para servicios TTY (sigla en ingles) llame al 305-499-8480.</p>
            <p>Pou plis enfomasyon, vizite www.miamidade.gov/elections oswa rele 305-499-VOTE (8683).</p>
            <p>Pou TTY, rele 305-499-8480. Pou w jwenn enfomasyon sa yo nan yon foma aksesib, tanpri rele 305-499-8460.</p>
          </footer>
        </section>
      </main>
      <section id="page-2" aria-label="Voter options page">
        <BallotGuide />
      </section>
    </>
  );
}

