const Copyright = () => {
  return (
    <div className="nicolas_sm_section">
      <div className="nicolas_sm_copyright">
        <div className="container">
          <div className="extra_container">
            <div className="copyright_in">
              <div className="left">
                <p>
                  <img className="sm_svg" src="img/svg/copyright.svg" alt={1} />{" "}
                  {new Date().getFullYear()} - All Rights Reserved
                </p>
              </div>
              {/* <div className="right">
                <a href="#">Terms &amp; Condition </a>
                <span>/ </span>
                <a href="#">Privacy Policy</a>
              </div> */}
            </div>
            <div className="nicolas_sm_totop">
              <img className="sm_svg" src="img/svg/down_arrow.svg" alt={1} />
              <a className="nicolas_sm_full_link" href="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;

export const Copyright2 = () => {
  return (
    <div className="nicolas_sm_copyright blog">
      <div className="container">
        <div className="extra_container">
          <div className="copyright_in">
            <div className="left">
              <p>
                <img className="sm_svg" src="img/svg/copyright.svg" alt={1} />{" "}
                {new Date().getFullYear()} - All Rights Reserved 
              </p>
            </div>
            {/* <div className="right">
              <a href="#">Terms &amp; Condition </a>
              <span>/ </span>
              <a href="#">Privacy Policy</a>
            </div> */}
          </div>
          <div className="nicolas_sm_totop">
            <img className="sm_svg" src="img/svg/down_arrow.svg" alt={1} />
            <a className="nicolas_sm_full_link" href="#" />
          </div>
        </div>
      </div>
    </div>
  );
};
