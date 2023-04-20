export const Loading = () => {
  const name = [
    "A",
    "N",
    "D",
    "R",
    "E",
    " ",
    "A",
    "D",
    "I",
    "K",
    "A",
    "R",
    "A",
  ];
  return (
    <div className="loading">
      <div className="loading-text">
        {name?.map((item, key) => (
          <span key={key} className="loading-text-words">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
