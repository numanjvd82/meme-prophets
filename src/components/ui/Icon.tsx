export const Icon: React.FC<{
  icon: string;
  link: string;
}> = ({ icon, link }) => {
  return (
    <a
      href={link}
      className="bg-black p-2 rounded-full flex items-center justify-center transition-all hover:scale-105 hover:-translate-y-1 hover:bg-primary"
    >
      <img src={icon} alt="Logo" className="w-5 h-5" />
    </a>
  );
};
