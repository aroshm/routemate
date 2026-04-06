type PageNotFoundProps = {
  title: string;
};
const PageNotFound = ({ title }: PageNotFoundProps) => {
  return <div className="component">{title} OOps!</div>;
};

export default PageNotFound;
