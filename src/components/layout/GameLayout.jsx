function GameLayout(props) {
  const { children } = props;
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex h-full duration-500 ease-in-out">{children}</div>
    </div>
  );
}

export default GameLayout;
