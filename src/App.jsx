import React from 'react'

export default function App() {
  const btn={background:'#1d4ed8',color:'#fff',padding:'14px 24px',border:'none',borderRadius:'14px',fontWeight:700,cursor:'pointer'};
  const card={background:'#fff',padding:'18px',borderRadius:'18px',boxShadow:'0 10px 30px rgba(0,0,0,0.06)'};
  return (
    <div style={{minHeight:'100vh',background:'#f5f9ff',fontFamily:'Arial, sans-serif',color:'#0f172a'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto',padding:'60px 20px'}}>
        <section style={{padding:'40px 0'}}>
          <div style={{display:'inline-block',background:'#e0ecff',padding:'8px 14px',borderRadius:'999px',marginBottom:'18px',fontSize:'14px'}}>Юридическая помощь в Санкт-Петербурге</div>
          <h1 style={{fontSize:'52px',margin:'0 0 16px',lineHeight:'1.1'}}>Юрист в Санкт-Петербурге</h1>
          <p style={{fontSize:'20px',maxWidth:'720px',lineHeight:'1.6',color:'#334155'}}>Поможем разобраться в вашей ситуации, защитить интересы и найти сильное решение. Оперативный ответ сегодня.</p>
          <div style={{marginTop:'28px'}}><button style={btn}>Получить помощь</button></div>
        </section>

        <section style={{padding:'40px 0'}}>
          <h2 style={{fontSize:'34px',marginBottom:'22px'}}>Решаем юридические вопросы любой сложности</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'16px'}}>
            {['Семейные споры','Взыскание долгов','Недвижимость и сделки','Защита прав потребителей','ДТП и споры со страховой','Сопровождение бизнеса'].map(i=><div key={i} style={card}>{i}</div>)}
          </div>
          <div style={{marginTop:'24px'}}><button style={btn}>Разобрать мою ситуацию</button></div>
        </section>

        <section style={{padding:'40px 0'}}>
          <h2 style={{fontSize:'34px',marginBottom:'22px'}}>Профессиональный подход. Понятная стратегия.</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'16px'}}>
            {['Быстро оцениваем ситуацию','Честно говорим о перспективах','Объясняем простым языком','Предлагаем конкретный план действий'].map(i=><div key={i} style={card}>{i}</div>)}
          </div>
          <div style={{marginTop:'24px'}}><button style={{...btn,background:'#0f172a'}}>Не теряйте время</button></div>
        </section>

        <section style={{padding:'40px 0 80px'}}>
          <div style={{background:'#0f172a',color:'#fff',padding:'40px',borderRadius:'24px'}}>
            <h2 style={{fontSize:'38px',marginTop:0}}>Чем раньше начнём — тем больше возможностей защитить ваши интересы</h2>
            <p style={{fontSize:'18px',lineHeight:'1.6',color:'#cbd5e1'}}>Оставьте заявку. Бесплатно разберём вашу ситуацию и подскажем оптимальный следующий шаг.</p>
            <div style={{marginTop:'24px'}}><button style={{...btn,background:'#dc2626'}}>Разобрать мою ситуацию</button></div>
          </div>
        </section>
      </div>
    </div>
  )
}
