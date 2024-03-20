import React, { useState } from 'react'
import Header from '../componnt/Header'
import compenyJson from '../compenyJson.json'
import "../style/style.css"
import ItemCompeny from '../componnt/ItemCompeny'
const HomePage = () => {
  const originalArr = compenyJson;
  const createCompeny = (arr) =>{
      const compsArr = arr.map((item) => {
          return <ItemCompeny
              key={item.id}
              name = {item.name}
              />

      });
      return compsArr;

  }

  return (
    <div>
      <Header/>
        <main>
          <div className="row justify-content-evenly">
            {createCompeny(originalArr)}
          </div>
        </main>
    </div>
  )
}

export default HomePage