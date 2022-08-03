const Skeleton = ({ className }) => {
  return (
    <div className="animate-pluse">
      <div className={`bg-gray-300 rounded-md ${className}`}></div>
    </div>
  );
};

export default Skeleton;
