import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./Search.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitInput = (event) => {
    event.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TEXT,
      term: input,
    });

    navigate("/results");
  };

  return (
    <form className="search" onSubmit={submitInput}>
      <div className="search__input">
        <SearchIcon />
        <input
          value={input}
          placeholder="Search Google or any search query"
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      <div className="buttons">
        {!hideButtons && (
          <>
            <Button type="submit">Google Search</Button>
            <Button>I'm feeling lucky</Button>
          </>
        )}
      </div>
    </form>
  );
};

export default Search;
