import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { getarticle } from "../../Api/Api";
import { setArticle } from "../../Store/Articleslice";
import { useDispatch, useSelector } from "react-redux";


export const Dashboard = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.Article);

  // console.log("article", articles);

  const getdata = async () => {
    const { data } = await getarticle();
    // console.log(data, "data");
    dispatch(setArticle(data));
  };

  useEffect(() => {
    getdata();
  }, [getdata]);

  let count = 1;
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            
            <th>Number</th>
            <th>Category</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Color</th>
            <th>Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((e) => (
            <tr>
              
              <td>{count++}</td>
              <td>{e.category}</td>
              <td>{e.type}</td>
              <td>{e.color}</td>
              <td>{e.size}</td>
              <td>{e.quantity}</td>
              <td>{e.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
