import data from "./data.js";
import './PhotoDisplayer.css';

 const PhotoDisplayer = () => {
  return (
    <div>
      <ul className="photo">
      {data.map(({ photographer,  src: {large}  }) => (
        <li key={large.substring(33, 41)}  className="li-name">
          <div className="img-container">
            <img src={large} alt={photographer}></img>
            <p>{photographer}</p>
          </div>
        </li>
      ))}
    </ul>
      
    </div>
  )
}
export default PhotoDisplayer
