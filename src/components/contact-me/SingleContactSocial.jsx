const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="border-orange text-orange flex h-12 w-12 items-center justify-center rounded-full border p-3 text-2xl">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
