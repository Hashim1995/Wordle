import Style from "./grid.module.scss";
import { useState, useEffect } from "react";
import { StepBackwardOutlined, RollbackOutlined } from "@ant-design/icons";
const Grid = () => {
  const [data, setData] = useState(
    Array.from({ length: 6 }, (v) => Array.from({ length: 5 }, (v) => null))
  );
  const [count, setCounter] = useState({ col: 0, row: 0 });

  const addFunc = (e) => {
    const audio = document.getElementById("audio");
    audio.play();
    let value = e.target.value;
    setCounter((prev) => ({
      ...prev,
      col: prev.col < 4 ? prev.col + 1 : (prev.col = -1),
      row: prev.col == 5 ? alert("5di") : prev.row,
    }));
    let copy = [...data];
    copy[count.row][count.col] = value;
    setData(copy);
  };

  return (
    <div className={Style.Wrap}>
      <audio
        id="audio"
        src="https://www.fesliyanstudios.com/play-mp3/648"
      ></audio>
      <div className={Style.Grid}>
        {/* {data.map((row, index) => {
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
        })} */}
      </div>

      <div className={Style.Keyboard}>
        <div className={Style.Row}>
          <button onClick={(e) => addFunc(e)} value="Q">
            q
          </button>
          <button onClick={(e) => addFunc(e)} value="W">
            w
          </button>
          <button onClick={(e) => addFunc(e)} value="E">
            e
          </button>
          <button onClick={(e) => addFunc(e)} value="R">
            r
          </button>
          <button onClick={(e) => addFunc(e)} value="T">
            t
          </button>
          <button onClick={(e) => addFunc(e)} value="Y">
            y
          </button>
          <button onClick={(e) => addFunc(e)} value="U">
            u
          </button>
          <button onClick={(e) => addFunc(e)} value="I">
            i
          </button>
          <button onClick={(e) => addFunc(e)} value="O">
            o
          </button>
          <button onClick={(e) => addFunc(e)} value="P">
            p
          </button>
        </div>
        <div className={Style.Row}>
          <button onClick={(e) => addFunc(e)} value="A">
            a
          </button>
          <button onClick={(e) => addFunc(e)} value="S">
            s
          </button>
          <button onClick={(e) => addFunc(e)} value="D">
            d
          </button>
          <button onClick={(e) => addFunc(e)} value="F">
            f
          </button>
          <button onClick={(e) => addFunc(e)} value="G">
            g
          </button>
          <button onClick={(e) => addFunc(e)} value="H">
            h
          </button>
          <button onClick={(e) => addFunc(e)} value="J">
            j
          </button>
          <button onClick={(e) => addFunc(e)} value="K">
            k
          </button>
          <button onClick={(e) => addFunc(e)} value="L">
            l
          </button>
        </div>
        <div className={Style.Row}>
          <button value="↵" style={{ background: "green" }}>
            <RollbackOutlined />
          </button>
          <button onClick={(e) => addFunc(e)} value="Z">
            z
          </button>
          <button onClick={(e) => addFunc(e)} value="X">
            x
          </button>
          <button onClick={(e) => addFunc(e)} value="C">
            c
          </button>
          <button onClick={(e) => addFunc(e)} value="V">
            v
          </button>
          <button onClick={(e) => addFunc(e)} value="B">
            b
          </button>
          <button onClick={(e) => addFunc(e)} value="N">
            n
          </button>
          <button onClick={(e) => addFunc(e)} value="M">
            m
          </button>
          <button style={{ background: "#3a3a3a" }}>
            <StepBackwardOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grid;
