export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Courses</h2>
          <p>
            Learn Machine Learning and Deep Learning in less than 2 months and
            start creating your Dream Projects.
          </p>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
        <div className="row mx-5 serContent">
          <div className="col-md-4 ">
            <i className="fa fa-wordpress"></i>
            <div className="service-desc">
              <h3>ML-DL Course</h3>
              <p>
                Learn Everything from Data Processing,Data Analysis to Building
                and Deploying World class AI systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
