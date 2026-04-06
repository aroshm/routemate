type PageNotFoundProps = {
  title: string;
};
const PageNotFound = ({ title }: PageNotFoundProps) => {
  return (
    <main>
      <div className="component">{title} OOps!</div>
    </main>
  );
};

export default PageNotFound;
