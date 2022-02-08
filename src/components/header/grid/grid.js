import Style from "./grid.module.scss";
import { useState, useEffect } from "react";
import { StepBackwardOutlined, RollbackOutlined } from "@ant-design/icons";

const Grid = () => {
  const [data, setData] = useState(
    Array.from({ length: 6 }, (v) => Array.from({ length: 5 }, (v) => ""))
  );
  const [count, setCounter] = useState({ col: 0, row: 0 });
  const [btndis, setBtndis] = useState(false);

  const result = {
    first: {
      pass: null,
      wrong: null,
      wrongIndex: null,
      correct: null,
    },
  };
  const word = "ALPHA";

  const counterFunc = () => {
    setCounter((prev) => ({
      ...prev,
      col: prev.col < 5 ? prev.col + 1 : prev.col,
    }));
  };

  const deleteFunc = () => {
    setBtndis(false);
    setCounter((prev) => ({
      ...prev,
      col: prev.row === 1 ? (prev.col = 5) : prev.col > 0 ? prev.col - 1 : 0,
    }));

    let copy = [...data];
    copy[count.row][count.col - 1] = "";
    setData(copy);
  };

  const addFunc = (e) => {
    count.col > 3 && setBtndis(true);
    const audio = document.getElementById("audio");
    audio.play();

    let value = e.target.value;

    let copy = [...data];
    copy[count.row][count.col] = value;
    setData(copy);
    counterFunc();
  };

  const enter = () => {
    const userWord = data[count.row].join("");

    for (var i = 0; i < 5; i++) {
      console.log(userWord[i]);
    }

    if (userWord === word) {
      result.first.pass = true;
    } else {
      result.first.pass = false;
    }
    console.log(result);
  };

  return (
    <div className={Style.Wrap}>
      <audio
        id="audio"
        src="https://www.fesliyanstudios.com/play-mp3/648"
      ></audio>
      <div className={Style.Grid}>
        {data.map((row, index) => {
          return (
            <div key={index} className={Style.Row}>
              {row.map((item, index) => {
                return (
                  <input
                    className={index}
                    key={10 + index}
                    readOnly
                    type="text"
                    value={item}
                  />
                );
              })}
            </div>
          );
        })}
      </div>

      <div className={Style.Keyboard}>
        <div className={Style.Row}>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="Q"
          >
            q
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="W"
          >
            w
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="E"
          >
            e
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="R"
          >
            r
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="T"
          >
            t
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="Y"
          >
            y
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="U"
          >
            u
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="I"
          >
            i
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="O"
          >
            o
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="P"
          >
            p
          </button>
        </div>
        <div className={Style.Row}>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="A"
          >
            a
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="S"
          >
            s
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="D"
          >
            d
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="F"
          >
            f
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="G"
          >
            g
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="H"
          >
            h
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="J"
          >
            j
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="K"
          >
            k
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="L"
          >
            l
          </button>
        </div>
        <div className={Style.Row}>
          <button onClick={enter} value="↵" style={{ background: "green" }}>
            <RollbackOutlined />
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="Z"
          >
            z
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="X"
          >
            x
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="C"
          >
            c
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="V"
          >
            v
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="B"
          >
            b
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="N"
          >
            n
          </button>
          <button
            disabled={btndis ? true : false}
            onClick={(e) => addFunc(e)}
            value="M"
          >
            m
          </button>
          <button
            onClick={() => deleteFunc()}
            style={{ background: "#2d5f7e" }}
          >
            <StepBackwardOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grid;
