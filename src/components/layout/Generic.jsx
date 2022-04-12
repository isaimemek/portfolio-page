const Generic = ({ TextSection, ImageSection }) => {
  return (
    <div className="flex flex-col xl:justify-between dark:justify-center items-center xl:flex-row pt-20 xl:pt-32 px-4 xl:px-16">
      <div className="flex max-w-4xl pt-8 px-4 md:pl-12 text-indigo-600 dark:text-indigo-300 antialiased dark:mt-44">
        {TextSection}
      </div>
      <div className="hidden xl:flex dark:hidden max-w-4xl flex-col md:mt-0 w-11/12">
        {ImageSection}
      </div>
    </div>
  );
};

export default Generic;
