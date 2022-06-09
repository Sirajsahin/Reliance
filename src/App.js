import { useState } from "react";
import "./styles.css";
const dat = [
  { name: "KULDEEP TRIPATHI" },
  { name: "ASHWANI GANGWAR" },
  { name: "HRIKESH" },
  { name: "KARISHMA" },
  { name: "KAINATH" },
  { name: "PULKIT" },
  { name: "PARITOSH" },
  { name: "SHIVAM SAHU" },
  { name: "KATRINA" },
  { name: "SHERWANI" },
  { name: "ELEPHANT" }
];
function App() {
  const [flage, setFlage] = useState(false);
  const [input, setInput] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(dat);
  const [showFlage, setShowFlage] = useState(false);
  if (input.length === 1) {
    document.getElementById("ff").style.display = "none!important";
  }
  const searchCharacters = (str) => {
    if (str !== "") {
      const temp = data.filter((ch) =>
        ch.name.toLowerCase().includes(str.toLowerCase())
      );
      setData(temp);
    } else {
      setData(dat);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace" && search === "") {
      setInput((val) =>
        val.filter((el, ind) => (ind != val.length - 1 ? true : false))
      );
      setShowFlage(false);
    } else if (event.key === "Backspace" && !search == "") {
      setShowFlage(true);
    }
  };
  const handleSearch = (value) => {
    setSearch(value);
  };
  const show = () => {
    setFlage(true);

    document.getElementById("ff").style.display = "block!important";
  };

  const add = (value, id) => {
    setInput((val) => [...val, value]);
    const updated = data.filter((val, ind) => id !== ind);
    setData(updated);
    setSearch("");
    setShowFlage(false);
    document.getElementById("ff").style.display = "block!important";
  };
  const deleteItm = (id) => {
    const update = input.filter((val, ind) => id !== ind);
    setInput(update);
    document.getElementById("ff").style.display = "none!important";
  };
  console.log(input);
  function stop(e) {
    e.preventDefault();
    let a = document.getElementById("ff");
    if (a.style.display === "none")
      document.getElementById("ff").style.display = "block";
    else document.getElementById("ff").style.display = "none";
  }

  return (
    <div className="App" id="bb" onClick={stop}>
      <div className="box" id="body">
        <div>
          {input.map((val, id) => (
            <p className="display" key={id}>
              {id === input.length - 1 && showFlage ? (
                <span style={{ color: "red" }}> {val}</span>
              ) : (
                <span>{val}</span>
              )}
              <span onClick={() => deleteItm(id)}>X</span>
            </p>
          ))}
        </div>
        <div>
          <input
            className="input-feild"
            type="text"
            onClick={show}
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyUp={(e) => searchCharacters(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search Characters..."
          />
          <div className="data-item" id="ff">
            {flage
              ? data.map((val, id) => (
                  <p className="item" onClick={() => add(val.name, id)}>
                    {val.name}
                  </p>
                ))
              : null}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default App;
