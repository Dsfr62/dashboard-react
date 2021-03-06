import React from 'react';
import Card from './card';
import Navbar from '../global/navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-earthLatte w-full h-full md:h-screen bg-repeat'>
                <div className='grid md:grid-cols-2 gap-5 p-4'>
                    <Card title="Title" subtitle="Subtitle" content="Content"/>
                    <Card title="Title" subtitle="Subtitle" content="Content"/>
                    <Card title="Title" subtitle="Subtitle" content="Content"/>
                    <Card title="Title" subtitle="Subtitle" content="Content"/>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;