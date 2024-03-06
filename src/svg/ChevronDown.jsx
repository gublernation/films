function ChevronDown({ size = '16', color = '#fff', strokeWidth = 2 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 6L8 10L4 6" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export default ChevronDown;
