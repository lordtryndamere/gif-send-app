export const Gifitem = ({ title, url }) => {
  return (
    // <div className="card">
    //   <img src={url} alt={title} />
    //   <p>{title}</p>
    // </div>
    <div className="card  ms-1 mb-3 ml-5" style={{ width: 18 + "rem" }}>
      <img src={url} className="card-img-top" alt={title} />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
};
