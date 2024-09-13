export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
        title: string,
        eyebrow: string,
    description: string
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-gray-900">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
       {title}
      </h2>
          <p className="text-center text-white/60 md:text-lg lg:text-xl mt-4 max-w-md mx-auto ">
              {description}
    </p>
    </div>
  );
};
