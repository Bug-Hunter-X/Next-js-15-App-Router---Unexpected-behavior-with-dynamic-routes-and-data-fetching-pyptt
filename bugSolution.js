```javascript
// pages/index.js
export default async function Home() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <ul>
        {data.results.map((character) => (
          <li key={character.id}>
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
```