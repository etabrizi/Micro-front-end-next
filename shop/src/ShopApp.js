import React, {useState} from 'react';
import { Tabs } from './components/Tabs';
import Tab from './components/Tabs/Tab';
import Button from './Button';

import './styles.scss'

const ShopApp = () => (

  <div className="contaniner">
    
    <Button />
     <Tabs>
        <Tab title='Shop view 1'>
        {process.env.MODE}
        </Tab>
        <Tab title='Shop view 2'>
        Here is another 1
        </Tab>
      </Tabs>
  </div>
);

export default ShopApp;
