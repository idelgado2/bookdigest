export default function Review({ quotes }: any) {
  return (
    <>
      <p>TIME TO FINIALIZE QUOTES! FROM REVIEW COMPONENT!</p>
      {quotes.map((quote: any) => (
        <div key={quote.id} className="m-4">
          <p>quote: {quote.value}</p>
          <p>quote theme: {quote.theme}</p>
        </div>
      ))}
    </>
  );
}
