export default function NotFound() {
  return (
    <div className="container">
      <h1 className="text">404 Not Found</h1>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text:hover {
          scale: 1.5;
          color: red;
        }
      `}</style>
    </div>
  );
}
