import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyTabs = () => {

    // const [toys, setToys] = useState([]);
    // const [tables, setTables] = useState('sports car, turck');
    // // const [tables2, setTables2] = useState('truck');
    // // const [tables3, setTables3] = useState('regular car');

    // useEffect(() => {
    //     fetch(`http://localhost:5000/toys/${tables}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setToys(data);
    //         })
    // }, [])

    // const result = toys?.filter((toy) => toy.sub_category == 'sports car')
    // console.log(result);

    // const handleTabClick = (tabName) => {
    //     setTables(tabName);
    // };
    return (
        <div>

            <Tabs  >
                <TabList>
                    <Tab>sports car</Tab>
                    <Tab >truck</Tab>
                    <Tab >regular car</Tab>
                </TabList>

                <TabPanel>

                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
            {/* {
                toys.map(toy => <p key={toy?._id} >{toy.sub_category}</p>)
            } */}
        </div>
    );
};

export default ToyTabs;