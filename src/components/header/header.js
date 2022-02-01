import React from "react";
import Style from "./header.module.scss";
import {
  QuestionCircleOutlined,
  AreaChartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const Header = () => {
  return (
    <div className={Style.Wrap}>
      <div className={Style.Header}>
        <div className={Style.FAQ}>
          <QuestionCircleOutlined />
        </div>
        <h1 className={Style.Title}>WORDLE</h1>
        <div className={Style.Bar}>
          <AreaChartOutlined />
          <MenuOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;
