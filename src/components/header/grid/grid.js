import Style from "./grid.module.scss";
import { useState, useEffect } from "react";
import { StepBackwardOutlined, RollbackOutlined } from "@ant-design/icons";
const Grid = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fiveth, setFiveth] = useState("");
  const [sixth, setSixth] = useState("");
  const n = 5;
  useEffect(() => {}, [first, second, third, fourth, fiveth, sixth]);

  const btnFunc = (e) => {
    const handleRemoveItem = (removeState, arr) => {
      const items = arr;
      if (items.length > 0) {
        const lastIndex = items.length - 1;
        removeState(items.filter((item, index) => index !== lastIndex));
      }
    };

    let val;
    if (e !== null) {
      val = e.target.value;
    }

    if (first.length <= 5) {
      e !== null
        ? setFirst((prev) => [...prev, val])
        : handleRemoveItem(setFirst, first);
    }
    if (first.length >= 5) {
      e !== null ? setSecond((prev) => [...prev, val]) : second.pop();
    }
    if (second.length >= 5) {
      e !== null ? setThird((prev) => [...prev, val]) : third.pop();
    }
    if (third.length >= 5) {
      e !== null ? setFourth((prev) => [...prev, val]) : fourth.pop();
    }
    if (fourth.length >= 5) {
      e !== null ? setFiveth((prev) => [...prev, val]) : fiveth.pop();
    }
    if (fiveth.length >= 5) {
      e !== null ? setSixth((prev) => [...prev, val]) : sixth.pop();
    }
  };

  return (
    <div className={Style.Wrap}>
      <div className={Style.Grid}>
        <div className={Style.Row}>
          {[...Array(n)].map((e, index) => {
            return (
              <input
                key={10 + index}
                readOnly
                type="text"
                value={first[index]}
              />
            );
          })}
        </div>
        <div className={Style.Row}>
          {[...Array(n)].map((e, index) => {
            return (
              <input
                key={20 + index}
                readOnly
                type="text"
                value={second[index]}
              />
            );
          })}
        </div>
        <div className={Style.Row}>
          {[...Array(n)].map((e, index) => {
            return (
              <input
                key={30 + index}
                readOnly
                type="text"
                value={third[index]}
              />
            );
          })}
        </div>
        <div className={Style.Row}>
          {[...Array(n)].map((e, index) => {
            return (
              <input
                key={40 + index}
                readOnly
                type="text"
                value={fourth[index]}
              />
            );
          })}
        </div>
        <div className={Style.Row}>
          {[...Array(n)].map((e, index) => {
            return (
              <input
                key={50 + index}
                readOnly
                type="text"
                value={fiveth[index]}
              />
            );
          })}
        </div>
        <div className={Style.Row}>
          {[...Array(n)].map((e, index) => {
            return (
              <input
                key={60 + index}
                readOnly
                type="text"
                value={sixth[index]}
              />
            );
          })}
        </div>
      </div>

      <div className={Style.Keyboard}>
        <div className={Style.Row}>
          <button onClick={(e) => btnFunc(e)} value="Q">
            q
          </button>
          <button onClick={(e) => btnFunc(e)} value="W">
            w
          </button>
          <button onClick={(e) => btnFunc(e)} value="E">
            e
          </button>
          <button onClick={(e) => btnFunc(e)} value="R">
            r
          </button>
          <button onClick={(e) => btnFunc(e)} value="T">
            t
          </button>
          <button onClick={(e) => btnFunc(e)} value="Y">
            y
          </button>
          <button onClick={(e) => btnFunc(e)} value="U">
            u
          </button>
          <button onClick={(e) => btnFunc(e)} value="I">
            i
          </button>
          <button onClick={(e) => btnFunc(e)} value="O">
            o
          </button>
          <button onClick={(e) => btnFunc(e)} value="P">
            p
          </button>
        </div>
        <div className={Style.Row}>
          <button onClick={(e) => btnFunc(e)} value="A">
            a
          </button>
          <button onClick={(e) => btnFunc(e)} value="S">
            s
          </button>
          <button onClick={(e) => btnFunc(e)} value="D">
            d
          </button>
          <button onClick={(e) => btnFunc(e)} value="F">
            f
          </button>
          <button onClick={(e) => btnFunc(e)} value="G">
            g
          </button>
          <button onClick={(e) => btnFunc(e)} value="H">
            h
          </button>
          <button onClick={(e) => btnFunc(e)} value="J">
            j
          </button>
          <button onClick={(e) => btnFunc(e)} value="K">
            k
          </button>
          <button onClick={(e) => btnFunc(e)} value="L">
            l
          </button>
        </div>
        <div className={Style.Row}>
          <button value="↵" style={{ background: "green" }}>
            <RollbackOutlined />
          </button>
          <button onClick={(e) => btnFunc(e)} value="Z">
            z
          </button>
          <button onClick={(e) => btnFunc(e)} value="X">
            x
          </button>
          <button onClick={(e) => btnFunc(e)} value="C">
            c
          </button>
          <button onClick={(e) => btnFunc(e)} value="V">
            v
          </button>
          <button onClick={(e) => btnFunc(e)} value="B">
            b
          </button>
          <button onClick={(e) => btnFunc(e)} value="N">
            n
          </button>
          <button onClick={(e) => btnFunc(e)} value="M">
            m
          </button>
          <button
            onClick={() => btnFunc(null)}
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
