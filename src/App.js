import React, { useEffect, useState } from "react";
import CustomAuditFilter from "./CustomAuditFilter";

const headers = ['Id', 'User', 'Description', 'Api', 'Parameter', 'Time'];
const dataSource = [
  {
    _id: "1",
    key: "1",
    user: "a",
    description: "CLI Runner request creation",
    api: "/devices/register",
    parameter: "cwr-1.0.0.1.fw",
    time: "Thu Dec 09 2021 03:42:39",
  },
  {
    _id: "2",
    user: "b",
    description: "Execution of commands on device",
    api: "/sites",
    parameter: "cwr-1.0.0.2.fw",
    time: "Thu Dec 09 2021 03:42:39",
  },
  {
    _id: "3",
    user: "c",
    description: "CLI Runner request creation",
    api: "/users/all",
    parameter: "cwr-1.0.0.3.fw",
    time: "Thu Dec 09 2021 03:42:39",
  },
  {
    _id: "4",
    user: "d",
    description: "CLI Runner request creation",
    api: "database/ping",
    parameter: "switch-1.0.0.1.fw",
    time: "Thu Dec 09 2021 03:42:39",
  },
  {
    _id: "5",
    user: "e",
    description: "Execution of commands on device",
    api: "/atop/devices",
    parameter: "switch-1.0.0.2.fw",
    time: "Thu Dec 09 2021 03:42:39",
  },
  {
    _id: "6",
    user: "f",
    description: "Executiin of commands on device",
    api: "/currentUser",
    parameter: "mdr-1.0.0.1.fw",
    time: "Thu Dec 09 2021 03:42:39",
  },
  {
    _id: "7",
    user: "g",
    description: "CLI Runner request creation",
    api: "/audit-trails/all",
    parameter: "mdr-1.0.0.2.fw",
    time: "Thu Dec 09 2021 03:42:39",
  },
  {
    _id: "8",
    user: "h",
    description: "CLI Runner request creation",
    api: "/tasks/all",
    parameter: "mdr-1.0.0.3.fw",
    time: "Thu Dec 09 2021 03:42:39",
  },
  {
    _id: "9",
    user: "i",
    description: "CLI Runner request creation",
    api: "/sites/tree",
    parameter: "mdr-1.0.0.4.fw",
    time: "Thu Dec 09 2021 03:42:39",
  },
  {
    _id: "10",
    user: "j",
    description: "CLI Runner request creation",
    api: "/users",
    parameter: "mdr-1.0.0.5.fw",
    time: "Thu Dec 09 2021 03:42:39",
  },
];

const filterColumn = [
  { key: "user", label: "User" },
];

const filterDate = [
  { key: "time", label: "Date" },
];

const App = () => {
  const [searchText, setSearchText] = useState('')
  const column = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      sorter: (a, b) => (a.user > b.user ? 1 : -1),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => (a.description > b.description ? 1 : -1),
    },
    {
      title: "Api",
      dataIndex: "api",
      key: "api",
      sorter: (a, b) => (a.api > b.api ? 1 : -1),
    },
    {
      title: "Parameter",
      dataIndex: "parameter",
      key: "parameter",
      sorter: (a, b) => (a.parameter > b.parameter ? 1 : -1),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      sorter: (a, b) => (a.time > b.time ? 1 : -1),
    },
  ];
  
  const handleOnReloadClick = () => {
    console.log("reload button click");
  };

  const handleOnAddButtonClick = () => {
    console.log("add button click");
  };

  const handleOnSearchClick = (key) => {
    console.log("on search click", key);
  };

  const handlefilterSearchClick = (value) => {
  };

  const handlefilterResetClick = () => {
    console.log("reload reset click");
  };

  return (
    <>
      <CustomAuditFilter
        dataSource={dataSource}
        column={column}
        totalRows={10}
        loading={false}
        rowKey="_id"
        title=""
        role={"admin"}
        buttonToolbar={true}
        filterToolbar={true}
        onAddButtonClick={handleOnAddButtonClick}
        onReloadClick={handleOnReloadClick}
        onSearchClick={handleOnSearchClick}
        onFilterSearchClick={handlefilterSearchClick}
        onFilterResetClick={handlefilterResetClick}
        filterColumn={filterColumn}
        filterDate={filterDate}
        headers={headers}
        filename="useractivities"
      />
    </>
  );
};

export default App;
