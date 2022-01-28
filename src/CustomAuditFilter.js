import { Card, Col, Row } from "antd";
import React, { useState } from "react";
import TableListAudit from "./TableListAudit";
import TableToolbarAudit from "./TableToolbarAudit";

const CustomAuditFilter = (props) => {
  const {
    dataSource,
    column,
    totalRows,
    loading,
    rowKey,
    title,
    onAddButtonClick,
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
    filename,
  } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const updateSelectedRowKeys = (keysValue) => {
    setSelectedRowKeys(keysValue);
  };

  return (
    <Card title={title}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <TableToolbarAudit
            onAddButtonClick={onAddButtonClick}
            selectedRowKeys={selectedRowKeys}
            onReloadClick={onReloadClick}
            filterToolbar={filterToolbar}
            buttonToolbar={buttonToolbar}
            onSearchClick={onSearchClick}
            onFilterSearchClick={onFilterSearchClick}
            onFilterResetClick={onFilterResetClick}
            filterColumn={filterColumn}
            filterDate={filterDate}
            role={role}
            headers={headers}
            dataSource={dataSource}
            filename={filename}
            column={column}
          />
        </Col>
        <Col span={24}>
          <TableListAudit
            dataSource={dataSource}
            column={column}
            total={totalRows}
            onSelectedRowKeys={updateSelectedRowKeys}
            loading={loading}
            rowKey={rowKey}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default CustomAuditFilter;
