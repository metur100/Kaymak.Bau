import './Marquee.css'
const items = ['Abdichtung', 'Wärmedämmung', 'Fußbodenheizung', 'Estrich', 'Oberböden', 'Epoxidharz', 'Schlüter-BECOTEC']
export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="mq" aria-hidden="true">
      <div className="mq__track">
        {row.map((t, i) => <span key={i} className="mq__item">{t}<b>◆</b></span>)}
      </div>
    </div>
  )
}
