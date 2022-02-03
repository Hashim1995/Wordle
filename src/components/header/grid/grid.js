import Style from "./grid.module.scss";
import { useState, useEffect } from "react";
import { StepBackwardOutlined, RollbackOutlined } from "@ant-design/icons";
import { useLayoutEffect } from "react";
const Grid = () => {
  // const [first, setFirst] = useState([]);
  // const [second, setSecond] = useState([]);
  // const [third, setThird] = useState([]);
  // const [fourth, setFourth] = useState([]);
  // const [fiveth, setFiveth] = useState([]);
  // const [sixth, setSixth] = useState([]);
  // let rows = [first, second, third, fourth, fiveth, sixth];
  const [rows, setRows] = useState({
    first: [],
    second: [],
    third: [],
    fourth: [],
    fiveth: [],
    sixth: [],
  });

  const deleteFunc = () => {
    // for (var i in rows) {
    //   if (rows[i].length < 1) {
    //     console.log(rows[i - 1]);
    //     rows[i - 1].pop();
    //     break;
    //   }
    // }
  };

  const addFunc = (e) => {
    let val = e !== null;
    if (rows.first.length <= 4) {
      setRows((prev) => ({ ...prev, val }));
      //console.log("1");
    }
    // if (first.length > 4 && second.length <= 4) {
    //   setSecond((prev) => [...prev, val]);
    //   //console.log("2");
    // }
    // if (second.length > 4 && third.length <= 4) {
    //   setThird((prev) => [...prev, val]);
    //   //console.log("3");
    // }
    // if (third.length > 4 && fourth.length <= 4) {
    //   setFourth((prev) => [...prev, val]);
    //   //console.log("4");
    // }
    // if (fourth.length > 4 && fiveth.length <= 4) {
    //   setFiveth((prev) => [...prev, val]);
    //   //console.log("5");
    // }
    // if (fiveth.length > 4 && sixth.length <= 4) {
    //   setSixth((prev) => [...prev, val]);
    //   //console.log("6");
    // }
  };

  return (
    <div className={Style.Wrap}>
      <div className={Style.Grid}>
        {[...Array(6)].map((rowE, rowI) => {
          return (
            <div key={rowI} className={Style.Row}>
              {[...Array(5)].map((e, index) => {
                return (
                  <input
                    className={index}
                    key={10 + index}
                    readOnly
                    type="text"
                  />
                );
              })}
            </div>
          );
        })}
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
          <button
            onClick={() => deleteFunc(null)}
            style={{ background: "#3a3a3a" }}
          >
            <StepBackwardOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grid;
