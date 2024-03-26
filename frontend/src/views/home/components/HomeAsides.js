import React, { useState } from "react";
import { Card, Checkbox, Divider } from "antd";
const CheckboxGroup = Checkbox.Group;
/**
 * 
 *
 */
const starOptions = [
  {
    label: "★★★",
    value: 3,
  },
  {
    label: "★★★★",
    value: 4,
  },
  {
    label: "★★★★★",
    value: 5,
  },
];
const scoreOptions = [
  {
    label: "9 points above",
    value: 9,
  },
  {
    label: "8 points above",
    value: 8,
  },
  {
    label: "7 points above",
    value: 7,
  },
  {
    label: "6 points above",
    value: 6,
  },
];
const HomeAside = (props) => {
  const [starList, setStarList] = useState([]);
  const [scoreList, setScoreList] = useState([]);
  const handleFilter = (data) => {
    props.onChange(data);
  };
  return (
    <aside>
      <Card title="category:">
        <h3>Search by Star</h3>
        <CheckboxGroup
          options={starOptions}
          value={starList}
          onChange={(list) => {
            handleFilter({star: list});
            setStarList(list);
          }}
        />
        <Divider />
        <h3>search by rates</h3>
        <CheckboxGroup
          options={scoreOptions}
          value={scoreList}
          onChange={(list) => {
            handleFilter({score: list});
            setScoreList(list);
          }}
        />
      </Card>
    </aside>
  );
};
export default HomeAside;
