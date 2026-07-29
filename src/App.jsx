function App() {
  const title = 'state는 화면의 기억';
  const body = '화면이 기억할 값은 state로 관리한다.';

  return (
    <>
      <main className="note-app">
        <h1>한입 노트</h1>
        <article className="note-card">
          <h2>{title}</h2>
          <p>{body}</p>
        </article>
      </main>
    </>
  );
}

export default App;
