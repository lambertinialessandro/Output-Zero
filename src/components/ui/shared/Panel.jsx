function Panel(props) {
  const { className, noPadding = false, noBorder = false, children } = props;

  return (
    <div
      className={`flex flex-col gap-4 \
        ${!noPadding ? 'p-5' : ''} \
        overflow-y-auto bg-gray-900 \
        ${!noBorder ? 'border-r border-gray-750 last:border-r-0 last:border-l' : ''} \
        ${className ?? ''}`}
    >
      {children}
    </div>
  );
}

export default Panel;
