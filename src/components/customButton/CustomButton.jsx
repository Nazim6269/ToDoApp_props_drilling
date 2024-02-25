const CustomButton = ({ text, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default CustomButton;
