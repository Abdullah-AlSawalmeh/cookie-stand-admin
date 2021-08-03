const Footer = ({ reports }) => {
  return (
    <footer className="flex items-center bg-green-500 pl-5 vh20">
      <h1 className="text-xl font-bold">
        {" "}
        {reports.length} Location World Wide
      </h1>
    </footer>
  );
};

export default Footer;
