import React, { useEffect, useState, startTransition } from "react";
import { Pagination} from "antd";
import HomeAside from "./components/HomeAsides";
import Filter from "../../components/Filter";


export default function Home() {
  const [hotel, setHotel] = useState({
    list: [],
    page: 1,
    pageSize: 10,
    totalCount: 0,
    totalPages: 0,
  });
  const [filter, setFilter] = useState({
    page: 1,
    pageSize: 10,
    star: [],
    score: [],
    area: "",
    time: [],
    adultValue: 0,
    roomValue: 0,
    childValue: 0,
  });
  
  const handlePageChange = (page) => {
    setFilter({ ...filter, page });
  };
  const handlePageSizeChange = (page, size) => {
    setFilter({ ...filter, page, pageSize: size });
  };
  const handleFilterChange = (data) => {
    setFilter({
      ...filter,
      ...data,
    });
  };
  return (
    <div className="Home">
      <Filter changeFilter={handleFilterChange }/>
      <section className="container Homecontent">  
        <HomeAside onChange={handleFilterChange} />
        <div className="hotel_list">
          <Pagination
            className='mt-6'
            current={filter.page || 1}
            total={hotel.totalCount}
            pageSize={filter.pageSize || 10}
            onChange={handlePageChange}
            onShowSizeChange={handlePageSizeChange}
          />
        </div>
      </section>
    </div>
  );
}
