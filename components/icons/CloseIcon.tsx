export const CloseIcon = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        <path
          d="M1 1L15 15M15 1L1 15"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
