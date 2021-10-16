export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        {/* <canvas width="1023" height="722" style="width: 100%; height: 100%; position: absolute; z-index: -1; top: 0px; left: 0px;"></canvas>  */}

        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Check out my Courses
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
