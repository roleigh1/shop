import React from 'react'
import Input from './components/Input'
import "./price.css"
import "./category.css"
export default function Price({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title'>Price</h2>
      <div className=' price-title'>
            <Input
                handleChange={handleChange}
                value="All"
                title="All"
                name="price"
              />
              <Input
                handleChange={handleChange}
                value="1"
                title="€0 - 1"
                name="price"
              />
              <Input
                handleChange={handleChange}
                value="3"
                title="€1 - €3"
                name="price"
              />
              <Input
                handleChange={handleChange}
                value="6"
                title="€3 - €6"
                name="price"
              />
              <Input
                handleChange={handleChange}
                value="9"
                title="€6 - €9"
                name="prices"
              />
            </div>
    </div>
  )
}
