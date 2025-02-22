const SingleExeperience = ({ experience }) => {
  return (
    <div className="border-orange border-2 sm:h-auto sm:w-full md:h-[450px] md:w-[240px] border-dashed rounded-2xl mt-12 p-4 ">
      <p className="text-cyan font-bold">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightGray">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {experience.responsibilities.map((responsibility, index) => {
          return <li key={index}>{responsibility}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleExeperience;
