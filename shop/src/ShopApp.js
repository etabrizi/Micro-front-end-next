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
       Here is tab 1
        </Tab>
        <Tab title='Shop view 2'>
        Here is tab 2
        </Tab>
      </Tabs>
  </div>
);

export default ShopApp;
