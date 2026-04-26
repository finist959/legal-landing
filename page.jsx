import React, { useState } from 'react';

export default function LegalLanding(){
  const [open,setOpen]=useState(false)
  const [step,setStep]=useState(0)
  const [answers,setAnswers]=useState([])
  const [input,setInput]=useState('')
  const questions=[
    'Когда произошло ДТП?',
    'Кто признан виновником?',
    'Есть ли ОСАГО у участников?',
    'Есть ли травмы или вред здоровью?',
    'Какой ущерб автомобилю?',
    'Оставьте телефон для связи.'
  ]

  const send=()=>{
    if(!input.trim()) return;
    const next=[...answers,{q:questions[step],a:input}];
    setAnswers(next);
    setInput('');
    if(step<questions.length-1) setStep(step+1); else setStep(step+1);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-xl font-semibold">Автоюрист СПб</div>
        <button onClick={()=>setOpen(true)} className="px-4 py-2 rounded-2xl shadow bg-white">Бесплатный разбор ДТП</button>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-white shadow text-sm mb-4">Санкт-Петербург</div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Поможем получить компенсацию после ДТП</h1>
          <p className="mt-5 text-lg text-slate-600">Споры со страховой, взыскание ущерба, сопровождение после аварии.</p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <button onClick={()=>setOpen(true)} className="px-6 py-3 rounded-2xl bg-slate-900 text-white shadow">Начать разбор ДТП</button>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold">Что можно взыскать</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• Выплату страховой</li>
            <li>• Полный ущерб автомобилю</li>
            <li>• УТС автомобиля</li>
            <li>• Расходы на эвакуатор</li>
            <li>• Вред здоровью</li>
          </ul>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-500">Автоюрист • Санкт-Петербург</footer>

      <button onClick={()=>setOpen(true)} className="fixed bottom-5 right-5 px-5 py-4 rounded-full shadow-2xl bg-slate-900 text-white">💬 Ассистент ДТП</button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-end md:items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <div>
                <div className="font-semibold">Workspace Assistant</div>
                <div className="text-xs text-slate-500">Помощь после ДТП</div>
              </div>
              <button onClick={()=>setOpen(false)}>✕</button>
            </div>
            <div className="p-4 h-96 overflow-y-auto space-y-3">
              <div className="bg-slate-100 p-3 rounded-2xl">Здравствуйте. Я помогу оценить ситуацию после ДТП.</div>
              {answers.map((item,i)=>(<div key={i} className="space-y-2">
                <div className="bg-slate-100 p-3 rounded-2xl">{item.q}</div>
                <div className="bg-slate-900 text-white p-3 rounded-2xl ml-10">{item.a}</div>
              </div>))}
              {step < questions.length && <div className="bg-slate-100 p-3 rounded-2xl">{questions[step]}</div>}
              {step >= questions.length && <div className="bg-green-100 p-3 rounded-2xl">Спасибо. Заявка сформирована и передана юристу.</div>}
            </div>
            {step < questions.length && <div className="p-4 border-t flex gap-2">
              <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Введите ответ" className="flex-1 border rounded-xl p-3" />
              <button onClick={send} className="px-4 rounded-xl bg-slate-900 text-white">OK</button>
            </div>}
          </div>
        </div>
      )}
    </div>
  )
}
