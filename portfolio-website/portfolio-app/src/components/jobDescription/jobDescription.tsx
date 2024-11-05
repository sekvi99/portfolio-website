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
  return (
    <div className="job-description-container">
      <div className="date-container">
        <p>
          {props.dates.dateFrom}-{props.dates.dateTo}
        </p>
      </div>
      <div className="job-info-container">
        <div className="job-info-content-container">
          <h1>{props.jobTitle}</h1>
          <h4>{props.jobDescription}</h4>
        </div>
        <div className="tech-container">
          {props.technologies?.map((technology, index) => (
            <div key={index} className="tech-badge">
              <p>{technology}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
