import Style from "./grid.module.scss";
import { useState, useEffect } from "react";
import { StepBackwardOutlined, RollbackOutlined } from "@ant-design/icons";

const Grid = () => {
  //its correct word
  const word = "ALPHA";

  //length of word
  const colLength = 5;

  //length of user's chance
  const rowLength = 6;

  //user's value
  const [data, setData] = useState(
    Array.from({ length: rowLength }, (v) =>
      Array.from({ length: colLength }, (v) => "")
    )
  );

  //counter which is counting the user's real time col and row
  const [count, setCounter] = useState({ col: 0, row: 0 });

  // its toggle for enter and delete buttons
  const [btndis, setBtndis] = useState(false);

  //its result value for each row
  const [result, setResult] = useState(
    Array.from(
      { length: rowLength },
      (v) => new ResultConstructor(false, [], [], [])
    )
  );

  //its constructor object for result
  function ResultConstructor(pass, missing, wrongIndex, correct) {
    this.pass = pass;
    this.missing = missing;
    this.wrongIndex = wrongIndex;
    this.correct = correct;
  }

  //the function excuted when user click any keyboard button or delete function. (its decrease or increase counter's col and row)
  const counterFunc = () => {
    setCounter((prev) => ({
      ...prev,
      col: prev.col < colLength ? prev.col + 1 : prev.col,
    }));
  };

  // when the function excuted, its remove last element from active row.
  const deleteFunc = () => {
    setBtndis(false);
    setCounter((prev) => ({
      ...prev,
      col:
        prev.row > 0
          ? prev.col > 0
            ? prev.col - 1
            : prev.col
          : prev.col > 0
          ? prev.col - 1
          : 0,
    }));

    let copy = [...data];
    copy[count.row][count.col - 1] = "";
    setData(copy);
  };

  // when user click any keyboard button its add a button's value to  last element from active row.
  const addFunc = (e) => {
    count.col > colLength - 2 && setBtndis(true);
    const audio = document.getElementById("audio");
    audio.play();

    let value = e.target.value;

    let copy = [...data];
    copy[count.row][count.col] = value;
    setData(copy);
    counterFunc();
  };

  // when user click enter button its check the last row's value and create an object which ic include "correctValue", "missingValue", "pass" and "wrongIndexValue"
  const checkResultFunc = () => {
    const userWord = data[count.row].join("");
    let correctArr = [];
    let missingArr = [];
    let wrongIndexArr = [];

    if (word === userWord) {
      let copy = [...result];
      copy[count.row].pass = true;
      setResult(copy);
    }
    // correct
    data[count.row].map((item, i) => {
      if (data[count.row][i] === word[i]) {
        correctArr.push(i);

        let copy = [...result];
        copy[count.row].correct = correctArr;
        setResult(copy);
      }
    });
    //wrong index
    data[count.row].map((item, i) => {
      if (data[count.row][i] !== word[i] && word.includes(data[count.row][i])) {
        wrongIndexArr.push(i);

        let copy = [...result];
        copy[count.row].wrongIndex = wrongIndexArr;
        setResult(copy);
      }
    });
    // missing
    data[count.row].map((item, i) => {
      if (
        data[count.row][i] !== word[i] &&
        !word.includes(data[count.row][i])
      ) {
        missingArr.push(i);

        let copy = [...result];
        copy[count.row].missing = missingArr;

        setResult(copy);
      }
    });

    setCounter((prev) => ({
      ...prev,
      col: 0,
      row: prev.row + 1,
    }));
    setBtndis(false);
  };

  return (
    <div className={Style.Wrap}>
      <audio
        id="audio"
        src="https://www.fesliyanstudios.com/play-mp3/648"
      ></audio>
      <div className={Style.Grid}>
        {data.map((rowEl, index) => {
          return (
            <div key={index} className={Style.Row}>
              {rowEl.map((item, i) => {
                return (
                  <input
                    className={
                      count.row > 0 &&
                      index < count.row &&
                      result[count.row - 1].correct.includes(i)
                        ? Style.correct
                        : count.row > 0 &&
                          index < count.row &&
                          result[count.row - 1].missing.includes(i)
                        ? Style.missing
                        : count.row > 0 &&
                          index < count.row &&
                          result[count.row - 1].wrongIndex.includes(i)
                        ? Style.wrongIndex
                        : null
                    }
                    key={10 + i}
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
          <button
            onClick={checkResultFunc}
            disabled={btndis ? false : true}
            value="↵"
            style={{ background: "green" }}
          >
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
