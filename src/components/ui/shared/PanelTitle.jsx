function PanelTitle(props) {
  const { children } = props;

  return (
    <h2
      className={
        'text-base uppercase tracking-[2px] text-gray-600 font-bold font-mono border-b border-gray-750 pb-3 mt-0'
      }
    >
      {children}
    </h2>
  );
}

export default PanelTitle;
