import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex- w-[300px] flex-col gap-6">
      <p className="text-orange  py-2font-roboto text-center text-3xl font-bold uppercase">
        Since 2023
      </p>
      <div className="flex items-center justify-center gap-4 py-2">
        <ExperienceInfo number="2+" text="Years" />
        <p className="text-brown text-6xl font-bold">-</p>
        <ExperienceInfo number="20+" text="Projects" />
      </div>
      <p className="text-center text-white py-2">
        Passionate about continuous learning, I strive to build responsive,
        user-friendly, and high-performing websites, constantly improving my
        skills to create impactful digital experiences. 🚀
      </p>
      {/* <ExperienceInfo number='2' text='Years'/> */}
    </div>
  );
};

export default ExperienceTopLeft;
