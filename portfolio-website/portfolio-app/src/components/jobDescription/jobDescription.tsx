import "./jobDescription.scss";

export interface JobDescriptionProps {
  jobTitle: string;
  jobDescription: string;
  dates: { dateFrom: string; dateTo: string };
  technologies?: Array<string>;
}

const JobDescription: React.FC<{ props: JobDescriptionProps }> = ({
  props,
}): JSX.Element => {
  return <div>JobDescription</div>;
};

export default JobDescription;
