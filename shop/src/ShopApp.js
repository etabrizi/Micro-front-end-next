import React from 'react';
import { Tabs } from './components/Tabs'
import Tab from './components/Tabs/Tab'

import './styles.scss'

const ShopApp = () => (
  <div className="contaniner">
     <Tabs>
        <Tab title='Shop view 1'>
         This is tab for the shop
        </Tab>
        <Tab title='Shop view 2'>
        Here is another 1
        </Tab>
      </Tabs>
  </div>
);

export default ShopApp;
