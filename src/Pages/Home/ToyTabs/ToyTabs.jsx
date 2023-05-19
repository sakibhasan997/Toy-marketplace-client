import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyTabs = () => {

    const [toys, setToys] = useState([]);
    const [tables, setTables] = useState('  ');

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${tables}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    // const result = toys?.filter((toy) => toy.sub_category == 'sports car')
    // console.log(result);

    const handleTabClick = (tabName) => {
        setTables(tabName);
    };
    return (
        <div>

            <Tabs  >
                <TabList>
                    <Tab onClick={() => handleTabClick('sports car')}>sports car</Tab>
                    <Tab onClick={() => handleTabClick('truck')}>truck</Tab>
                    <Tab onClick={() => handleTabClick('regular car')}>regular car</Tab>
                </TabList>

                <TabPanel>
                    {/* {
                        toys.map(toy => <p key={toy?._id} >{toy.sub_category}</p>)
                    } */}
                </TabPanel>
                <TabPanel>
                    {/* {
                        toys.map(toy => <p key={toy?._id} >{toy.sub_category}</p>)
                    } */}
                </TabPanel>
                <TabPanel>
                    {/* {
                        toys.map(toy => <p key={toy?._id} >{toy.sub_category}</p>)
                    } */}
                </TabPanel>
            </Tabs>
            
        </div>
    );
};

export default ToyTabs;