import './Vote.css';
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const Vote = () => {
  const [vote, setVote] = useState(0)
  return (
    <div className="Vote">
      <button className="VoteBtn" onClick={() => setVote(vote + 1)}><IoIosArrowUp /></button>
      <p className="Count">{vote}</p>
      <button className="VoteBtn" onClick={() => setVote(vote - 1)}><IoIosArrowDown /></button>
    </div>
  );
}

export default Vote