const initialNotes = [
  {
    id: 1,
    title: 'JSX',
    body: 'JS 안에서 화면 구조를 표현한다.',
  },
  {
    id: 2,
    title: 'props',
    body: '부모가 자식에게 값을 전달한다.',
  },
];

function App() {
  return (
    <main className="note-app">
      <h1>한입 노트</h1>

      {initialNotes.map(note => (
        <article className="note-card" key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </article>
      ))}
    </main>
  );
}

export default App;
