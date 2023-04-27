import React from "react";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";

interface Props {
  current: number;
  total: number;
  setCurrent: (data?: any) => void;
}

const Paginator = ({ current, setCurrent, total }: Props) => {
  const onChange: PaginationProps["onChange"] = (page) => {    
    setCurrent(page);
  };

  return <Pagination current={current} onChange={onChange} total={total} />;
};

export default Paginator;
