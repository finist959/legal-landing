export default function App(){
  return (
    <div className="min-h-screen text-slate-900 font-sans" style={{background:'#f5f9ff'}}>
      <header className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 mb-6">Юридическая помощь в Санкт-Петербурге</div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Юрист в Санкт-Петербурге</h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">Поможем разобраться в вашей ситуации, защитить интересы и найти сильное решение. Оперативный ответ сегодня. Конфиденциально.</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">Получить помощь</button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-14 border-t border-slate-100">
        <h2 className="text-3xl font-bold mb-8">Решаем юридические вопросы любой сложности</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {['Семейные споры','Взыскание долгов','Недвижимость и сделки','Защита прав потребителей','ДТП и споры со страховой','Сопровождение бизнеса'].map((item)=>(
            <div key={item} className="p-5 rounded-2xl border border-slate-200 bg-slate-50">{item}</div>
          ))}
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-2xl font-semibold">Разобрать мою ситуацию</button>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 border-t border-slate-100">
        <h2 className="text-3xl font-bold mb-8">Профессиональный подход. Понятная стратегия. Реальные действия.</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {['Быстро оцениваем ситуацию','Честно говорим о перспективах','Объясняем простым языком','Предлагаем конкретный план действий'].map((item)=>(
            <div key={item} className="p-5 rounded-2xl border border-slate-200">{item}</div>
          ))}
        </div>
        <button className="bg-slate-900 hover:bg-black text-white px-7 py-4 rounded-2xl font-semibold">Не теряйте время</button>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-100">
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Чем раньше начнём — тем больше возможностей защитить ваши интересы</h2>
          <p className="text-slate-300 text-lg mb-6">Оставьте заявку. Бесплатно разберём вашу ситуацию и подскажем оптимальный следующий шаг.</p>
          <div className="flex flex-wrap gap-3 text-sm mb-8">
            <span className="bg-white/10 px-3 py-2 rounded-full">Ответ сегодня</span>
            <span className="bg-white/10 px-3 py-2 rounded-full">Конфиденциально</span>
            <span className="bg-white/10 px-3 py-2 rounded-full">Без обязательств</span>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg">Разобрать мою ситуацию</button>
        </div>
      </section>

      <div className="fixed bottom-4 left-4 right-4 md:hidden">
        <button className="w-full bg-blue-700 text-white py-4 rounded-2xl font-semibold shadow-2xl">Получить консультацию</button>
      </div>
    </div>
  )
}
