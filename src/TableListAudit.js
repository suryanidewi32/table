import React from "react";
import { Table } from "antd";

const TableListAudit = (props) => {
  const { dataSource, column, total, loading, rowKey } =
    props;

  return (
    <div className="userList">
      <Table
        dataSource={dataSource}
        columns={column}
        rowKey={rowKey}
        pagination={{
          showQuickJumper: true,
          size: "default",
          total: total,
          pageSizeOptions: [10, 15, 20, 25],
        }}
        loading={loading}
      ></Table>
    </div>
  );
};

export default TableListAudit;
