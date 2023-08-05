import { useStateValue } from "../../component/StateProvider";
import useGoogleSearch from "../../component/useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../../component/Search";
import "./Results.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import RoomIcon from "@mui/icons-material/Room";

const Results = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  return (
    <div className="results">
      <div className="results__header">
        <Link to="/">
          <img
            className="results__logo"
            src="../../../assets/google-logo-03.png"
            alt="Google"
          />
        </Link>
        <div className="results__headerBody">
          <Search hideButtons />
          <div className="results__headerOptions">
            <div className="result__headerOptionsLeft">
              <div className="results__headerOption">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="results__headerOption">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="results__headerOption">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="results__headerOption">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="results__headerOption">
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="results__headerOption">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="result__headerOptionsRight">
              <div className="results__headerOption">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="results__headerOption">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term !== null && (
        <div className="results__body">
          <p className="results__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="results__result">
              <a href={item.link}>
                <img
                  className="results__resultImage"
                  src={
                    item.pagemap?.cse_image?.length &&
                    item.pagemap?.cse_image[0].src
                  }
                  alt=""
                />
                {item.displayLink}
              </a>
              <a href={item.link} className="results__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="results__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
