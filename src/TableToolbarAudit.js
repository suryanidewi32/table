///ini kolom search yg panjang
import { Button, Col, Input, Row, Space, Tooltip } from "antd";
import {
  ReloadOutlined,
} from "@ant-design/icons";
import React from "react";
// import TableFilter from "../CustomFilterTable/TableFilter";
import TableAuditFilter from "./TableAuditFilter";
// import { ExportExcel } from "./ExportExcel";
const { Search } = Input;


const TableToolbarAudit = (props) => {
  const {
    onReloadClick,
    onSearchClick,
    onFilterSearchClick,
    onFilterResetClick,
    filterColumn,
    filterDate,
    filterToolbar,
    buttonToolbar,
    role,
    headers,
    dataSource,
    filename,
    column,
  } = props;
  console.log(column)
  const onSearch = (value) => onSearchClick(value);
  const handlefilterSearchClick = (value) => {
    onFilterSearchClick(value);
    // console.log('value',value)
  };
  const handlefilterResetClick = () => {
    onFilterResetClick();
  };

  return (
    <Row gutter={[8, 8]}>
      <Col span={24} style={{ textAlign: "end" }}>
          <Space>
       
        {filterToolbar && (

          <Space>
              
            {filterColumn?.map((fColumn) => {
                
              return (
                <TableAuditFilter
                  key={fColumn.key}
                  name={fColumn.key}
                  label={fColumn.label}
                  dataind
                  onSearchClick={handlefilterSearchClick}
                  onResetClick={handlefilterResetClick}
                />
              );
            })}

             <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{ width: 300 }}
            />
          </Space>
        )}
        </Space>
      </Col>

      <Col span={24} style={{ textAlign: "end" }}>
        <Space>
          <Tooltip title="Reload">
            <Button
              type="text"
              shape="circle"
              icon={<ReloadOutlined />}
              onClick={onReloadClick}
            />
          </Tooltip>
        </Space>
      </Col>
    </Row>
  );
};

export default TableToolbarAudit;
